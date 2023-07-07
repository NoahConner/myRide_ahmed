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
  KumbhSansExtraMedium,
  backgroundColor,
  black,
  darkGray,
  dummyText,
  screenWidth,
  white,
} from '../constants/Index';
import { AppContext } from '../context/AppContext';

  const TermsAndConditions = ({}) => {
  const navigation = useNavigation()
  const {theme} = useContext(AppContext);

    return (
      <View style={{flex: 1, backgroundColor:theme == 'dark' ? black : backgroundColor}}>
        <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
        <View>
          <ViewHeader
            heading="Terms & Conditions"
            icon={'home'}
            headingColor={theme == 'dark' ? white : darkGray}
            fontSize={20}
            style={styles.header}
            navigation={navigation}
            path={'Home'}
          />
          <Heading
            text={dummyText}
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraMedium}
            color={theme == 'dark' ? white : black}
            textAlign="center"
            style={styles.heading}
          />
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
    },
    heading: {
      width:moderateScale(screenWidth-40),
      marginHorizontal:moderateScale(20),
      marginTop: moderateScale(20),
    },
  });
  
  export default TermsAndConditions;
  