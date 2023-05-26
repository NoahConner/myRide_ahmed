import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppContext, useAppContext} from '../context/AppContext';
import {Button, DrawerHeader} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {purple, white} from '../constants/Index';
const Home = ({navigation}) => {
  const {rideStages, setRideStages} = useAppContext(AppContext);
  const findRide = () => {
    setRideStages('finding')
  }
  return (
    <View style={styles.container}>
      <DrawerHeader navigate={navigation} style={styles.drawerHeader} />
      {
        rideStages == 'initial' ? 
        <Button
          style={styles.finRideButton}
          fontSize={moderateScale(14, 0.1)}
          backgroundColor={purple}
          color={white}
          text="Find My Ride"
          padding={moderateScale(10, 0.1)}
          textAlign="center"
          borderRadius={moderateScale(100, 0.1)}
          width="50%"
          onPress={() => findRide()}
        /> : null
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex:1,
    alignItems: 'center',
  },
  drawerHeader: {
    position: 'absolute',
    top: moderateScale(0, 0.1),
    left: moderateScale(0, 0.1),
    right: moderateScale(0, 0.1),
  },
  finRideButton: {
    position: 'absolute',
    bottom: moderateScale(50, 0.1),
  },
});
export default Home;
