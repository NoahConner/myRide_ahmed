import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Heading from './Heading';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  backgroundColor,
  gold,
  gray,
  green,
  yellow,
} from '../constants/Index';
import { moderateScale } from 'react-native-size-matters';
import Icon from './Icon';

const { width } = Dimensions.get('window');

const ChatHeader = ({ user }) => {
  const renderIcons = () => {
    return Array.from({ length: user?.rating }).map((_, index) => (
      <Icon
        style={styles.iconStyle}
        key={index}
        name="star"
        solid={true}
        size={10}
        color={gold}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading
          text={user?.name}
          fontSize={moderateScale(18)}
          fontFamily={KumbhSansExtraBold}
          color={green}
          textAlign="center"
        />
        <Heading
          text="Online"
          fontSize={moderateScale(10)}
          fontFamily={KumbhSansExtraRegular}
          color={gray}
          textAlign="center"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/AppLogo.png')}
          style={styles.image}
        />
        <View style={styles.ratingContainer}>{renderIcons()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    width: width,
    height: moderateScale(70),
    marginTop:moderateScale(20)
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    position:'relative',
  },
  imageContainer: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(200),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right:moderateScale(10),
    top:moderateScale(10),
    backgroundColor:backgroundColor
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(200),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
    backgroundColor:backgroundColor
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
});

export default ChatHeader;
