import { DimasGetImageUrl } from "./ImageManager";

const DimasTranslateImage = ({ value, type = 'relation', relyOn = 'slug', placeholderPosition = '38', folder = null }) => ({
  src: {
    type: type,
    relyOn: relyOn,
    placeholderPosition: placeholderPosition,
    value: DimasGetImageUrl(value, true, folder),
  },
});

export { DimasTranslateImage };
