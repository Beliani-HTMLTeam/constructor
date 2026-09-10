const DB_NAME = 'constructor_db';
const STORE_NAME = 'settings';
const DB_VERSION = 1;
const SCOPE_KEY = 'selectedScope';

function openDB() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);

		request.onupgradeneeded = (event) => {
			const db = event.target.result;

			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME);
			}
		};

		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}

function getCookieScope() {
	try {
		const match = document.cookie.match(/(?:^|;\s*)selectedScope=([^;]+)/);

		return match ? decodeURIComponent(match[1]) : null;
	} catch (err) {
		console.warn('Failed to read cookie for scope:', err);
		return null;
	}
}

function setCookieScope(scope) {
	try {
		if (!scope) {
			document.cookie = 'selectedScope=;path=/;max-age=0;SameSite=Lax';
		} else {
			document.cookie = `selectedScope=${encodeURIComponent(scope)};path=/;max-age=31536000;SameSite=Lax`;
		}
	} catch (err) {
		console.warn('Failed to set cookie for scope:', err);
	}
}

export async function getSavedScope() {
	try {
		const db = await openDB();

		return new Promise((resolve) => {
			const transaction = db.transaction(STORE_NAME, 'readonly');
			const store = transaction.objectStore(STORE_NAME);
			const request = store.get(SCOPE_KEY);

			request.onsuccess = () => {
				const result = request.result;

				if (result) {
					resolve(result);
				} else {
					resolve(getCookieScope());
				}
			};

			request.onerror = () => {
				resolve(getCookieScope());
			};
		});
	} catch (e) {
		console.warn('IndexedDB unavailable, using cookie fallback:', e);
		return getCookieScope();
	}
}

export async function saveSelectedScope(scope) {
	// Always update cookie as backup
	setCookieScope(scope);

	try {
		const db = await openDB();
		
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(STORE_NAME, 'readwrite');
			const store = transaction.objectStore(STORE_NAME);

			const request = scope ? store.put(scope, SCOPE_KEY) : store.delete(SCOPE_KEY);

			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	} catch (e) {
		console.warn('IndexedDB save failed, saved to cookie only:', e);
	}
}
