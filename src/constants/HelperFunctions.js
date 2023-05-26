import {Image, Platform} from 'react-native';
export const getImageSource = imageName => {
  let imgPath = '';

  if (Platform.OS === 'android') {
    imgPath = `assets:/Images/${imageName.toLowerCase()}`;
  } else {
    imgPath = imageName.toLowerCase();
  }
  console.log(imgPath);
  return Image.resolveAssetSource({uri: imgPath}).uri;
};
export const handleImageLoad = (setLoading) => {
  setLoading(false);
};
