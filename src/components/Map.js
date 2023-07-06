import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {screenHeight, screenWidth} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import MapViewDirections from 'react-native-maps-directions';
import {AppContext, useAppContext} from '../context/AppContext';

const CustomMap = () => {
  const {
    startingLatLng,
    endingLatLng,
    setStartingLatLng,
    setEndingLatLng,
    rideStages,
    theme,
  } = useAppContext(AppContext);

  const mapRef = useRef(null);
  darkMapStyle = [
    {
      elementType: 'geometry',
      stylers: [{color: '#242f3e'}],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{color: '#242f3e'}],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [{visibility: 'off'}],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];
  defaultMapStyle = [];
  useEffect(() => {
    if (mapRef.current && startingLatLng) {
      const region = {
        latitude: startingLatLng.latitude,
        longitude: startingLatLng.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      mapRef.current.animateToRegion(region);
    }
  }, [startingLatLng]);
  useEffect(() => {
    if (mapRef.current && endingLatLng) {
      const region = {
        latitude: endingLatLng.latitude,
        longitude: endingLatLng.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      mapRef.current.animateToRegion(region);
    }
  }, [endingLatLng]);
  return (
    <View
      style={{
        height: moderateScale(screenHeight),
        width: moderateScale(screenWidth),
        zIndex: -10,
      }}>
      <MapView
        customMapStyle={theme == 'dark' ? darkMapStyle : defaultMapStyle}
        ref={mapRef}
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
          draggable={rideStages != 'finding'}
          onDragEnd={e => setStartingLatLng(e.nativeEvent.coordinate)}
        />
        <Marker
          coordinate={endingLatLng}
          draggable={rideStages != 'finding'}
          onDragEnd={e => setEndingLatLng(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
};

export default CustomMap;
