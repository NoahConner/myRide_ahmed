import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {KumbhSansBold, purple, white} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import Heading from '../Heading';

const RideSearch = () => {
  return (
    <View
      style={{
        backgroundColor: white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={purple} />
      <Heading
        text="Searching Your Ride"
        fontSize={moderateScale(20)}
        fontFamily={KumbhSansBold}
        color={purple}
        textAlign="center"
      />
    </View>
  );
};

export default RideSearch;
