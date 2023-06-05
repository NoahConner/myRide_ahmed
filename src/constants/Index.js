import {Dimensions} from 'react-native';
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
export const linearGradient = ["#7452B0", "#A78DD5"]
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
// regex
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// dummy array
export const rides = [
  {
    id:1,
    image: 'ride1.png',
    package: 'Premium',
    car: 'Prius 2022',
    number: 'RE-796 ',
    fare: '80',
    selected:false
  },
  {
    id:2,
    image: 'ride2.png',
    package: 'Basic',
    car: 'Passo 2023',
    number: 'RE-796 ',
    fare: '55',
    selected:false
  }
];
export const cards = [
  {
    id:1,
    name: 'Card 01',
    number: '123**********7890',
    type: 'MasterCard',
    selected:false
  },
  {
    id:2,
    name: 'Card 02',
    number: '123**********7890',
    type: 'Visa',
    selected:false
  },
  {
    id:3,
    name: 'Card 03',
    number: '123**********7890',
    type: 'Visa',
    selected:false
  },
  {
    id:4,
    name: 'Card 04',
    number: '123**********7890',
    type: 'MasterCard',
    selected:false
  },
  {
    id:5,
    name: 'Card 05',
    number: '123**********7890',
    type: 'MasterCard',
    selected:false
  },
  {
    id:6,
    name: 'Card 06',
    number: '123**********7890',
    type: 'Visa',
    selected:false
  }
];
export const dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse"
export const user = {
  name: 'Bill Carter',
  image: '../../assets/Images/AppLogo.png',
  rating: 5,
};

export const messages = [
  { id: 1, content: 'Hello', sender: 'receiver' },
  { id: 2, content: 'Hi', sender: 'sender' },
  { id: 3, content: 'How are you?', sender: 'receiver' },
  { id: 4, content: 'I am good. Thanks!', sender: 'sender' },
];