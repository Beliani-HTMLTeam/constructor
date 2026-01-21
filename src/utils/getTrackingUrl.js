import { getQueryLink } from "@/helpers/getQueryLink";

export function getTrackingUrl({ type, id }) {
  return type === 'newsletter' ? '?utm_source=newsletter&utm_medium=email&utm_campaign=' + id : '';
}

export function wrapFooterUrl(url) {
  const fullUrl = new URL(url);
  return getQueryLink(fullUrl);
}