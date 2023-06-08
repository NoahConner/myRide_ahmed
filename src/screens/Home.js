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
import userData from '../constants/usersData.json';
import {moderateScale} from 'react-native-size-matters';
import {
  KumbhSansExtraRegular,
  backgroundColor,
  black,
  gold,
  lightestGray,
  lightestPurple,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import {AppContext, useAppContext} from '../context/AppContext';
import {useToast} from 'react-native-toast-notifications';
import {
  notification,
  socketRideEnd,
  socketRideRated,
} from '../constants/HelperFunctions';
import {socket} from '../stacks/DrawerNavigator';
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
const Home = () => {
  const navigation = useNavigation();
  const {
    rideStages,
    setRideStages,
    findRideButton,
    role,
    setRideStatus,
    rideStatus,
    user,
    selectedUser,
  } = useAppContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [rateMessage, setRateMessage] = useState('');
  const toast = useToast();

  const rideEndContent = () => {
    return (
      <View style={styles.modalContentContainer}>
        <Image
          style={styles.modalImage}
          resizeMode="contain"
          source={require('../../assets/Images/rideEndProp.png')}
        />
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
      <View style={styles.modalContentContainer}>
        <Image
          style={styles.modalImage}
          resizeMode="contain"
          source={require('../../assets/Images/rateProp.png')}
        />
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
      <View style={styles.modalContentContainer}>
        <Image
          style={styles.rateImage}
          resizeMode="contain"
          source={require('../../assets/Images/ratingProp.png')}
        />
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
  useEffect(() => {
    const handleRideEvent = ({from, to, foundUser}, message) => {
      if (user?.id === to) {
        notification(toast, message);
      }
    };

    const handleSocketRideAccept = ({from, to}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      handleRideEvent(
        {from, to, foundUser},
        `${foundUser.first_name} ${foundUser.last_name} accepted your ride`,
      );
    };

    const handleSocketRideArrived = ({from, to}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      handleRideEvent(
        {from, to, foundUser},
        `${foundUser.first_name} ${foundUser.last_name} arrived at your destination`,
      );
    };

    const handleSocketRideStarted = ({from, to}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      handleRideEvent(
        {from, to, foundUser},
        `${foundUser.first_name} ${foundUser.last_name} started your ride`,
      );
    };

    const handleSocketRideEnd = ({from, to}) => {
      handleRideEvent({from, to}, `Your ride ended`);
    };

    const handleSocketRideRated = ({from, to}) => {
      handleRideEvent({from, to}, `Your Captain rated you`);
    };

    socket.on('rideAccept', handleSocketRideAccept);
    socket.on('rideArrived', handleSocketRideArrived);
    socket.on('rideStarted', handleSocketRideStarted);
    socket.on('rideEnd', handleSocketRideEnd);
    socket.on('rideRated', handleSocketRideRated);

    return () => {
      socket.off('rideAccept', handleSocketRideAccept);
      socket.off('rideArrived', handleSocketRideArrived);
      socket.off('rideStarted', handleSocketRideStarted);
      socket.off('rideEnd', handleSocketRideEnd);
      socket.off('rideRated', handleSocketRideRated);
    };
  }, [socket]);

  const modalContent =
    rideStatus === 'started'
      ? rideEndContent()
      : rideStatus === 'end'
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
        <ScrollView contentContainerStyle={styles.captainRideOfferView}>
          {userData?.users?.map(user => {
            return user?.type === 'passenger' ? (
              <RideOfferDetail key={user?.id} selectedUser={user} />
            ) : null;
          })}
        </ScrollView>
      );
    }
    return null;
  };

  useEffect(() => {
    if (['started', 'end', 'rate'].includes(rideStatus)) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [rideStatus]);

  const submitRating = () => {
    setModalVisible(false);
    setRideStatus('rated');
    socketRideRated(user?.id, selectedUser?.id);
    navigation.navigate('RideHistory');
  };
  const rideEnd = () => {
    setRideStatus('end');
    socketRideEnd(user?.id, selectedUser?.id);
  };
  const rideRate = () => {
    setRideStatus('rate');
  };
  const renderDriverHome = () => {
    switch (rideStatus) {
      case 'initial':
        return (
          <ScrollView contentContainerStyle={styles.captainRideOfferView}>
            {userData?.users?.map(user => {
              return user?.type === 'driver' ? (
                <RideOfferDetailCaptain key={user?.id} selectedUser={user} />
              ) : null;
            })}
          </ScrollView>
        );
      case 'start':
        return <StartRideRB />;
      case 'starting':
        return <ArrivedRideRB />;
      case 'started':
        return (
          <CustomModal
            times={false}
            backgroundColor={purple}
            visible={modalVisible}
            onClose={() => rideEnd()}
            content={modalContent}
            buttonText={'Ride End'}
          />
        );
      case 'end':
        return (
          <CustomModal
            times={true}
            backgroundColor={purple}
            visible={modalVisible}
            onClose={() => rideRate()}
            content={modalContent}
            buttonText={'Rate Your Customer'}
          />
        );
      case 'rate':
        return (
          <CustomModal
            times={true}
            backgroundColor={purple}
            visible={modalVisible}
            onClose={() => submitRating()}
            content={modalContent}
            buttonText={'Submit'}
          />
        );
      default:
        return null;
    }
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

export default Home;
