import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Heading from './Heading';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  gold,
  gray,
  green,
  screenWidth,
} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import Icon from './Icon';
const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
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
const ChatHeader = ({selectedUser}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.textContainer}>
          <Heading
            text={selectedUser?.first_name + ' ' + selectedUser?.last_name}
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
      </View>
      <View style={styles.imageContainer}>
        {selectedUser?.image ? (
          <Image
            source={{uri: selectedUser?.image}}
            resizeMode="contain"
            style={styles.image}
          />
        ) : null}
        {console.log(selectedUser)}
        {selectedUser?.type == 'driver' && (
          <View style={styles.ratingContainer}>{renderIcons()}</View>
        )}
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
    width: screenWidth,
    height: moderateScale(70),
    marginTop: moderateScale(20),
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(screenWidth),
    paddingLeft: moderateScale(70),
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(200),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
});

export default ChatHeader;
