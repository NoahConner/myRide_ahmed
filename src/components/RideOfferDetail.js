import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Heading, Icon} from './Index';
import {
  KumbhSansExtraBold,
  purple,
  screenWidth,
  white,
  yellow,
} from '../constants/Index';

const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
    <Icon key={index} name="star" size={10} color={yellow} />
  ));
};

const RideOfferDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContentContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/Images/AppLogo.png')}
        />
        <View style={styles.profileContent}>
          <Heading
            text="Bill Carter"
            fontSize={moderateScale(16)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="left"
          />
          <View style={styles.ratingContainer}>{renderIcons()}</View>
          <Heading
            text="Car Reg No."
            fontSize={moderateScale(10)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="left"
          />
          <Heading
            text="RE-769"
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="left"
          />
        </View>
        <View style={styles.carContainer}>
          <Image
            style={styles.carImage}
            source={require('../../assets/Images/ride1.png')}
          />
          <Heading
            text="Basic"
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="center"
          />
          <Heading
            text="Estimated Fare"
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="center"
          />
          <Heading
            text="$55.00"
            fontSize={moderateScale(25)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="center"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(screenWidth - 100),
    backgroundColor: purple,
    marginLeft: moderateScale(50),
    marginRight: moderateScale(50),
    borderRadius: moderateScale(20),
    paddingVertical:moderateScale(20),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  profileContentContainer: {
    flexDirection: 'row',
  },
  profileContent: {},
  profileImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(200),
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  carContainer: {},
  carImage: {},
});

export default RideOfferDetail;
