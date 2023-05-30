import {View, StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
import React from 'react';
import DrawerHeader from '../../components/DrawerHeader';
import ViewHeader from '../../components/ViewHeader';
import {KumbhSansExtraBold, KumbhSansExtraRegular, black, darkGray, gray, green, purple} from '../../constants/Index';
import {Heading} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';

const Profile = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
      <DrawerHeader navigate={navigation} />
      <ViewHeader
        heading={'Profile'}
        icon={'home'}
        headingColor={purple}
        fontSize={25}
        style={styles.header}
        navigation={navigation}
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
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
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
  marginTop:{
    marginTop:moderateScale(5)
  }
});
export default Profile;
