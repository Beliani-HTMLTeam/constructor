import { getQueryLink } from "@/helpers/getQueryLink";
import { toast } from "sonner";

export function getTrackingUrl({ type, id }) {
	return type === 'newsletter' ? '?utm_source=newsletter&utm_medium=email&utm_campaign=' + id : '';
}

export function wrapFooterUrl(url) {
	if (!url) {
		toast.warning('wrapFooterURL - empty url provided')
		return '';
	}
	const fullUrl = new URL(url);
	return getQueryLink(fullUrl);
}