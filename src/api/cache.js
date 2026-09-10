class TranslationCache {
	constructor() {
		this.sheetCache = new Map();
		this.staticCache = {
			header: {},
			footer: {},
			templates: {},
			category_links: {},
			category_titles: {},
		};
		this.queryCache = new Map();
		this.staticLoader = null;
	}

	// Dynamic sheets cache
	getSheet(key) {
		return this.sheetCache.get(key);
	}

	setSheet(key, data) {
		this.sheetCache.set(key, data);
	}

	clearSheets() {
		this.sheetCache.clear();
	}

	getSheetKeys() {
		return Array.from(this.sheetCache.keys());
	}

	// Static translations cache
	getStatic() {
		return this.staticCache;
	}

	setStatic(sheet, data) {
		this.staticCache[sheet] = data;
	}

	clearStatic() {
		Object.keys(this.staticCache).forEach((k) => (this.staticCache[k] = {}));
	}

	registerStaticLoader(fn) {
		this.staticLoader = fn;
	}

	async refreshStatic() {
		if (!this.staticLoader) throw new Error('No static loader registered');
		this.clearStatic();
		await this.staticLoader();
	}

	// Campaign queries cache
	getQueries(campaignId, slug) {
		return this.queryCache.get(`${campaignId}::${slug}`) || {};
	}

	setQueries(campaignId, slug, queryData) {
		this.queryCache.set(`${campaignId}::${slug}`, queryData);
	}

	clearQueries() {
		this.queryCache.clear();
	}
}

export const translationCache = new TranslationCache();
export { TranslationCache };
export default translationCache;
