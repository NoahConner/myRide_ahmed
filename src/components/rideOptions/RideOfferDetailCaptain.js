import React, { useEffect, useRef } from 'react';
import { Animated, Image, Platform, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import { formatUSDPrice, socketAccept } from '../../constants/HelperFunctions';
import {
  InterRegular,
  KumbhSansExtraBold,
  gold,
  green,
  linearGradient,
  purple,
  red,
  screenWidth,
  white,
} from '../../constants/Index';
import { AppContext, useAppContext } from '../../context/AppContext';
import { Button, Heading, Icon } from '../Index';

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

const RideOfferDetailCaptain = ({
  selectedUser,
  pickup,
  dropOff,
  passengers,
}) => {
  const {setRideStatus, user, setSelectedUser} = useAppContext(AppContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const accept = () => {
    setRideStatus('start');
    socketAccept(user?.id, selectedUser?.id);
    setSelectedUser(selectedUser);
  };
  const decline = () => {
    setRideStatus('decline');
  };
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <LinearGradient
        style={styles.container}
        colors={linearGradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <View style={styles.topLine}>
          <View style={styles.profileContentContainer}>
            {selectedUser?.image ? (
              <Image
                source={{uri: selectedUser?.image}}
                resizeMode="contain"
                style={styles.profileImage}
              />
            ) : null}
            <View style={styles.profileContent}>
              <Heading
                text={selectedUser?.first_name + ' ' + selectedUser?.last_name}
                fontSize={moderateScale(14)}
                fontFamily={InterRegular}
                color={white}
                textAlign="left"
              />
              <View style={styles.ratingContainer}>{renderIcons()}</View>
            </View>
          </View>
          <View style={styles.carContainer}>
            <Heading
              text="Estimated Fare"
              fontSize={moderateScale(10)}
              fontFamily={InterRegular}
              color={white}
              textAlign="center"
            />
            <Heading
              text={formatUSDPrice('55')}
              fontSize={moderateScale(25)}
              fontFamily={KumbhSansExtraBold}
              color={white}
              textAlign="center"
            />
          </View>
        </View>
        <View style={styles.bottomLine}>
          <View style={styles.addressContainer}>
            <View>
              <Heading
                text="Pick Up"
                fontSize={moderateScale(10)}
                fontFamily={InterRegular}
                color={white}
                textAlign="left"
              />
              <Heading
                text={pickup}
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
            <View>
              <Heading
                text="Drop Off"
                fontSize={moderateScale(10)}
                fontFamily={InterRegular}
                color={white}
                textAlign="left"
              />
              <Heading
                text={dropOff}
                fontSize={moderateScale(8)}
                fontFamily={InterRegular}
                color={white}
                textAlign="left"
              />
            </View>
          </View>
          <View style={styles.passengerContainer}>
            <Heading
              text="No Of Passengers"
              fontSize={moderateScale(10)}
              fontFamily={InterRegular}
              color={white}
              textAlign="center"
            />
            <Heading
              text={passengers}
              fontSize={moderateScale(25)}
              fontFamily={KumbhSansExtraBold}
              color={white}
              textAlign="center"
            />
          </View>
          <View style={Platform.OS == 'ios' ? styles.buttonOptionsRelative : styles.buttonOptions}>
            <Button
              onPress={() => accept()}
              style={styles.acceptButton}
              fontSize={moderateScale(14)}
              backgroundColor={green}
              color={white}
              text="Accept"
              padding={moderateScale(5)}
              textAlign="center"
              borderRadius={moderateScale(100)}
              width={moderateScale(screenWidth / 3)}
            />
            <Button
            disabled={true}
              onPress={() => decline()}
              fontSize={moderateScale(14)}
              backgroundColor={red}
              color={white}
              text="Decline"
              padding={moderateScale(5)}
              textAlign="center"
              borderRadius={moderateScale(100)}
              width={moderateScale(screenWidth / 3)}
            />
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(screenWidth - 30),
    backgroundColor: purple,
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: Platform.OS == 'ios' ? moderateScale(30) : moderateScale(20),
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
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
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '30%',
  },
  arrowIconStyle: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  passengerContainer: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(15),
  },
  buttonOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(-30),
    width: '100%',
    zIndex:1000
  },
  buttonOptionsRelative: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(-20),
    flexDirection: 'row',
    width: '100%',
    zIndex:1000
  },
  acceptButton: {
    marginRight: moderateScale(20),
  },
});

export default RideOfferDetailCaptain;
