import {
    View,
    StyleSheet
  } from 'react-native';
  import React, {useContext} from 'react';
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
    white,
  } from '../constants/Index';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';

  const HowToUse = ({}) => {
  const navigation = useNavigation()
  const {theme} = useContext(AppContext);
    return (
      <View style={{flex: 1,backgroundColor: theme == 'dark' ? black : backgroundColor}}>
        <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
        <View>
          <ViewHeader
            heading="How To Use?"
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
      marginHorizontal:moderateScale(20),
      marginTop: moderateScale(20),
    },
  });
  
  export default HowToUse;
  