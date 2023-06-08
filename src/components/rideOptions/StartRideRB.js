import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  green,
  linearGradient,
  screenWidth,
  white,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import Heading from '../Heading';
import Icon from '../Icon';
import LinearGradient from 'react-native-linear-gradient';
import {
  formatUSDPrice,
  handleCallButtonPress,
  socketArrived,
} from '../../constants/HelperFunctions';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button';
import {AppContext, useAppContext} from '../../context/AppContext';

const StartRideRB = () => {
  const navigation = useNavigation();
  const {setRideStatus, user, selectedUser} = useAppContext(AppContext);
  const rideArrived = () => {
    setRideStatus('starting');
    socketArrived(user?.id, selectedUser?.id)
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={linearGradient}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.addressContainer}>
        <View style={styles.addressHeading}>
          <Heading
            text="Pick Up"
            fontSize={moderateScale(10)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="left"
          />
          <Heading
            text="House no 151 street 19 block 5"
            fontSize={moderateScale(8)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="left"
          />
        </View>
        <Icon
          style={styles.arrowIconStyle}
          name="arrow-right"
          solid={true}
          size={15}
          color={white}
        />
        <View style={styles.addressHeading}>
          <Heading
            text="Drop Off"
            fontSize={moderateScale(10)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="left"
          />
          <Heading
            text="City Airport Terminal 5"
            fontSize={moderateScale(8)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="left"
          />
        </View>
      </View>
      <Heading
        text="Tap when Arrived"
        fontSize={moderateScale(10)}
        fontFamily={KumbhSansExtraRegular}
        color={white}
        textAlign="center"
        style={{marginVertical: moderateScale(10)}}
      />
      <Button
        fontSize={moderateScale(14)}
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        backgroundColor={green}
        color={white}
        text="Arrived"
        padding={moderateScale(10)}
        textAlign="center"
        borderRadius={moderateScale(100)}
        width={moderateScale(screenWidth / 2)}
        onPress={() => {rideArrived()}}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    padding: moderateScale(20),
    width: moderateScale(screenWidth),
    position: 'absolute',
    bottom: moderateScale(0),
  },
  addressContainer: {
    marginVertical: moderateScale(10),
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  addressHeading: {
    width: moderateScale(screenWidth / 3),
  },
  heading: {
    width: moderateScale(screenWidth / 2),
  },
  arrowIconStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bottomLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactIcons: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
  captainIcon: {
    marginHorizontal: moderateScale(10),
  },
});
export default StartRideRB;
