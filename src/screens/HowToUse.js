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
    KumbhSansExtraMedium,
    backgroundColor,
    black,
    darkGray,
    dummyText,
    screenWidth,
  } from '../constants/Index';
  const HowToUse = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <DrawerHeader navigate={navigation} />
        <View>
          <ViewHeader
            heading="How To Use?"
            icon={null}
            headingColor={darkGray}
            fontSize={20}
            style={styles.header}
            navigation={navigation}
            path={'Home'}
          />
          <Heading
            text={dummyText}
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraMedium}
            color={black}
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
  
  export default HowToUse;
  