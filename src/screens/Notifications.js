import {
    View,
    StyleSheet
  } from 'react-native';
  import React from 'react';
  import {
    DrawerHeader,
    Heading,
    ViewHeader,
  } from '../components/Index';
  import {moderateScale} from 'react-native-size-matters';
  import {
    backgroundColor,
    black,
    darkGray,
    KumbhSansExtraBold,
    screenWidth,
    KumbhSansExtraRegular,
    gray,
    lighterGray,
  } from '../constants/Index';
  const Notifications = ({navigation}) => {
    const renderNotifications = () => {
      return Array.from({length: 5}).map((_, index) => (
        <View style={styles.addressRow} key={index}>
          <Heading
            text="lorem Ipsum asdb adbashd asdhbahsd asdhbasd asdahdada dashd"
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraRegular}
            color={gray}
            textAlign="left"
            style={styles.heading}
          />
          </View>
      ));
    };
    return (
      <View style={{flex: 1}}>
        <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
        <View>
          <ViewHeader
            heading="Notifications"
            icon={'home'}
            headingColor={darkGray}
            fontSize={20}
            style={styles.header}
            navigation={navigation}
            path={'Home'}
          />
          {renderNotifications()}
        </View>
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
      marginTop: moderateScale(20),
      marginBottom: moderateScale(20),
    },
    addressRow:{
      marginVertical:moderateScale(10),
      width:moderateScale(screenWidth),
      backgroundColor:lighterGray,
      paddingVertical:moderateScale(15),
      paddingHorizontal:moderateScale(25),
      borderRadius:moderateScale(10)
    },
    heading: {
      marginTop: moderateScale(5),
    },
  });
  
  export default Notifications;
  