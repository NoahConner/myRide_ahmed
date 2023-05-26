import { View, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import RideDetail from './RideDetail'
import { AppContext } from '../../context/AppContext';
import {Heading} from '../../components/Index'
import { KumbhSansBold, KumbhSansExtraRegular, white } from '../../constants/Index';
import { moderateScale } from 'react-native-size-matters';

const RidePayment = () => {
  const { rideDetails } = useContext(AppContext);
  return (
    <View>
      <Heading
        style={styles.heading}
        text="Select Your Type"
        fontSize={moderateScale(20, 0.1)}
        fontFamily={KumbhSansBold}
        color={white} 
        textAlign="center"
      />
      <RideDetail rideDetails={rideDetails}/>
    </View>
  )
}
const styles = StyleSheet.create({
  heading: {
    marginBottom: moderateScale(20, 0.1),
  },
});
export default RidePayment