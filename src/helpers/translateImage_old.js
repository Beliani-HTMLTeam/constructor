import { getImageUrl } from '@utils/ImageManager.js';

const translateImage = ({
  value,
  type = 'relation',
  relyOn = 'slug',
  placeholderPosition = '38',
}) => ({
  src: {
    type: type,
    relyOn: relyOn,
    placeholderPosition: placeholderPosition,
    value: getImageUrl(value, true),
  },
});

export default translateImage;
export { translateImage };
