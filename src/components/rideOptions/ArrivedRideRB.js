import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import {
  formatUSDPrice,
  handleCallButtonPress,
  socketRideStarted,
} from '../../constants/HelperFunctions';
import {
  InterRegular,
  KumbhSansExtraBold,
  green,
  linearGradient,
  screenWidth,
  white,
} from '../../constants/Index';
import { AppContext, useAppContext } from '../../context/AppContext';
import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';

const ArrivedRideRB = () => {
  const {setRideStatus, user, selectedUser} = useAppContext(AppContext);
  const navigation = useNavigation();
  const rideStarted = () => {
    setRideStatus('started');
    socketRideStarted(user?.id, selectedUser?.id);
  };
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
            fontFamily={InterRegular}
            color={white}
            textAlign="left"
          />
          <Heading
            text="House no 151 street 19 block 5"
            fontSize={moderateScale(8)}
            fontFamily={InterRegular}
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
            fontFamily={InterRegular}
            color={white}
            textAlign="left"
          />
          <Heading
            text="City Airport Terminal 5"
            fontSize={moderateScale(8)}
            fontFamily={InterRegular}
            color={white}
            textAlign="left"
          />
        </View>
      </View>
      <View style={styles.addressContainer}>
        <View style={[styles.contactIcons, styles.heading]}>
          <TouchableOpacity
            onPress={() => {
              handleCallButtonPress('1234567890');
            }}>
            <Icon
              style={[styles.iconStyle, styles.captainIcon]}
              name="phone-alt"
              size={18}
              color={white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat', {selectedUser});
            }}>
            <Icon
              solid={true}
              style={[styles.iconStyle, styles.captainIcon]}
              name="comment"
              size={18}
              color={white}
            />
          </TouchableOpacity>
        </View>
        <Heading
          style={styles.heading}
          text={formatUSDPrice(55)}
          fontSize={moderateScale(25)}
          fontFamily={KumbhSansExtraBold}
          color={white}
          textAlign="left"
        />
      </View>
      <Button
        fontSize={moderateScale(14)}
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        backgroundColor={green}
        color={white}
        text="Start Ride"
        padding={moderateScale(10)}
        textAlign="center"
        borderRadius={moderateScale(100)}
        width={moderateScale(screenWidth / 2)}
        onPress={() => rideStarted()}
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
export default ArrivedRideRB;
