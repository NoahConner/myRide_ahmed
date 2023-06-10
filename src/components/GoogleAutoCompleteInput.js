import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { apiKey, black, gray, screenWidth, white } from '../constants/Index';
import { moderateScale } from 'react-native-size-matters';

const GoogleAutoCompleteInput = ({ setAddress, setLatLng }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter a location"
      currentLocation={true}
      enableHighAccuracyLocation={true}
      enablePoweredByContainer={false}
      debounce={200}
      onFail={error => console.error(error)}
      onPress={(data, details = null) => {
        const address = details.formatted_address;
        const { lat, lng } = details.geometry.location;
        setAddress(address);
        setLatLng({ latitude: lat, longitude: lng });
      }}
      query={{
        key: apiKey,
        language: 'en',
      }}
      styles={styles}
      placeholderTextColor={gray}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: white,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 30 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    color:black
  },
  textInputContainer: {
    width: moderateScale(screenWidth - 50),
  },
});

export default GoogleAutoCompleteInput;
