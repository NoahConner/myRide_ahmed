import {
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  backgroundColor,
  darkGray,
  gray,
  green,
  purple,
  screenWidth
} from '../../constants/Index';
import {Button, Heading, Icon, DrawerHeader, ViewHeader} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';

const Profile = ({navigation}) => {
  const navigationViewButtons = [
    {
      name: 'Personal Information',
      path: 'PersonalInformation',
    },
    {
      name: 'Notifications',
      path: 'Notifications',
    },
    {
      name: 'Cards&Accounts',
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
  const navigate = (path) => {
    navigation.navigate(path)
  }
  const renderNavigationButton = ({item}) => {
    return (
      <View style={styles.profileNavigatorView}>
        <Button
          style={styles.navigationButton}
          fontSize={moderateScale(14)}
          backgroundColor={null}
          color={darkGray}
          text={item.name}
          padding={moderateScale(5)}
          textAlign="left"
          borderRadius={moderateScale(100)}
          width={moderateScale(screenWidth - 60)}
          onPress={()=>{navigate(item.path)}}
        />
      <Icon name={'chevron-right'} style={styles.navigationIcon} size={15} color={gray} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <DrawerHeader navigate={navigation} />
      <ViewHeader
        heading={'Profile'}
        icon={'home'}
        headingColor={purple}
        fontSize={25}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/Images/AppLogo.png')}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <Heading
          text={'John Smith'}
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={green}
          textAlign="center"
          style={styles.marginTop}
        />
        <Heading
          text={'132-456-789-0'}
          fontSize={moderateScale(14)}
          fontFamily={KumbhSansExtraRegular}
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
        <FlatList
          data={navigationViewButtons}
          renderItem={renderNavigationButton}
          keyExtractor={(item, index) => index}
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor:backgroundColor
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
    position:'relative'
  },
  navigationIcon:{
    position:'absolute',
    right:moderateScale(0),
    bottom:moderateScale(25)
  },
  navigationButton: {
    borderBottomColor: gray,
    borderBottomWidth: 1,
    borderRadius:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: moderateScale(10),
    marginVertical:moderateScale(12.5)
  },
});
export default Profile;