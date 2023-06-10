import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { black, purple, screenHeight, screenWidth } from '../constants/Index';
import { moderateScale } from 'react-native-size-matters';
import axios from 'axios';

const CustomMap = () => {
  const startingPoint = { latitude: 24.9369079, longitude: 67.0928863 };
  const endingPoint = {
    latitude: 24.929873497852476,
    longitude: 67.11593491135285,
  };

  const [pathCoordinates, setPathCoordinates] = useState([]);

  useEffect(() => {
    const getDirections = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${startingPoint.latitude},${startingPoint.longitude}&destination=${endingPoint.latitude},${endingPoint.longitude}&key=YOUR_API_KEY`
        );
        const { data } = response;
        if (data.routes.length > 0) {
          const points = data.routes[0].overview_polyline.points;
          const decodedPoints = decodePolyline(points);
          setPathCoordinates(decodedPoints);
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    getDirections();
  }, []);

  const decodePolyline = (encoded) => {
    const points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({
        latitude: lat / 1e5,
        longitude: lng / 1e5,
      });
    }

    return points;
  };

  return (
    <View
      style={{
        height: moderateScale(screenHeight - 30),
        width: moderateScale(screenWidth),
      }}
    >
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: startingPoint.latitude,
          longitude: startingPoint.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
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