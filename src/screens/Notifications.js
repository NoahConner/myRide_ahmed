import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  DrawerHeader,
  Heading,
  ViewHeader,
} from '../components/Index';
import {
  InterRegular,
  backgroundColor,
  black,
  darkGray,
  gray,
  lighterGray,
  white,
} from '../constants/Index';
import { AppContext } from '../context/AppContext';

  const Notifications = ({}) => {
  const navigation = useNavigation()
  const {theme} = useContext(AppContext);
    const renderNotifications = () => {
      return Array.from({length: 5}).map((_, index) => (
        <View style={styles.addressRow} key={index}>
          <Heading
            text="lorem Ipsum asdb adbashd asdhbahsd asdhbasd asdahdada dashd"
            fontSize={moderateScale(13)}
            fontFamily={InterRegular}
            color={gray}
            textAlign="left"
          />
          </View>
      ));
    };
    return (
      <View style={{flex: 1, backgroundColor:theme == 'dark' ? black : backgroundColor}}>
        <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
        <View>
          <ViewHeader
            heading="Notifications"
            icon={'home'}
            headingColor={theme == 'dark' ? white : darkGray}
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
      marginLeft:'auto',
      marginRight:'auto',
      width:'95%',
      backgroundColor:lighterGray,
      paddingVertical:moderateScale(15),
      paddingHorizontal:moderateScale(10),
      borderRadius:moderateScale(10)
    }
  });
  
  export default Notifications;
  