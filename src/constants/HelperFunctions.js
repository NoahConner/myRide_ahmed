import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform, Linking} from 'react-native';
// import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';
import {useToast} from 'react-native-toast-notifications';
import {lightestPurple, screenWidth, white} from './Index';
import { moderateScale } from 'react-native-size-matters';
import { socket } from '../stacks/DrawerNavigator';

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
export const formatTime = time => {
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
            console.error('User cancelled camera picker');
          } else if (response.error) {
            console.error('ImagePicker Error: ', response.error);
          } else {
            const selectedImage = response.assets[0];
            const source = {uri: selectedImage.uri};
            setSheet(false);
            setImageSource(source.uri);
          }
        });
      } else {
        console.error('Camera permission denied');
      }
    } else {
      launchCamera(options, response => {
        if (response.didCancel) {
          console.error('User cancelled camera picker');
        } else if (response.error) {
          console.error('ImagePicker Error: ', response.error);
        } else {
          const selectedImage = response.assets[0];
          const source = {uri: selectedImage.uri};
          setSheet(false);
          setImageSource(source?.uri);
        }
      });
    }
  } catch (error) {
    console.error('Error requesting camera permission: ', error);
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
      console.error('User cancelled image picker');
    } else if (response.error) {
      console.error('ImagePicker Error: ', response.error);
    } else {
      const selectedImage = response.assets[0];
      const source = {uri: selectedImage.uri};
      setSheet(false);
      setImageSource(source?.uri);
    }
  });
};
export const handleCallButtonPress = phoneNumber => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url);
};
export const selectDocument = async setState => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    setState(res);
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
    } else {
      console.error('Error selecting document:', error);
    }
  }
};
export const notification = (toast,message) => {
  toast.show(message, {
    type: 'customize',
    placement: 'top',
    duration: 4000,
    offset: 30,
    animationType: 'zoom-in',
    style: {
      backgroundColor: lightestPurple,
      width: screenWidth,
      textColor: white
    },
  });
};
export const socketAccept = (from, to) => {
  socket.emit('rideAccept', {
    from: from,
    to: to
  });
};
export const socketDecline = (from, to) => {
  socket.emit('rideDecline', {
    from: from,
    to: to
  });
};
export const socketArrived = (from, to) => {
  socket.emit('rideArrived', {
    from: from,
    to: to
  });
};
export const socketRideStarted = (from, to) => {
  socket.emit('rideStarted', {
    from: from,
    to: to
  });
};
export const socketRideEnd = (from, to) => {
  socket.emit('rideEnd', {
    from: from,
    to: to
  });
};
export const socketRideRated = (from, to) => {
  socket.emit('rideRated', {
    from: from,
    to: to
  });
};