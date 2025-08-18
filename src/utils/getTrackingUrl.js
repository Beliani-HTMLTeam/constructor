export function getTrackingUrl({ type, id }) {
  return type === "newsletter"
    ? "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id
    : "";
}
