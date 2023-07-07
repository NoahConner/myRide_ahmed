import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { DrawerHeader, Heading, ViewHeader } from '../../components/Index';
import {
  InterRegular,
  KumbhSansExtraBold,
  backgroundColor,
  black,
  darkGray,
  gray,
  lighterGray,
  white
} from '../../constants/Index';
import { AppContext } from '../../context/AppContext';

const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
    <View style={styles.addressRow} key={index}>
      <Heading
        text={'Address ' + index}
        fontSize={moderateScale(13)}
        fontFamily={KumbhSansExtraBold}
        color={black}
        textAlign="left"
        style={styles.heading}
      />
      <Heading
        text="lorem Ipsum asdb adbashd asdhbahsd asdhbasd asdahdada dashd"
        fontSize={moderateScale(13)}
        fontFamily={InterRegular}
        color={gray}
        textAlign="left"
        style={styles.heading}
      />
    </View>
  ));
};
const SavedAddresses = ({}) => {
  const navigation = useNavigation();
  const {
    theme
  } = useContext(AppContext);
  return (
    <View style={{flex: 1, backgroundColor:theme == 'dark' ? black : white}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View>
        <ViewHeader
          heading="Saved Addresses"
          icon={'home'}
          headingColor={theme == 'dark' ? white : darkGray}
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
  addressRow: {
    marginVertical: moderateScale(10),
    width: '95%',
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: lighterGray,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(10),
  },
  heading: {
    marginTop: moderateScale(5),
  },
});

export default SavedAddresses;
