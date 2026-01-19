import { toast } from 'sonner';

import { isQuotaExceededError } from '@/helpers/isQuotaExceededError.js';

import { createButton } from './ui.js';
import {
  compressProductsForStorage,
  estimateUncompressedMb,
  isCompressedProducts,
  readProductsIndex,
  writeProductsIndex,
} from './storage.js';

export function buildListToolbar({ body, subtitle, campaigns, openEditorView, renderListView, sortSelect }) {
  const toolbar = document.createElement('div');
  toolbar.className = 'products-modal-toolbar';

  const addBtn = createButton('Add products JSON', 'submit-btn', () => openEditorView({ mode: 'add' }));

  const compressExistingBtn = createButton('Compress existing products', 'cancel-btn', () => {
    const currentIndex = readProductsIndex();
    const legacy = currentIndex.filter((e) => e?.campaign_id && e?.products && !isCompressedProducts(e.products));
    if (legacy.length === 0) return toast.info('No uncompressed entries found.');

    const ok = confirm(`Compress ${legacy.length} existing entr${legacy.length === 1 ? 'y' : 'ies'} now?`);
    if (!ok) return;

    try {
      const next = currentIndex.map((e) => {
        if (!e?.campaign_id || !e?.products || isCompressedProducts(e.products)) return e;

        const raw = e.products;
        const count = Array.isArray(raw) ? raw.length : 0;
        const rawMb = estimateUncompressedMb(raw);

        return {
          ...e,
          products: compressProductsForStorage(raw),
          meta: {
            ...(e?.meta ?? {}),
            count: Number.isFinite(e?.meta?.count) ? e.meta.count : count,
            uncompressed_mb: Number.isFinite(e?.meta?.uncompressed_mb) ? e.meta.uncompressed_mb : rawMb,
            migrated_from_uncompressed: true,
            stored_at: new Date().toISOString(),
          },
        };
      });

      writeProductsIndex(next);
      toast.success(`Compressed ${legacy.length} entr${legacy.length === 1 ? 'y' : 'ies'}.`);
      renderListView({ body, subtitle, campaigns, openEditorView });
    } catch (error) {
      console.error(error);
      if (isQuotaExceededError(error)) return toast.error('LocalStorage quota exceeded while migrating.');
      toast.error('Failed to compress existing products. Check console for details.');
    }
  });

  const clearStorageBtn = createButton('Clear storage', 'cancel-btn products-modal-danger', () => {
    const ok = confirm('All data will be removed from localstorage! Are you sure?');
    if (!ok) return;
    localStorage.clear();
    toast.success('Storage has been cleared.');
    renderListView({ body, subtitle, campaigns, openEditorView });
  });

  const refreshBtn = createButton('Refresh', 'cancel-btn', () =>
    renderListView({ body, subtitle, campaigns, openEditorView })
  );

  const left = document.createElement('div');
  left.className = 'products-modal-toolbar-left';
  left.appendChild(addBtn);
  left.appendChild(compressExistingBtn);
  left.appendChild(clearStorageBtn);
  left.appendChild(refreshBtn);

  const right = document.createElement('div');
  right.className = 'products-modal-toolbar-right';
  right.appendChild(sortSelect);

  toolbar.appendChild(left);
  toolbar.appendChild(right);
  return toolbar;
}
