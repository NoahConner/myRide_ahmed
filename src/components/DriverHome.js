import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { socketRideEnd, socketRideRated } from '../constants/HelperFunctions';
import {
  backgroundColor,
  lightestGray,
  purple,
  screenWidth,
  user
} from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';
import {
  ArrivedRideRB,
  Image,
  RideWait,
  StartRideRB
} from './Index';
import CustomModal from './Modal';

const DriverHome = ({ rideRequests }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { rideStatus, setRideStatus } = useAppContext(AppContext);
  const [rateMessage, setRateMessage] = useState('');

  const rideEndContent = () => (
    <View style={styles.modalContentContainer}>
      <Image
        style={styles.modalImage}
        resizeMode="contain"
        source={require('../../assets/Images/rideEndProp.png')}
      />
      {/* Rest of the content */}
    </View>
  );

  const rideAmountContent = () => (
    <View style={styles.modalContentContainer}>
      <Image
        style={styles.modalImage}
        resizeMode="contain"
        source={require('../../assets/Images/rateProp.png')}
      />
      {/* Rest of the content */}
    </View>
  );

  const rideRateContent = () => (
    <View style={styles.modalContentContainer}>
      <Image
        style={styles.rateImage}
        resizeMode="contain"
        source={require('../../assets/Images/ratingProp.png')}
      />
      {/* Rest of the content */}
    </View>
  );

  const rideEnd = () => {
    setRideStatus('end');
    socketRideEnd(user?.id, selectedUser?.id);
  };

  const rideRate = () => {
    setRideStatus('rate');
  };

  const submitRating = () => {
    setModalVisible(false);
    setRideStatus('rated');
    socketRideRated(user?.id, selectedUser?.id);
    navigation.navigate('RideHistory');
  };

  let modalContent;
  switch (rideStatus) {
    case 'initial':
      return (
        <View style={[styles.containerCard, { width: screenWidth }, !rideRequests?.length ? { flex: 1 } : null]}>
          {/* Rest of the content */}
        </View>
      );
    case 'start':
      return <StartRideRB />;
    case 'starting':
      return <ArrivedRideRB />;
    case 'started':
      modalContent = rideEndContent();
      return (
        <CustomModal
          times={false}
          backgroundColor={purple}
          visible={modalVisible}
          onClose={() => rideEnd()}
          content={modalContent}
          buttonText="Ride End"
        />
      );
    case 'end':
      modalContent = rideAmountContent();
      return (
        <CustomModal
          times={true}
          backgroundColor={purple}
          visible={modalVisible}
          onClose={() => rideRate()}
          content={modalContent}
          buttonText="Rate Your Customer"
        />
      );
    case 'rate':
      modalContent = rideRateContent();
      return (
        <CustomModal
          times={true}
          backgroundColor={purple}
          visible={modalVisible}
          onClose={() => submitRating()}
          content={modalContent}
          buttonText="Submit"
        />
      );
    default:
      return <RideWait />;
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
export default DriverHome;
