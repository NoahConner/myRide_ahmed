import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
import {
  gray,
  primaryHeadingColor,
  purple,
  white,
  KumbhSansExtraBold,
  screenWidth,
  black,
  emailRegex,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';
import {
  Heading,
  Button,
  Input,
  TopLeftCircleProp,
} from '../../components/Index';
const CapatainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const navigation = useNavigation();
  const {setToken, setUser, setRole} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true); 
  useEffect(() => {
    startAnimations();
  }, []);
  useEffect(() => {
    if (email === '' || password === '' || !emailRegex.test(email)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    }, [email, password]);
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setRole("Driver")
      setToken(true);
      setUser({email})
      setLoading(false);
    }, 1500);
  };
  const startAnimations = () => {
    Animated.timing(GirlAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          style={null}
          text="Sign in to continue"
          fontSize={moderateScale(40)}
          fontFamily={KumbhSansExtraBold}
          color={primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholderTextColor={black}
            style={{marginBottom: 16}}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={{marginBottom: 16}}
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </View>
        <Button
          style={null}
          fontSize={moderateScale(12)}
          backgroundColor={null}
          color={purple}
          text="Forgot Password?"
          padding={moderateScale(0)}
          textAlign="right"
          borderRadius={moderateScale(0)}
          width="100%"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <View style={styles.signInButtonContainer}>
          <Button
            disabled={disabled}
            loading={loading}
            style={null}
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Sign In"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={() => login()}
          />
        </View>
        <View style={styles.dontHaveBox}>
          <Text style={styles.dontHaveBoxText}>Don't have an account?</Text>
          <Button
            style={null}
            fontSize={moderateScale(12)}
            backgroundColor={null}
            color={purple}
            text="Sign Up Now!"
            padding={moderateScale(0)}
            textAlign="center"
            borderRadius={moderateScale(0)}
            width="30%"
            onPress={() => navigation.navigate('CapatainSignup')}
          />
        </View>
      </View>
      <Animated.Image
        style={[styles.GirlProp, {transform: [{translateX: GirlAnimation}]}]}
        resizeMode="contain"
        source={require('../../../assets/Images/captainLoginProp.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor:white
  },
  headingBox: {
    width: moderateScale(screenWidth - 100),
  },
  InputBox: {
    marginTop: moderateScale(20),
  },
  signInButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  dontHaveBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: moderateScale(15),
  },
  dontHaveBoxText: {
    color: gray,
  },
  GirlProp: {
    position: 'absolute',
    bottom: moderateScale(10),
    alignItems:'center',
    width: moderateScale(200),
    resizeMode: 'contain',
    height: moderateScale(180),
    zIndex:-1
  }
});

export default CapatainLogin;
