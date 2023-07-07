import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { purple } from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';
import { FindRide, HeaderToggleButton, RidePayment, RideType } from './Index';

const DrawerHeader = ({navigate, style, screen}) => {
  const {rideStages, role} = useAppContext(AppContext);

  return (
    <View
      style={[
        rideStages == 'finding' || screen != 'home' || role == 'Driver'
          ? styles.FindingContainer
          : styles.container,
        style,
      ]}>
      <HeaderToggleButton drawer={navigate} />
      {screen == 'home' && role == 'Passenger'? (
        <View
          style={[
            rideStages == 'finding'
              ? styles.rideOptionsFindingView
              : styles.rideOptionsView,
          ]}>
          {rideStages === 'initial' ? (
            <FindRide />
          ) : rideStages === 'findType' ? (
            <RideType />
          ) : rideStages === 'payment' ? (
            <RidePayment />
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  FindingContainer: {
    width: '100%',
    backgroundColor: purple,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
  },
  container: {
    width: '100%',
    backgroundColor: purple,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    // borderBottomLeftRadius: moderateScale(20),
    // borderBottomRightRadius: moderateScale(20),
  },
  rideOptionsView: {
    paddingVertical: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rideOptionsFindingView: {
    // paddingVertical: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default DrawerHeader;
