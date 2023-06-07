import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Button, Heading, Icon} from '../Index';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  gold,
  linearGradient,
  purple,
  red,
  screenWidth,
  white,
  yellow,
} from '../../constants/Index';
import {formatTime, formatUSDPrice} from '../../constants/HelperFunctions';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
    <Icon
      style={styles.iconStyle}
      key={index}
      name="star"
      solid={true}
      size={6}
      color={gold}
    />
  ));
};

const RideHistoryCard = ({}) => {
  const navigation = useNavigation()
  return (
    <LinearGradient
      style={[styles.container]}
      colors={linearGradient}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.topLine}>
        <View style={styles.profileContentContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/Images/AppLogo.png')}
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
              text="Ar-200"
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
            source={require('../../../assets/Images/ride1.png')}
          />
          <Heading
            text="Basic"
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraRegular}
            color={white}
            textAlign="center"
          />
        </View>
      </View>
      <View style={styles.bottomLine}>
        <View>
          <View style={styles.addressContainer}>
            <Heading
              text="Pick Up"
              fontSize={moderateScale(12)}
              fontFamily={KumbhSansExtraRegular}
              color={yellow}
              textAlign="left"
            />
            <Heading
              text="New York Airport"
              fontSize={moderateScale(13)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
          </View>
          <View style={styles.addressContainer}>
            <Heading
              text="Drop Off"
              fontSize={moderateScale(12)}
              fontFamily={KumbhSansExtraRegular}
              color={yellow}
              textAlign="left"
            />
            <Heading
              text="CT Bus Stop"
              fontSize={moderateScale(13)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
          </View>
          <View style={styles.dateContainer}>
            <Heading
              text={moment(new Date()).format('DD/MMM/YYYY')}
              fontSize={moderateScale(10)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
          </View>
          <View>
            <Heading
              text={formatTime(new Date())}
              fontSize={moderateScale(10)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="left"
            />
          </View>
        </View>
        <View style={styles.rightSide}>
          <View style={styles.fareContainer}>
            <Heading
              text="Estimated Fare"
              fontSize={moderateScale(10)}
              fontFamily={KumbhSansExtraRegular}
              color={white}
              textAlign="center"
            />
            <Heading
              text={formatUSDPrice('55')}
              fontSize={moderateScale(35)}
              fontFamily={KumbhSansExtraBold}
              color={white}
              textAlign="center"
            />
          </View>
          <Button
            style={null}
            fontSize={moderateScale(14)}
            backgroundColor={null}
            color={red}
            text="Report a Problem"
            padding={moderateScale(0)}
            textAlign="right"
            borderRadius={moderateScale(0)}
            fontFamily={KumbhSansExtraBold}
            width="100%"
            onPress={() => navigation.navigate('Help')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    width: moderateScale(screenWidth - 40),
    marginLeft:'auto',
    marginRight:'auto',
  },
  topLine: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginHorizontal: moderateScale(1),
  },
  carContainer: {},
  carImage: {},
  addressContainer: {
    marginTop: moderateScale(10),
  },
  dateContainer: {
    marginTop: moderateScale(10),
  },
  fareContainer: {
    marginTop: moderateScale(10),
  },
  reportProblem: {
    marginTop: moderateScale(20),
  },
  bottomLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default RideHistoryCard;
