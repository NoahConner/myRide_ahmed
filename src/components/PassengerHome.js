import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  backgroundColor,
  lightestGray,
  markers,
  purple,
  region,
  screenWidth,
  white,
} from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';
import {
  Button,
  CustomMap,
  RideOfferDetail,
  RideSearch,
} from './Index';
import CustomModal from './Modal';


const PassengerHome = ({captainRequests, findRide}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {rideStages, findRideButton} = useAppContext(AppContext);
  switch (rideStages) {
    case 'initial':
      return (
        <View style={styles.container}>
          <CustomMap region={region} markers={markers} />
          <View style={styles.buttonContainer}>
            <Button
              disabled={!findRideButton}
              loading={loading}
              style={styles.findRideButton}
              fontSize={moderateScale(14)}
              backgroundColor={purple}
              color={white}
              text="Find My Ride"
              padding={moderateScale(10)}
              textAlign="center"
              borderRadius={moderateScale(100)}
              width="50%"
              onPress={findRide}
            />
          </View>
        </View>
      );
    case 'finding':
      return (
        <View
          style={[
            styles.containerCard,
            {width: screenWidth},
            !captainRequests?.length ? {flex: 1} : null,
          ]}>
          {captainRequests?.length ? (
            <>
              <CustomMap region={region} markers={markers} />
              <View style={styles.cardContainer}>
                <ScrollView
                  contentContainerStyle={styles.captainRideOfferView}
                  showsVerticalScrollIndicator={false}>
                  {captainRequests?.map(captainDetail => (
                    <RideOfferDetail
                      key={captainDetail?.user?.id}
                      selectedUser={captainDetail?.user}
                    />
                  ))}
                </ScrollView>
              </View>
            </>
          ) : (
            <RideSearch />
          )}
        </View>
      );
      case 'rateCaptain': return (
        <CustomModal
        times={true}
        backgroundColor={purple}
        visible={rateModalVisible}
        onClose={setRateModalVisible}
        content={CompleteRide}
        buttonText={'Submit'}
      />
      );
    default:
      return null;
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCard: {
    // justifyContent:'center'
  },
  cardContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
  },
  captainRideOfferView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  findRideButton: {
    position: 'absolute',
    bottom: moderateScale(50),
    zIndex: 100,
  },
  rideOfferView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
  },
  rateTextArea: {
    minHeight: moderateScale(100),
    backgroundColor: lightestGray,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalContentContainer: {
    alignItems: 'center',
  },
  modalImage: {
    width: moderateScale(100),
  },
  rateImage: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
});
export default PassengerHome;
