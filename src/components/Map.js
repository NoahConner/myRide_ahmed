import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {screenHeight, screenWidth} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import MapViewDirections from 'react-native-maps-directions';
import {AppContext, useAppContext} from '../context/AppContext';

const CustomMap = () => {
  const {startingLatLng, endingLatLng, setStartingLatLng, setEndingLatLng} =
    useAppContext(AppContext);
  return (
    <View
      style={{
        height: moderateScale(screenHeight - 30),
        width: moderateScale(screenWidth),
      }}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: startingLatLng.latitude,
          longitude: startingLatLng.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <MapViewDirections
          origin={startingPoint}
          destination={endingPoint}
          apikey={apiKey}
          strokeWidth={5}
          strokeColor="purple"
        /> */}
        <Marker
          coordinate={startingLatLng}
          draggable
          onDragEnd={e => setStartingLatLng(e.nativeEvent.coordinate)}
        />
        <Marker
          coordinate={endingLatLng}
          draggable
          onDragEnd={e => setEndingLatLng(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

export default CustomMap;
