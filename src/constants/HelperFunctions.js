import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform, Linking} from 'react-native';
// import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';
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
            console.log('User cancelled camera picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            const selectedImage = response.assets[0];
            const source = {uri: selectedImage.uri};
            setSheet(false);
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
          setSheet(false);
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
      setSheet(false);
      setImageSource(source);
    }
  });
};
export const handleCallButtonPress = phoneNumber => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url);
};
// export const uploadFile = async () => {
//   try {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message: 'App needs access to your storage.',
//           buttonPositive: 'OK',
//           buttonNegative: 'Cancel',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED || granted === true) {
//         // Permission granted, show file picker
//         FilePickerManager.showFilePicker(null, response => {
//           console.log('Response = ', response);
  
//           if (response.didCancel) {
//             console.log('User cancelled file picker');
//           } else if (response.error) {
//             console.log('FilePickerManager Error: ', response.error);
//           } else {
//             console.log('FilePickerManager Response: ', response);
//             // setFile(response);
//           }
//         });
//       } else {
//         // Permission denied
//         console.log('Storage permission denied');
//       }
//     } else {
//       // For platforms other than Android, show file picker directly
//       FilePickerManager.showFilePicker(null, response => {
//         console.log('Response = ', response);
  
//         if (response.didCancel) {
//           console.log('User cancelled file picker');
//         } else if (response.error) {
//           console.log('FilePickerManager Error: ', response.error);
//         } else {
//           console.log('FilePickerManager Response: ', response);
//           // setFile(response);
//         }
//       });
//     }
//   } catch (error) {
//     console.log('Error: ', error);
//   }
// };
export const selectDocument = async (setState) => {
  console.log(setState, "hello state");
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    setState(res);
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
      console.log('Document selection cancelled.');
    } else {
      console.error('Error selecting document:', error);
    }
  }
};
