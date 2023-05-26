import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Heading } from '../Index';
import { moderateScale } from 'react-native-size-matters';
import {
  KumbhSansExtraBold,
  KumbhSansExtraLight,
  KumbhSansExtraRegular,
  black,
  lightestPurple,
  purple,
  white,
} from '../../constants/Index';
import { formatUSDPrice } from '../../constants/HelperFunctions';
import { AppContext } from '../../context/AppContext';

const CarDetail = ({ car}) => {
  const { rideDetails, setRideDetails } = useContext(AppContext);
  console.log(rideDetails);

  const getImageSource = () => {
    switch (car.image) {
      case 'ride1.png':
        return require('../../../assets/Images/ride1.png');
      case 'ride2.png':
        return require('../../../assets/Images/ride2.png');
      default:
        return null;
    }
  };

  const imageSource = getImageSource();

  const selectVehicle = () => {
    const updatedRideDetails = { ...rideDetails };

    // Set the previous selected car's "selected" property to false
    if (updatedRideDetails.car) {
      updatedRideDetails.car['selected'] = false;
    }

    // Set the new selected car and update rideDetails
    car['selected'] = true;
    updatedRideDetails.car = car;

    setRideDetails(updatedRideDetails);
  };

  return (
    <View style={[styles.container, { backgroundColor: car['selected'] ? lightestPurple : purple }]}>
      <View>
        {imageSource && <Image source={imageSource} resizeMode="contain" />}
      </View>
      <View>
        <Heading
          style={styles.heading}
          text={car.package}
          fontSize={moderateScale(10, 0.1)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="left"
        />
        <Heading
          style={styles.heading}
          text={car.car}
          fontSize={moderateScale(10, 0.1)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="left"
        />
        <Heading
          style={styles.heading}
          text={car.number}
          fontSize={moderateScale(10, 0.1)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="left"
        />
      </View>
      <View>
        <Heading
          style={styles.estimatedPriceHeading}
          text="Estimated Fare"
          fontSize={moderateScale(6, 0.1)}
          fontFamily={KumbhSansExtraLight}
          color={white}
          textAlign="center"
        />
        <Heading
          style={null}
          text={formatUSDPrice(car.fare)}
          fontSize={moderateScale(16, 0.1)}
          fontFamily={KumbhSansExtraBold}
          color={white}
          textAlign="center"
        />
      </View>
      <Button
        style={null}
        fontSize={moderateScale(14, 0.1)}
        backgroundColor={white}
        color={black}
        text={car['selected'] ? "Selected" : "Select"}
        padding={moderateScale(5, 0.1)}
        textAlign="center"
        borderRadius={moderateScale(100, 0.1)}
        width="25%"
        onPress={selectVehicle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.1),
    paddingVertical: moderateScale(20, 0.1),
    alignItems: 'center',
  },
  estimatedPriceHeading: {
    marginBottom: moderateScale(5, 0.1)
  }
});

export default CarDetail;
