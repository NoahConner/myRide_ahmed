import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Button, Heading, Icon} from './Index';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  linearGradient,
  purple,
  red,
  screenWidth,
  white,
  yellow,
} from '../constants/Index';
import {AppContext, useAppContext} from '../context/AppContext';
import {formatUSDPrice} from '../constants/HelperFunctions';
import LinearGradient from 'react-native-linear-gradient';

const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
    <Icon
      style={styles.iconStyle}
      key={index}
      name="star"
      size={6}
      color={yellow}
    />
  ));
};

const RideOfferDetail = () => {
  const {rideDetails} = useAppContext(AppContext);

  return (
    <LinearGradient
      style={styles.container}
      colors={linearGradient} 
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.topLine}>
        <View style={styles.profileContentContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/Images/AppLogo.png')}
          />
          <View style={styles.profileContent}>
            <Heading
              text="Bill Carter"
              fontSize={moderateScale(14)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
            <View style={styles.ratingContainer}>{renderIcons()}</View>
            <Heading
              text="Car Reg No."
              fontSize={moderateScale(8)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
            <Heading
              text={rideDetails?.car?.number}
              fontSize={moderateScale(10)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
          </View>
        </View>
        <View style={styles.carContainer}>
          <Image
            style={styles.carImage}
            source={require('../../assets/Images/ride1.png')}
          />
          <Heading
            text="Basic"
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="center"
          />
          <Heading
            text="Estimated Fare"
            fontSize={moderateScale(7)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="center"
          />
          <Heading
            text={formatUSDPrice(rideDetails?.car?.fare)}
            fontSize={moderateScale(20)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="center"
          />
        </View>
      </View>
      <View style={styles.bottomLine}>
        <View style={styles.captainContact}>
          <Heading
            text="Contact Cpt"
            fontSize={moderateScale(8)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="center"
          />
          <View style={styles.contactIcons}>
            <TouchableOpacity onPress={()=>{console.log('call')}}>
            <Icon
              style={[styles.iconStyle, styles.captainIcon]}
              name="phone-alt"
              size={18}
              color={white}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('message')}}>
            <Icon
              style={[styles.iconStyle, styles.captainIcon]}
              name="comment"
              size={18}
              color={white}
            />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          style={styles.null}
          fontSize={moderateScale(14)}
          backgroundColor={red}
          color={white}
          text="Cancel"
          padding={moderateScale(5)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width="30%"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(screenWidth - 30),
    backgroundColor: purple,
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  topLine: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLine: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captainContact: {
    marginTop: moderateScale(10),
  },
  profileContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContent: {
    marginLeft: moderateScale(5),
  },
  profileImage: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(200),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
  },
  iconStyle: {
    marginHorizontal: moderateScale(2),
  },
  captainIcon: {
    marginHorizontal: moderateScale(10),
  },
  carContainer: {},
  carImage: {},
  contactIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
});

export default RideOfferDetail;
