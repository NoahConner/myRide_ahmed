import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  KumbhSansExtraBold,
  InterRegular,
  backgroundColor,
  darkGray,
  gray,
  green,
  purple,
  screenWidth,
} from '../../constants/Index';
import {
  Button,
  Heading,
  Icon,
  DrawerHeader,
  ViewHeader,
} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';

const Profile = ({}) => {
  const navigation = useNavigation();
  const [illustratorProp] = useState(new Animated.Value(screenWidth + 250));
  const {role, user} = useContext(AppContext);
  const passengernavigationViewButtons = [
    {
      name: 'Personal Information',
      path: 'PersonalInformation',
    },
    {
      name: 'Notifications',
      path: 'Notifications',
    },
    {
      name: 'Cards & Accounts',
      path: 'CardsAndAccounts',
    },
    {
      name: 'Privacy Policy',
      path: 'PrivacyPolicy',
    },
    {
      name: 'Terms & Conditions',
      path: 'TermsAndConditions',
    },
    {
      name: 'Help',
      path: 'Help',
    },
  ];
  const drivernavigationViewButtons = [
    {
      name: 'Personal Information',
      path: 'PersonalInformation',
    },
    {
      name: 'Notifications',
      path: 'Notifications',
    },
    {
      name: 'Privacy Policy',
      path: 'PrivacyPolicy',
    },
    {
      name: 'Terms & Conditions',
      path: 'TermsAndConditions',
    },
    {
      name: 'Help',
      path: 'Help',
    },
  ];
  useEffect(() => {
    startAnimations();
  }, []);
  const navigate = path => {
    navigation.navigate(path);
  };
  const startAnimations = () => {
    Animated.timing(illustratorProp, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const renderNavigationButton = (naviagteButton, index) => {
    return (
      <View key={index} style={styles.profileNavigatorView}>
        <Button
          style={styles.navigationButton}
          fontSize={moderateScale(14)}
          backgroundColor={null}
          color={darkGray}
          text={naviagteButton.name}
          padding={moderateScale(5)}
          textAlign="left"
          borderRadius={moderateScale(100)}
          width={moderateScale(screenWidth - 60)}
          onPress={() => {
            navigate(naviagteButton.path);
          }}
        />
        <TouchableOpacity onPress={() => {
            navigate(naviagteButton.path);
          }}>
        <Icon
          name={'chevron-right'}
          style={styles.navigationIcon}
          size={15}
          color={gray}
        />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <ViewHeader
        heading={'Profile'}
        icon={'home'}
        headingColor={purple}
        fontSize={25}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          {user?.image ? (
            <Image
              source={{uri: user?.image}}
              resizeMode="cover"
              style={styles.profileImage}
            />
          ) : null}
          <Heading
            text={user?.first_name + ' ' + user?.last_name}
            fontSize={moderateScale(20)}
            fontFamily={KumbhSansExtraBold}
            color={green}
            textAlign="center"
            style={styles.marginTop}
          />
          <Heading
            text={user?.phone}
            fontSize={moderateScale(14)}
            fontFamily={InterRegular}
            color={darkGray}
            textAlign="center"
            style={styles.marginTop}
          />
        </View>
        <Heading
          text={'Account Information'}
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={darkGray}
          textAlign="center"
        />
        {role == 'Passenger'
          ? passengernavigationViewButtons?.map((naviagteButton, index) => {
              return renderNavigationButton(naviagteButton, index);
            })
          : drivernavigationViewButtons?.map((naviagteButton, index) => {
              return renderNavigationButton(naviagteButton, index);
            })}
        <Animated.View style={{transform: [{translateY: illustratorProp}]}}>
          <Image
            resizeMode="contain"
            style={styles.prop}
            source={
              role === 'Passenger'
                ? require('../../../assets/Images/passengerProfileProp.png')
                : require('../../../assets/Images/driverProfileProp.png')
            }
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  header: {
    marginTop: moderateScale(10),
  },
  imageContainer: {
    marginVertical: moderateScale(30),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
  },
  marginTop: {
    marginTop: moderateScale(5),
  },
  profileNavigatorView: {
    position: 'relative',
  },
  navigationIcon: {
    position: 'absolute',
    right: moderateScale(0),
    bottom: moderateScale(25),
  },
  navigationButton: {
    borderBottomColor: gray,
    borderBottomWidth: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: moderateScale(10),
    marginVertical: moderateScale(12.5),
  },
  prop: {
    width: moderateScale(200),
  },
});
export default Profile;
