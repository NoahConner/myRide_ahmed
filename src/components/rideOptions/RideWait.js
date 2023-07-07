import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KumbhSansBold, purple, white } from '../../constants/Index';
import Heading from '../Heading';

const RideWait = () => {
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
        text="Waiting For Ride Request"
        fontSize={moderateScale(20)}
        fontFamily={KumbhSansBold}
        color={purple}
        textAlign="center"
      />
    </View>
  );
};

export default RideWait;
