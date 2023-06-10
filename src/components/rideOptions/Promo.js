import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Button, Heading, Input} from '../Index';
import {
  KumbhSansBold,
  KumbhSansExtraBold,
  black,
  gray,
  green,
  screenWidth,
  white,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {AppContext} from '../../context/AppContext';

const Promo = () => {
  const [promo, setPromo] = useState('');
  const [loading, setLoading] = useState(false);
  const {rideDetails, setRideDetails, setRideStages, applyButton} =
    useContext(AppContext);
  const applyCoupan = () => {
    setLoading(true);
    setTimeout(() => {
      const updatedRideDetails = {...rideDetails, promo: promo};
      setRideDetails(updatedRideDetails);
      setRideStages('payment');
    }, 1500);
  };
  return (
    <View style={styles.container}>
      <Heading
        text="Enter Promo Code"
        style={styles.heading}
        fontSize={moderateScale(18)}
        fontFamily={KumbhSansBold}
        color={white}
        textAlign="center"
      />
      <Input
        value={promo}
        setValue={setPromo}
        placeholder="Promo Code"
        type="text"
        style={styles.input}
        placeholderTextColor={gray}
        textAlign="center"
        fontFamily={KumbhSansExtraBold}
        fontSize={moderateScale(20)}
      />
      <Button
        disabled={!applyButton}
        loading={loading}
        style={styles.applyButton}
        fontSize={moderateScale(14)}
        backgroundColor={green}
        color={white}
        text="Apply"
        padding={null}
        textAlign="center"
        borderRadius={moderateScale(100)}
        width={moderateScale(screenWidth/2.5)}
        onPress={() => {
          applyCoupan();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    marginTop: moderateScale(15),
  },
  input: {
    backgroundColor: white,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    color: black,
    shadowColor: black,
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: moderateScale(5),
    width: moderateScale(screenWidth - 150, 0.1),
    marginTop: moderateScale(15, 0.1),
  },
  applyButton: {
    paddingVertical: moderateScale(15),
    position: 'absolute',
    bottom: -80
  },
});
export default Promo;
