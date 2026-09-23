import { toast } from 'sonner';
import { translationCache } from './cache.js';
import { apiClient } from './client.js';

class StaticTranslationsService {
	constructor(cache = translationCache, client = apiClient) {
		this.cache = cache;
		this.client = client;
		this.data = cache.getStatic();
	}

	get header() {
		return this.data.header;
	}

	get footer() {
		return this.data.footer;
	}

	get templates() {
		return this.data.templates;
	}

	get category_links() {
		return this.data.category_links;
	}

	get category_titles() {
		return this.data.category_titles;
	}

	isLoaded() {
		return Object.values(this.data).some((sheet) => Object.keys(sheet).length > 0);
	}

	async init({ force = false } = {}) {
		if (this.isLoaded() && !force) {
			console.log('Static translations already loaded, skipping initialization');
			return;
		}

		if (force) {
			this.cache.clearStatic();
		}

		console.log('Initializing static translations...');

		const loadPromise = Promise.all(
			Object.keys(this.data).map(async (key, index) => {
				// Stagger requests slightly to avoid rate limit spikes
				if (index > 0) {
					await new Promise((resolve) => setTimeout(resolve, 1000));
				}
				const translations = await this.client.getStaticSheet(key);
				this.cache.setStatic(key, translations.data || {});
			})
		);

		const delayedPromise = Promise.all([loadPromise, new Promise((resolve) => setTimeout(resolve, 1000))]);

		await toast.promise(delayedPromise, {
			loading: 'Initializing static translations...',
			success: () => {
				console.log('Static translations initialized.');
				return 'Translations successfully loaded';
			},
			error: 'Failed to load translations',
		});
	}

	clear() {
		this.cache.clearStatic();
	}

	async refresh() {
		await this.init({ force: true });
	}
}

export const staticTranslations = new StaticTranslationsService();
export { StaticTranslationsService };

// Self-register loader and warm up on import
staticTranslations.cache.registerStaticLoader(async () => await staticTranslations.refresh());
await staticTranslations.init();

export default staticTranslations;
