import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {
  KumbhSansExtraBold,
  KumbhSansLight,
  lightPurple,
  purple,
  rides,
  screenWidth,
  white,
} from '../../constants/Index';
import {CarDetail, Heading, Icon} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';

const RideDetail = ({rideDetails}) => {
  console.log(rideDetails, 'helo props');
  return (
    <View style={styles.container}>
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
      <FlatList
      data={rides}
      keyExtractor={(index) => index}
      renderItem={({ item }) => <CarDetail car={item}/>}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: moderateScale(screenWidth - 50, 0.1),
    backgroundColor: white,
    paddingHorizontal: moderateScale(20, 0.1),
    paddingVertical: moderateScale(10, 0.1),
    borderRadius: moderateScale(15, 0.1),
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 30 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10
  },
  heading: {
    marginVertical: moderateScale(5, 0.1),
  },
});
export default RideDetail;
