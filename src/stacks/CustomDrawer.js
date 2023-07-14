import React, { useContext, useState } from 'react';
import { Image, Platform, StyleSheet, Switch, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Button, Heading, Icon } from '../components/Index';
import {
  InterRegular,
  KumbhSansBold,
  darkGray,
  gold,
  lightGray,
  purple,
  white
} from '../constants/Index';
import { AppContext } from '../context/AppContext';

const CustomDrawerContent = ({navigation, ...props}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    role,
    setToken,
    setRole,
    setRideStages,
    setRideDetails,
    user,
    theme,
    setTheme,
  } = useContext(AppContext);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const toggleSwitch = () => {
    navigation.closeDrawer()
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  const PassengerButtons = [
    {text: 'Profile', screen: 'Profile'},
    {text: 'Ride History', screen: 'RideHistory'},
    {text: 'Saved Addresses', screen: 'SavedAddresses'},
    {text: 'Ratings', screen: 'Ratings'},
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
  const renderIcons = () => {
    return Array.from({length: 5}).map((_, index) => (
      <Icon
        style={styles.iconStyle}
        key={index}
        name="star"
        solid={true}
        size={6}
        color={gold}
      />
    ));
  };

  return (
    <View
      {...props}
      style={styles.container}>
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
            text={user?.fname + ' ' + user?.lname}
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansBold}
            color={white}
            textAlign="left"
          />
          <View style={styles.ratingContainer}>{renderIcons()}</View>
        </View>
      </View>
      {role?.toLowerCase() == 'passenger'
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
          <Icon
            style={null}
            name={theme === 'dark' ? 'moon' : 'sun'}
            size={18}
            color={theme === 'dark' ? white : gold}
          />
          <Switch
            trackColor={{false: darkGray, true: lightGray}}
            thumbColor={theme === 'dark' ? darkGray : lightGray}
            onValueChange={toggleSwitch}
            value={theme === 'dark'}
            style={styles.switch}
          />
        </View>
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
    </View>
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
    fontFamily: InterRegular,
  },
  paddingDrawerButton: {
    paddingLeft: moderateScale(20),
  },
  bottomButtons: {
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(20),
  },
  iconButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    transform: [{scaleX: Platform.OS == 'ios' ? 0.70  :0.95}, {scaleY: Platform.OS == 'ios' ? 0.70 : 0.95}],
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
});

export default CustomDrawerContent;
