import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import {
  ArrivedRideRB,
  Button,
  CustomMap,
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
  InterRegular,
  KumbhSansBold,
  backgroundColor,
  black,
  gold,
  lightestGray,
  markers,
  purple,
  region,
  screenHeight,
  screenWidth,
  white,
} from '../constants/Index';
import {AppContext, useAppContext} from '../context/AppContext';
import {useToast} from 'react-native-toast-notifications';
import {
  notification,
  notificationRoute,
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
    firstMessage,
  } = useAppContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [rideRequests, setRideRequests] = useState([]);
  const [rateMessage, setRateMessage] = useState('');
  const [captainRequests, setCaptainRequests] = useState([]);
  const toast = useToast();
  const route = useRoute();
  const isFocused = useIsFocused();
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
          fontFamily={InterRegular}
          color={white}
          textAlign="center"
        />
      </View>
    );
  };
  useEffect(() => {
    console.log(rideStages, 'hello stages');
  }, [rideStages]);

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
          fontFamily={InterRegular}
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
          fontFamily={InterRegular}
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
    }, 1000);
  };
  useEffect(() => {
    const handleRideEvent = ({from, to, foundUser}, message) => {
      if (user?.id === to) {
        notification(toast, message);
      }
    };
    const handleSocketRideRequest = ({from, pickup, dropoff, passengers}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      const data = {
        user: foundUser,
        pickup: pickup,
        dropoff: dropoff,
        passengers: passengers,
      };

      setRideRequests([...rideRequests, data]);
    };
    const handleSocketRideAccept = ({from, to}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      const data = {
        user: foundUser,
      };
      handleRideEvent(
        {from, to, foundUser},
        `${foundUser.first_name} ${foundUser.last_name} accepted your ride`,
      );
      setCaptainRequests([...captainRequests, data]);
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
    const handleSocketMessage = ({from, to, message, time}) => {
      const foundUser = userData.users.find(user => user?.id === from);
      if (user?.id == to && route?.name != 'Chat') {
        console.log(route, 'hello route name', isFocused, firstMessage);
        if (firstMessage) {
          const notificationMessage = `${foundUser?.first_name} ${foundUser?.last_name} send you a message`;
          notificationRoute(toast, notificationMessage, foundUser, navigation);
        } else return;
      }
    };

    const handleSocketRideEnd = ({from, to}) => {
      handleRideEvent({from, to}, `Your ride ended`);
    };

    const handleSocketRideRated = ({from, to}) => {
      handleRideEvent({from, to}, `Your Captain rated you`);
    };

    socket.on('rideRequest', handleSocketRideRequest);
    socket.on('rideAccept', handleSocketRideAccept);
    socket.on('rideArrived', handleSocketRideArrived);
    socket.on('rideStarted', handleSocketRideStarted);
    socket.on('rideEnd', handleSocketRideEnd);
    socket.on('rideRated', handleSocketRideRated);
    socket.on('message', handleSocketMessage);

    return () => {
      socket.off('rideRequest', handleSocketRideRequest);
      socket.off('rideAccept', handleSocketRideAccept);
      socket.off('rideArrived', handleSocketRideArrived);
      socket.off('rideStarted', handleSocketRideStarted);
      socket.off('rideEnd', handleSocketRideEnd);
      socket.off('rideRated', handleSocketRideRated);
      socket.off('message', handleSocketMessage);
    };
  }, [socket, userData, user, rideRequests]);

  const modalContent =
    rideStatus === 'started'
      ? rideEndContent()
      : rideStatus === 'end'
      ? rideAmountContent()
      : rideRateContent();

  const renderPassengerHome = () => {
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
          <View style={[styles.containerCard, {width: screenWidth }, !captainRequests?.length ? {flex:1} :null]}>
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
              <View
                style={{
                  backgroundColor:white,
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color={purple} />
                <Heading
                  text="Searching Your Ride"
                  fontSize={moderateScale(20)}
                  fontFamily={KumbhSansBold}
                  color={purple}
                  textAlign="center"
                />
              </View>
            )}
          </View>
        );
      default:
        return null;
    }
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
         <View style={[styles.containerCard, {width: screenWidth }, !rideRequests?.length ? {flex:1} :null]}>
          {rideRequests?.length ? (
            <>
            <CustomMap region={region} markers={markers} />
            <View style={styles.cardContainer}>
              <ScrollView
                contentContainerStyle={styles.captainRideOfferView}
                showsVerticalScrollIndicator={false}>
                {rideRequests?.map(rideDetails => (
                  <RideOfferDetailCaptain
                    key={rideDetails?.user?.id}
                    selectedUser={rideDetails?.user}
                    pickup={rideDetails?.pickup}
                    dropOff={rideDetails?.dropfff}
                    passengers={rideDetails?.passengers}
                  />
                ))}
              </ScrollView>
            </View>
            </>)
            : (
              <View
                style={{
                  backgroundColor:white,
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color={purple} />
                <Heading
                  text="Waiting For Ride Request"
                  fontSize={moderateScale(20)}
                  fontFamily={KumbhSansBold}
                  color={purple}
                  textAlign="center"
                />
              </View>
            )}
          </View>
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
      {role !== 'Passenger' ? (
        rideStatus != 'initial' ? (
          <View style={{zIndex: -100}}>
            <CustomMap region={region} markers={markers} />
          </View>
        ) : null
      ) : null}
    </View>
  );
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

export default Home;
