import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { DrawerHeader, Heading, Icon, ViewHeader } from '../../components/Index';
import {
  InterRegular,
  KumbhSansExtraBold,
  backgroundColor,
  black,
  darkGray,
  gold,
  purple,
  white
} from '../../constants/Index';
import { AppContext } from '../../context/AppContext';

const renderIcons = () => {
  return Array.from({ length: 5 }).map((_, index) => (
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
const Ratings = ({ }) => {
  const navigation = useNavigation();
  const {theme} = useContext(AppContext);
  const renderRatings = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <View style={styles.addressRow} key={index}>
        <View style={styles.addressRowContent}>
          <View style={styles.profilehead}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/Images/AppLogo.png')}
            />
            <Heading
              text="John smith gave you 5 star rating"
              fontSize={moderateScale(13)}
              fontFamily={InterRegular}
              color={white}
              textAlign="left"
              style={{ marginLeft: moderateScale(10) }}
            />
          </View>
          <View style={styles.ratingContainer}>{renderIcons()}</View>
        </View>
        <View style={styles.commentContainer}>
          <Heading
            text="Comment:"
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraBold}
            color={gold}
            textAlign="left"
            style={styles.heading}
          />
          <Heading
            text="lorem Ipsum asdb adbashd asdhbahsd asdhbasd asdahdada dashd"
            fontSize={moderateScale(13)}
            fontFamily={InterRegular}
            color={white}
            textAlign="left"
          />
        </View>
      </View>
    ));
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme == 'dark' ? black : backgroundColor }}>
      <DrawerHeader
        navigate={navigation}
        style={{ paddingBottom: moderateScale(10) }}
      />
      <View style={{ alignItems: 'center' }}>
        <ViewHeader
          heading="Ratings"
          icon={'home'}
          headingColor={theme == 'dark' ? white : darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
        {renderRatings()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  header: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  addressRow: {
    marginVertical: moderateScale(10),
    width: '95%',
    backgroundColor: purple,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(10),
  },
  addressRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    marginTop: moderateScale(5),
  },
  profileImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(100),
  },
  profilehead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width:'70%'
  },
  commentContainer: {},
  ratingContainer: {
    flexDirection: 'row'
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
});

export default Ratings;