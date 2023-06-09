import React, {useContext, useState} from 'react';
import {View, KeyboardAvoidingView, StyleSheet, FlatList} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {
  Button,
  CarDetail,
  CardDetails,
  Heading,
  RideDetail,
} from '../../components/Index';
import {
  KumbhSansBold,
  KumbhSansExtraBold,
  cards,
  green,
  screenWidth,
  white,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {socketRideRequest} from '../../constants/HelperFunctions';
const RidePayment = () => {
  const navigation = useNavigation();
  const {rideDetails, setRideStages, paymentButton, user} =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const finding = () => {
    setLoading(true);
    socketRideRequest(
      user?.id,
      rideDetails?.pickUpAddress,
      rideDetails?.dropOffAddress,
      rideDetails?.noOfPassengers,
    );
    setTimeout(() => {
      setRideStages('finding');
      setLoading(false);
    }, 1500);
  };
  return (
    <View>
      <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
        <View style={styles.headingContainer}>
          <Heading
            text="Select Your Payment Method"
            style={null}
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansBold}
            color={white}
            textAlign="center"
          />
        </View>
        <View style={styles.rideDetailContainer}>
          <RideDetail rideDetails={rideDetails} />
        </View>
        <View style={styles.carListContainer}>
          <CarDetail car={rideDetails?.car} select={false} />
        </View>
        <View style={[styles.carListContainer, styles.cardListContainer]}>
          <FlatList
            data={cards}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <CardDetails
                key={index}
                card={item}
                index={index}
                select={true}
              />
            )}
            horizontal={false}
          />
        </View>
        <Button
          style={styles.newCardButton}
          fontSize={moderateScale(14)}
          backgroundColor={null}
          color={white}
          text="+ Add New Card"
          padding={moderateScale(0)}
          textAlign="center"
          borderRadius={moderateScale(0)}
          width="100%"
          onPress={() => {
            navigation.navigate('CardsAndAccounts');
          }}
        />
        <Button
          disabled={!paymentButton}
          loading={loading}
          style={styles.findRideButton}
          fontSize={moderateScale(14)}
          backgroundColor={green}
          color={white}
          text="Find My Ride"
          padding={null}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width={screenWidth - 200}
          onPress={() => {
            finding();
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: moderateScale(30),
    position: 'relative',
  },
  headingContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  rideDetailContainer: {
    width: '80%',
    alignItems: 'center',
  },
  carListContainer: {
    width: screenWidth,
    marginTop: moderateScale(15),
  },
  cardListContainer: {
    height: moderateScale(150, 0.1),
  },
  findRideButton: {
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(15),
    position: 'absolute',
    bottom: moderateScale(-45),
  },
  newCardButton: {
    paddingVertical: moderateScale(15, 0.1),
    marginVertical: moderateScale(15, 0.1),
    fontFamily: KumbhSansExtraBold,
  },
});

export default RidePayment;
