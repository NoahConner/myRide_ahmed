import {Dimensions} from 'react-native';
// screen resolutions
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
// colors
export const black = 'black';
export const white = 'white';
export const primaryHeadingColor = '#151F3A';
export const purple = '#A389D2';
export const lightPurple = '#a389d2e0';
export const lightestPurple = '#b6a3d9e0';
export const gray = '#B1B1B1';
export const lightGray = 'lightGray';
export const darkGray = 'darkGray';
export const yellow = 'yellow';
// fonts
export const KumbhSansBlack = 'KumbhSans-Black';
export const KumbhSansBold = 'KumbhSans-Bold';
export const KumbhSansExtraBold = 'KumbhSans-ExtraBold';
export const KumbhSansExtraLight = 'KumbhSans-ExtraLight';
export const KumbhSansLight = 'KumbhSans-Light';
export const KumbhSansExtraMedium = 'KumbhSans-ExtraMedium';
export const KumbhSansExtraRegular = 'KumbhSans-ExtraRegular';
export const KumbhSansExtraSemiBold = 'KumbhSans-ExtraSemiBold';
export const KumbhSansExtraThin = 'KumbhSans-ExtraThin';
// dummy rides
export const rides = [
  {
    id:1,
    image: 'ride1.png',
    package: 'Premium',
    car: 'Prius 2022',
    number: 'RE-796 ',
    fare: '80',
  },
  {
    id:2,
    image: 'ride2.png',
    package: 'Basic',
    car: 'Passo 2023',
    number: 'RE-796 ',
    fare: '55',
  }
];
