import { appConfig as config } from '@/utils/config.js';

class ApiClient {
	constructor(baseUrl = config.api_url) {
		this.baseUrl = baseUrl;
	}

	async getStaticSheet(sheet) {
		const url = `${this.baseUrl}static/${sheet}/`;

		try {
			const headers = {
				Accept: 'application/json',
				skip_zrok_interstitial: 'true',
			};

			const res = await fetch(url, {
				method: 'GET',
				headers: headers,
			});

			if (!res.ok) {
				console.warn(`Failed to fetch static sheet '${sheet}': ${res.status} ${res.statusText}`);
				return { data: {} };
			}

			return await res.json();
		} catch (err) {
			console.error(`Error fetching static sheet '${sheet}':`, err);
			return { data: {} };
		}
	}

	async getDynamicSheet({ year, tab }) {
		const encodedTab = encodeURIComponent(String(tab));
		const url = `${this.baseUrl}dynamic/${year}/${encodedTab}`;

		const headers = {
			Accept: 'application/json',
			skip_zrok_interstitial: 'true',
		};

		try {
			const res = await fetch(url, {
				method: 'GET',
				headers: headers,
			});

			const ct = (res.headers.get('content-type') || '').toLowerCase();
			let body = null;

			if (ct.includes('application/json')) {
				body = await res.json();
			} else {
				body = await res.text();
			}

			if (!res.ok) {
				return { error: true, status: res.status, statusText: res.statusText, body };
			}

			return body;
		} catch (err) {
			return { error: true, message: err.message, body: null };
		}
	}
}

export const apiClient = new ApiClient();
export { ApiClient };
export default apiClient;
