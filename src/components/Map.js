import React from 'react';
import {View} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {black, purple, screenHeight, screenWidth} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';

const CustomMap = () => {
  const startingPoint = {latitude: 24.9369079, longitude: 67.0928863};
  const endingPoint = {
    latitude: 24.929873497852476,
    longitude: 67.11593491135285,
  };

  const pathCoordinates = [startingPoint, endingPoint];

  return (
    <View
      style={{
        height: moderateScale(screenHeight - 30),
        width: moderateScale(screenWidth),
      }}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 24.9369079,
          longitude: 67.0928863,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Polyline
          coordinates={pathCoordinates}
          strokeColor={purple}
          strokeWidth={5}
        />
      </MapView>
    </View>
  );
};

export default CustomMap;
