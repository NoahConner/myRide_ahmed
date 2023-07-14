import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KumbhSansExtraBold, black, lightPurple, screenHeight, screenWidth, white } from '../../constants/Index';
import { AppContext } from '../../context/AppContext';
import { Button, Heading } from '../Index';

const SplashModalView = ({ modalView }) => {
  const translateYAnimation = useRef(new Animated.Value(screenHeight)).current;
  const carAnimation = useRef(new Animated.Value(screenWidth)).current;
  const mapAnimation = useRef(new Animated.Value(0)).current;
  const {setRole} = useContext(AppContext);
  const navigation = useNavigation();
  useEffect(() => {
    const startAnimation = () => {
      if (modalView) {
        Animated.timing(translateYAnimation, {
          toValue: screenHeight / 2 - screenHeight / 1.6 / 2,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(translateYAnimation, {
          toValue: screenHeight,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    };
    const carAnimationTimeout = setTimeout(() => {
      Animated.timing(carAnimation, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 0);

    const mapAnimationTimeout = setTimeout(() => {
      Animated.timing(mapAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 0);

    const animationTimeout = setTimeout(startAnimation, 0);

    return () => {
      clearTimeout(carAnimationTimeout);
      clearTimeout(mapAnimationTimeout);
      clearTimeout(animationTimeout);
    };
  }, [modalView, translateYAnimation, carAnimation, mapAnimation]);

  const carStyle = StyleSheet.compose(
    {
      transform: [{ translateX: carAnimation }],
    },
    styles.carProp
  );

  const mapStyle = StyleSheet.compose(
    {
      transform: [{ scale: mapAnimation }],
    },
    styles.mapProp
  );

  const setRoleAndNavigate = role => {
    setRole(role);
    setTimeout(() => {
      if (role?.toLowerCase() === 'driver') {
        navigation.navigate('CapatainLogin');
      } else if (role?.toLowerCase() === 'passenger') {
        navigation.navigate('Login');
      }
    }, 0);
  };

  return (
    <Animated.View style={[styles.viewBox, { transform: [{ translateY: translateYAnimation }] }]}>
      <View style={styles.viewBoxContent}>
        <View style={styles.viewBoxHeadingBox}>
          <Heading
            text="Our Service Is Always There For You."
            fontSize={moderateScale(38, 0.1)}
            fontFamily={KumbhSansExtraBold}
            color={white}
            textAlign="left"
          />
        </View>
        <Animated.Image style={carStyle} resizeMode="contain" source={require('../../../assets/Images/carProp.png')} />
        <Animated.Image style={mapStyle} resizeMode="contain" source={require('../../../assets/Images/mapProp.png')} />
      </View>
      <View style={styles.viewboxButtons}>
        <Button
        style={{marginLeft:'auto', marginRight:moderateScale(15,0.1)}}
          fontSize={moderateScale(12)}
          backgroundColor={white}
          color={black}
          text="Login As Captain"
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width="35%"
          onPress={() => {
            setRoleAndNavigate('driver');
          }}
        />
        <Button
        style={{marginRight:'auto'}}
          fontSize={moderateScale(12)}
          backgroundColor={white}
          color={black}
          text="Get Started"
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width="35%"
          onPress={() => {
            setRoleAndNavigate('passenger');
          }}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    minHeight: moderateScale(500),
    backgroundColor: lightPurple,
    position:'relative',
    // paddingBottom:moderateScale(50),
    // position: 'absolute',
    // top: moderateScale(0),
    width: moderateScale(screenWidth),
    borderTopLeftRadius: Platform.OS == 'ios' ? moderateScale(50) : moderateScale(30),
    borderTopRightRadius: Platform.OS == 'ios' ? moderateScale(50) : moderateScale(30),
  },
  viewBoxContent: {
    position: 'relative',
    padding: moderateScale(50),
    // flex: 1,
  },
  viewBoxHeadingBox: {
    width: moderateScale(170,0.1),
  },
  viewboxButtons: {
    position: 'absolute',
    bottom: moderateScale(70,0.1),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  carProp: {
    position: 'absolute',
    width: '100%',
    bottom: moderateScale(-100),
    right: moderateScale(0),
  },
  mapProp: {
    position: 'absolute',
    width: '70%',
    top: moderateScale(10,0.1),
    right: moderateScale(10,0.1),
  },
});

export default SplashModalView;
