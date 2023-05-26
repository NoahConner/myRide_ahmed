import {View, StyleSheet} from 'react-native';
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
  const {rideDetails, setRideDetails, setRideStages} = useContext(AppContext);
  const applyCoupan = () => {
    const updatedRideDetails = {...rideDetails, promo: promo};
    setRideDetails(updatedRideDetails);
    setRideStages('payment');
  };
  return (
    <View style={styles.container}>
      <Heading
        text="Enter Promo Code"
        style={styles.heading}
        fontSize={moderateScale(20, 0.1)}
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
        fontSize={moderateScale(20, 0.1)}
      />
      <Button
        style={styles.applyButton}
        fontSize={moderateScale(14, 0.1)}
        backgroundColor={green}
        color={white}
        text="Apply"
        padding={null}
        textAlign="center"
        borderRadius={moderateScale(100, 0.1)}
        width={screenWidth - 250}
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
    marginTop: moderateScale(15, 0.1),
  },
  input: {
    backgroundColor: white,
    paddingHorizontal: moderateScale(10, 0.1),
    paddingVertical: moderateScale(5, 0.1),
    color: black,
    shadowColor: black,
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    borderRadius: moderateScale(5, 0.1),
    width:moderateScale(screenWidth-150,0.1)
  },
  applyButton: {
    paddingHorizontal: moderateScale(5, 0.1),
    paddingVertical: moderateScale(15, 0.1),
    position: 'absolute',
    bottom: -70,
  },
});
export default Promo;
