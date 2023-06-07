import React, {useContext, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {
  KumbhSansBold,
  KumbhSansExtraRegular,
  purple,
  screenHeight,
  white,
} from '../constants/Index';
import {Heading, Icon, Button} from '../components/Index';
import {AppContext} from '../context/AppContext';

const CustomDrawerContent = ({...props}) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const {role, setToken, setRole, setRideStages, setRideDetails, user} =
    useContext(AppContext);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  console.log(user, "hello i'm user");
  const PassengerButtons = [
    {text: 'Profile', screen: 'Profile'},
    {text: 'Ride History', screen: 'RideHistory'},
    {text: 'Saved Addresses', screen: 'SavedAddresses'},
    {text: 'How to Use?', screen: 'HowToUse'},
    {text: 'Contact Us', screen: 'Help'},
  ];
  const DriverButtons = [
    {text: 'Profile', screen: 'Profile'},
    {text: 'Wallet', screen: 'Wallet'},
    {text: 'How To Use', screen: 'HowToUse'},
    {text: 'Ride History', screen: 'RideHistory'},
    {text: 'Ratings', screen: 'Ratings'},
    {text: 'Contact Us', screen: 'Help'},
  ];
  const logout = () => {
    setToken(false);
    setRole('');
    setRideStages('initial');
    setRideDetails('');
  };
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.topSpace} />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          {user?.image ? (
            <Image
              source={{uri: user?.image}}
              style={styles.profileImage}
              onLoad={handleImageLoad}
            />
          ) : null}
        </View>
        <View>
          <Heading
            text={'Hello!'}
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansBold}
            color={white}
            textAlign="left"
          />
          <Heading
            text={user?.first_name + ' ' + user?.last_name}
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansBold}
            color={white}
            textAlign="left"
          />
        </View>
      </View>
      {role == 'Passenger'
        ? PassengerButtons.map((button, index) => (
            <Button
              key={index}
              style={[styles.drawerButton, styles.paddingDrawerButton]}
              fontSize={moderateScale(16)}
              fontFamily={KumbhSansBold}
              backgroundColor={null}
              color={white}
              text={button.text}
              padding={moderateScale(5)}
              textAlign="left"
              onPress={() => navigation.navigate(button.screen)}
              borderRadius={moderateScale(100)}
              width="100%"
            />
          ))
        : DriverButtons.map((button, index) => (
            <Button
              key={index}
              style={[styles.drawerButton, styles.paddingDrawerButton]}
              fontSize={moderateScale(16)}
              fontFamily={KumbhSansBold}
              backgroundColor={null}
              color={white}
              text={button.text}
              padding={moderateScale(5)}
              textAlign="left"
              onPress={() => navigation.navigate(button.screen)}
              borderRadius={moderateScale(100)}
              width="100%"
            />
          ))}
      <View style={styles.bottomButtons}>
        <View style={styles.iconButtonContainer}>
          <Icon style={null} name={'window-close'} size={16} color={white} />
          <Button
            style={styles.drawerButton}
            fontSize={moderateScale(16)}
            fontFamily={KumbhSansBold}
            backgroundColor={null}
            color={white}
            text={'Close'}
            padding={moderateScale(5)}
            onPress={() => navigation.closeDrawer()}
            textAlign="left"
            borderRadius={moderateScale(100)}
            width="100%"
          />
        </View>
        <View style={styles.iconButtonContainer}>
          <Icon style={null} name={'door-closed'} size={16} color={white} />
          <Button
            style={styles.drawerButton}
            fontSize={moderateScale(16)}
            fontFamily={KumbhSansBold}
            backgroundColor={null}
            color={white}
            text={'Logout'}
            padding={moderateScale(5)}
            onPress={() => {
              logout();
            }}
            textAlign="left"
            borderRadius={moderateScale(100)}
            width="100%"
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    paddingTop: moderateScale(20),
  },
  topSpace: {
    height: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(50),
    marginLeft: moderateScale(20),
  },
  imageContainer: {
    position: 'relative',
    marginRight: moderateScale(15),
  },
  profileImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(100),
  },
  drawerButton: {
    paddingVertical: moderateScale(10),
    alignItems: 'flex-start',
    fontFamily: KumbhSansExtraRegular,
  },
  paddingDrawerButton: {
    paddingLeft: moderateScale(20),
  },
  bottomButtons: {
    position: 'absolute',
    top: moderateScale(screenHeight - 150),
    left: moderateScale(20),
  },
  iconButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomDrawerContent;
