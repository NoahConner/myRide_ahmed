import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform, Linking } from 'react-native';
export const handleImageLoad = setLoading => {
  setLoading(false);
};
export function formatUSDPrice(price) {
  if (isNaN(price)) {
    return 'Invalid Price';
  }
  const roundedPrice = Number(price).toFixed(2);
  const parts = roundedPrice.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return '$' + parts.join('.');
}
export const formatTime = (time) => {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedTime = hours + ':' + minutes + ' ' + period;

  return formattedTime;
};
export const handleCameraPress = async (setImageSource, setSheet) => {
  const options = {
    title: 'Select Image',
    mediaType: 'photo',
    quality: 1,
  };

  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            const selectedImage = response.assets[0];
            const source = {uri: selectedImage.uri};
            setSheet(false)
            setImageSource(source);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } else {
      launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled camera picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const selectedImage = response.assets[0];
          const source = {uri: selectedImage.uri};
          setSheet(false)
          setImageSource(source);
        }
      });
    }
  } catch (error) {
    console.log('Error requesting camera permission: ', error);
  }
};

export const handleGalleryPress = (setImageSource, setSheet) => {
  const options = {
    title: 'Select Image',
    mediaType: 'photo',
    quality: 1,
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const selectedImage = response.assets[0];
      const source = {uri: selectedImage.uri};
      setSheet(false)
      setImageSource(source);
    }
  });
};
export const handleCallButtonPress = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url);
};
