import { computeValue } from '@/helpers/computeValue';
import { translateLink } from '@/helpers/translateLink';
import { translateImage } from '@/helpers/translateImage';
import { getImageUrl } from '@/utils/ImageManager';

const resolveImage = (image) => {
  if (!image?.src) return '';

  const {
    src,
    translate = true,
    relyOn = 'slug'
  } = image;

  if (translate) {
    return computeValue(
      translateImage({
        value: src,
        relyOn
      })
    ).src;
  }

  return getImageUrl(src);
}

const resolveLink = (link) => {
  if (!link?.href) return '';

  const {
    href,
    translate = false,
    relyOn = 'origin'
  } = link;

  if (translate) {
    return computeValue(
      translateLink({
        value: href,
        relyOn
      })
    ).href;
  }

  return href;
}

export const resolveQuery = (query) => {
  if (!query && typeof query !== "object")
    return query;

  return Object.fromEntries(
    Object.entries(query).map(([key, value]) => [
      key,
      typeof value === "string" && value.trim().length !== 0
        ? value.trim()
        : "TRANSLATION NOT FOUND"
    ])
  )
}

const resolveEntry = (entry, resolver) => {
  if (Array.isArray(entry)) {
    return entry.map((item) => resolveEntry(item, resolver));
  }

  return resolver(entry);
}

export const resolveAssets = (props = {}) => ({
  images:
    Object.fromEntries(
      Object.entries(props.images ?? {})
        .map(([key, image]) => [
          key,
          resolveEntry(image, resolveImage),
        ]),
    ),
  links:
    Object.fromEntries(
      Object.entries(props.links ?? {})
        .map(([key, link]) => [
          key,
          resolveEntry(link, resolveLink),
        ]),
    )
})