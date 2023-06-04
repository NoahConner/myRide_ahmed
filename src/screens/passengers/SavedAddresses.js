import {
  View,
  StyleSheet
} from 'react-native';
import React from 'react';
import {
  DrawerHeader,
  Heading,
  ViewHeader,
} from '../../components/Index';
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
} from '../../constants/Index';
const SavedAddresses = ({navigation}) => {
  const renderIcons = () => {
    return Array.from({length: 5}).map((_, index) => (
      <View style={styles.addressRow} key={index}>
        <Heading
          text={"Address " + index}
          fontSize={moderateScale(13)}
          fontFamily={KumbhSansExtraBold}
          color={black}
          textAlign="left"
          style={styles.heading}
        />
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
          heading="Saved Addresses"
          icon={'home'}
          headingColor={darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
        {renderIcons()}
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

export default SavedAddresses;
