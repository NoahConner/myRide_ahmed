import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, FlatList, Platform, Keyboard, Animated } from 'react-native';
import { AppContext } from '../../context/AppContext';
import { CarDetail, Heading, Promo, RideDetail } from '../../components/Index';
import { KumbhSansBold, rides, screenWidth, white } from '../../constants/Index';
import { moderateScale } from 'react-native-size-matters';

const RideType = () => {
  const { rideDetails } = useContext(AppContext);
  const [isKeyboardActive, setKeyboardActive] = useState(false);
  const carListOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardActive(true);
      animateCarList(false);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardActive(false);
      animateCarList(true);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const animateCarList = (isVisible) => {
    Animated.timing(carListOpacity, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading
          text="Select Your Type"
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
      {!isKeyboardActive && (
        <Animated.View style={[styles.carListContainer, { opacity: carListOpacity }]}>
          <FlatList
            data={rides}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <CarDetail key={index} car={item} index={index} select={true} />
            )}
          />
        </Animated.View>
      )}
      <Promo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(30, 0.1),
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
});

export default RideType;
