import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AppContext, useAppContext} from '../context/AppContext';
import {Button, DrawerHeader, RideOfferDetail} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {purple, white} from '../constants/Index';
const Home = ({navigation}) => {
  const {rideStages, setRideStages, findRideButton} = useAppContext(AppContext);
  const [loading, setLoading] = useState(false);
  const findRide = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRideStages('findType');
    }, 1500);
  };
  return (
    <View style={styles.container}>
      <DrawerHeader
        navigate={navigation}
        style={rideStages != 'finding' ? styles.drawerHeader : null}
        screen={'home'}
      />
      {rideStages == 'initial' ? (
        <Button
          disabled={!findRideButton}
          loading={loading}
          style={styles.finRideButton}
          fontSize={moderateScale(14)}
          backgroundColor={purple}
          color={white}
          text="Find My Ride"
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width="50%"
          onPress={() => findRide()}
        />
      ) : rideStages == 'finding' ? (
        <RideOfferDetail />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  drawerHeader: {
    position: 'absolute',
    top: moderateScale(0),
    left: moderateScale(0),
    right: moderateScale(0),
  },
  finRideButton: {
    position: 'absolute',
    bottom: moderateScale(50),
  },
});
export default Home;
