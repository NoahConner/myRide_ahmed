import React from 'react';
import { View, StyleSheet } from 'react-native';
import { purple } from '../constants/Index';
import { FindRide, HeaderToggleButton, RidePayment, RideType } from './Index';
import { moderateScale } from 'react-native-size-matters';
import { AppContext, useAppContext } from '../context/AppContext';

const DrawerHeader = ({ navigate, style }) => {
  const { rideStages } = useAppContext(AppContext);

  return (
    <View style={[styles.container, style]}>
      <HeaderToggleButton drawer={navigate} />
      <View style={styles.rideOptionsView}>
      {rideStages === 'initial' ? <FindRide /> : rideStages === 'finding' ? <RidePayment /> : <RideType />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: purple,
    paddingHorizontal: moderateScale(10, 0.1),
    paddingTop: moderateScale(10, 0.1),
    borderBottomLeftRadius: moderateScale(20, 0.1),
    borderBottomRightRadius: moderateScale(20, 0.1),
  },
  rideOptionsView: {
    paddingVertical: moderateScale(20, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default DrawerHeader;