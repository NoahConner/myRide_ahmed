import Geolocation from '@react-native-community/geolocation';
import { Dimensions, PermissionsAndroid } from 'react-native';
// screen resolutions
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
// colors
export const black = 'black';
export const backgroundColor = '#EFEFEF';
export const red = '#F21C1C';
export const white = 'white';
export const primaryHeadingColor = '#151F3A';
export const purple = '#A389D2';
export const lightPurple = '#a389d2e0';
export const lightestPurple = '#b6a3d9e0';
export const gray = '#B1B1B1';
export const lightGray = '#F5F5F5';
export const lighterGray = '#FAFAFA';
export const lightestGray = '#F4F4F4';
export const darkGray = '#6A6A6A';
export const yellow = 'yellow';
export const gold = 'gold';

export const green = '#0F9776';
export const linearGradient = ['#7452B0', '#A78DD5'];
// fonts
// KumbhSans family
export const KumbhSansBlack = 'KumbhSans-Black';
export const KumbhSansBold = 'KumbhSans-Bold';
export const KumbhSansExtraBold = 'KumbhSans-ExtraBold';
export const KumbhSansExtraLight = 'KumbhSans-ExtraLight';
export const KumbhSansLight = 'KumbhSans-Light';
export const KumbhSansRegular = 'KumbhSans-Regular';
export const KumbhSansExtraSemiBold = 'KumbhSans-ExtraSemiBold';
export const KumbhSansExtraThin = 'KumbhSans-ExtraThin';
// inter family
export const InterBlack = 'Inter-Black';
export const InterBold = 'Inter-Bold';
export const InterExtraBold = 'Inter-ExtraBold';
export const InterExtraLight = 'Inter-ExtraLight';
export const InterLight = 'Inter-Light';
export const InterMedium = 'Inter-Medium';
export const InterRegular = 'Inter-Regular';
export const InterSemiBold = 'Inter-SemiBold';
export const InterThin = 'Inter-Thin';
// regex
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// dummy array
export const rides = [
  {
    id: 1,
    image: 'ride1.png',
    package: 'Premium',
    car: 'Prius 2022',
    number: 'RE-796 ',
    fare: '80',
    selected: false,
  },
  {
    id: 2,
    image: 'ride2.png',
    package: 'Basic',
    car: 'Passo 2023',
    number: 'RE-796 ',
    fare: '55',
    selected: false,
  },
];
export const cards = [
  {
    id: 1,
    name: 'Card 01',
    number: '123**********7890',
    type: 'MasterCard',
    selected: false,
  },
  {
    id: 2,
    name: 'Card 02',
    number: '123**********7890',
    type: 'Visa',
    selected: false,
  },
  {
    id: 3,
    name: 'Card 03',
    number: '123**********7890',
    type: 'Visa',
    selected: false,
  },
  {
    id: 4,
    name: 'Card 04',
    number: '123**********7890',
    type: 'MasterCard',
    selected: false,
  },
  {
    id: 5,
    name: 'Card 05',
    number: '123**********7890',
    type: 'MasterCard',
    selected: false,
  },
  {
    id: 6,
    name: 'Card 06',
    number: '123**********7890',
    type: 'Visa',
    selected: false,
  },
];
export const updateSelection = () => {
  for (let i = 0; i < rides.length; i++) {
    rides[i].selected = false;
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].selected = false;
  }
};
export const dummyText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse';
export const user = {
  name: 'Bill Carter',
  image: '../../assets/Images/AppLogo.png',
  rating: 5,
};
export const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const markers = [
  {
    latlng: {latitude: 37.78825, longitude: -122.4324},
    title: 'Marker 1',
    description: 'This is marker 1',
  },
];
export const apiKey = 'AIzaSyD8i3TGGkBPF757aCT-w36E6zvSer3r2KE';
export const getCurrentLocation = async (setStartingLatLng) => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission denied');
        return;
      }
    }

    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // try {
          // const response = await fetch(
          //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          // );
          // const data = await response.json();

          // if (data.status === 'OK') {
          //   const placeName = data.results[0].formatted_address;
          //   console.log(placeName);
            setStartingLatLng({ latitude, longitude });
        //   } else {
        //     console.log('Error geocoding:', data);
        //   }
        // } catch (error) {
        //   console.error('Error geocoding:', error);
        // }
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};
