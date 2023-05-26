import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, Icon} from '../Index';
import {moderateScale} from 'react-native-size-matters';
import {
  KumbhSansExtraBold,
  KumbhSansLight,
  lightPurple
} from '../../constants/Index';

const LocationDetail = ({rideDetails}) => {
  return (
    <View>
      <Heading
        style={styles.heading}
        text="Pick Up"
        fontSize={moderateScale(10, 0.1)}
        fontFamily={KumbhSansExtraBold}
        color={lightPurple}
        textAlign="left"
      />
      <Heading
        style={styles.heading}
        text={rideDetails?.pickUpAddress}
        fontSize={moderateScale(10, 0.1)}
        fontFamily={KumbhSansLight}
        color={lightPurple}
        textAlign="left"
      />
      <Icon name={'arrow-down'} size={25} color={lightPurple} />
      <Heading
        style={styles.heading}
        text="Drop Off"
        fontSize={moderateScale(10, 0.1)}
        fontFamily={KumbhSansExtraBold}
        color={lightPurple}
        textAlign="left"
      />
      <Heading
        style={styles.heading}
        text={rideDetails?.dropOffAddress}
        fontSize={moderateScale(10, 0.1)}
        fontFamily={KumbhSansLight}
        color={lightPurple}
        textAlign="left"
      />
      <Heading
        style={styles.heading}
        text="No. Of Passengers"
        fontSize={moderateScale(10, 0.1)}
        fontFamily={KumbhSansExtraBold}
        color={lightPurple}
        textAlign="left"
      />
      <Heading
        style={styles.heading}
        text={rideDetails?.noOfPassengers}
        fontSize={moderateScale(30, 0.1)}
        fontFamily={KumbhSansExtraBold}
        color={lightPurple}
        textAlign="left"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginVertical: moderateScale(5, 0.1),
  },
});
export default LocationDetail;
