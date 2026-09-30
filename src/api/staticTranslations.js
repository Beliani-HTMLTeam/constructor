import { toast } from 'sonner';
import { translationCache } from './cache.js';
import { apiClient } from './client.js';

class StaticTranslationsService {
	constructor(cache = translationCache, client = apiClient) {
		this.cache = cache;
		this.client = client;
		this.data = cache.getStatic();
		this.initPromise = null;
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

	// isLoaded() is true as soon as the first sheet arrives, so rendering has to wait for the whole init
	whenReady() {
		return this.initPromise ?? Promise.resolve();
	}

	init({ force = false } = {}) {
		if (!force && this.initPromise) return this.initPromise;

		this.initPromise = this._load({ force }).finally(() => {
			this.initPromise = null;
		});
		return this.initPromise;
	}

	async _load({ force = false } = {}) {
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

		// toast.promise() returns { unwrap }, not the promise, so it can't be awaited
		toast.promise(delayedPromise, {
			loading: 'Initializing static translations...',
			success: () => {
				console.log('Static translations initialized.');
				return 'Translations successfully loaded';
			},
			error: 'Failed to load translations',
		});
		await delayedPromise.catch((error) => console.error('Static translations failed to load', error));
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
// not awaited: the UI shows up right away, rendering waits for whenReady()
staticTranslations.init();

export default staticTranslations;
