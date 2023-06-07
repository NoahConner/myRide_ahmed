import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ArrivedRideRB,
  Button,
  CustomModal,
  DrawerHeader,
  Heading,
  Icon,
  Input,
  RideOfferDetail,
  RideOfferDetailCaptain,
  StartRideRB,
} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  KumbhSansExtraRegular,
  backgroundColor,
  black,
  gold,
  lightestGray,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import {AppContext, useAppContext} from '../context/AppContext';

const Home = () => {
  const navigation = useNavigation();
  const {
    rideStages,
    setRideStages,
    findRideButton,
    role,
    setRideStatus,
    rideStatus,
  } = useAppContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [rateMessage, setRateMessage] = useState('');
  const renderIcons = () => {
    return Array.from({length: 5}).map((_, index) => (
      <Icon
        style={styles.iconStyle}
        key={index}
        name="star"
        solid={true}
        size={16}
        color={gold}
      />
    ));
  };
  const rideEndContent = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image style={{width:moderateScale(100)}} resizeMode='contain' source={require('../../assets/Images/rideEndProp.png')} />
        <Heading
          text="You have reached your destination"
          fontSize={moderateScale(14)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="center"
        />
      </View>
    );
  };
  const rideAmountContent = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image style={{width:moderateScale(70)}} resizeMode='contain' source={require('../../assets/Images/rateProp.png')} />
        <Heading
          text="This amount has been added to your wallet"
          fontSize={moderateScale(14)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="center"
        />
      </View>
    );
  };
  const rideRateContent = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image style={{width:moderateScale(80), height:moderateScale(80)}} resizeMode='contain' source={require('../../assets/Images/ratingProp.png')} />
        <View style={styles.ratingContainer}>{renderIcons()}</View>
        <Heading
          text="Rate Now!"
          fontSize={moderateScale(14)}
          fontFamily={KumbhSansExtraRegular}
          color={white}
          textAlign="center"
        />
        <Input
          placeholderTextColor={black}
          style={styles.rateTextArea}
          placeholder="Type Here..."
          value={rateMessage}
          setValue={setRateMessage}
          type="text"
        />
      </View>
    );
  };
  const findRide = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRideStages('findType');
    }, 1500);
  };
  const modalContent =
    rideStatus == 'started'
      ? rideEndContent()
      : rideStatus == 'end'
      ? rideAmountContent()
      : rideRateContent();
  const renderPassengerHome = () => {
    if (rideStages === 'initial') {
      return (
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
      );
    } else if (rideStages === 'finding') {
      return (
        <View style={styles.rideOfferView}>
          <RideOfferDetail />
        </View>
      );
    }
    return null;
  };
  useEffect(() => {
    if (
      rideStatus == 'started' ||
      rideStatus == 'end' ||
      rideStatus == 'rate'
    ) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [rideStatus]);

  const renderDriverHome = () => {
    return rideStatus == 'initial' ? (
      <ScrollView contentContainerStyle={styles.captainRideOfferView}>
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
        <RideOfferDetailCaptain />
      </ScrollView>
    ) : rideStatus == 'start' ? (
      <StartRideRB />
    ) : rideStatus == 'starting' ? (
      <ArrivedRideRB />
    ) : rideStatus == 'started' ? (
      <CustomModal
        times={false}
        backgroundColor={purple}
        visible={modalVisible}
        onClose={() => setRideStatus('end')}
        content={modalContent}
        buttonText={'Ride End'}
      />
    ) : rideStatus == 'end' ? (
      <CustomModal
        times={true}
        backgroundColor={purple}
        visible={modalVisible}
        onClose={() => setRideStatus('rate')}
        content={modalContent}
        buttonText={'Rate Your Customer'}
      />
    ) : rideStatus == 'rate' ? (
      <CustomModal
        times={true}
        backgroundColor={purple}
        visible={modalVisible}
        onClose={() => {setRideStatus('rated'); setModalVisible(false); navigation.navigate('RideHistory')}}
        content={modalContent}
        buttonText={'Submit'}
      />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <DrawerHeader navigate={navigation} screen="home" />
      {role === 'Passenger' ? renderPassengerHome() : renderDriverHome()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  findRideButton: {
    position: 'absolute',
    bottom: moderateScale(50),
  },
  rideOfferView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captainRideOfferView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
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
});

export default Home;
