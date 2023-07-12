import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { LocationDetail } from '../../components/Index';
import {
  black,
  screenWidth,
  white,
} from '../../constants/Index';

const RideDetail = ({rideDetails}) => {
  return (
    <View style={styles.container}>
      <LocationDetail rideDetails={rideDetails}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: moderateScale(screenWidth - 50),
    backgroundColor: white,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(15),
    shadowColor: black,
    shadowOpacity: Platform.OS == 'ios' ? 0.3 : 1,
    shadowRadius: 10,
    elevation: 20,
    shadowOffset: {width: 2},
  }
});
export default RideDetail;
