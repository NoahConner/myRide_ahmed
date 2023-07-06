import React, {useState, useContext} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
    AccountRow,
  Button,
  DrawerHeader,
  Heading,
  Icon,
  Input,
  TopLeftCircleProp,
  ViewHeader,
} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  black,
  darkGray,
  screenWidth,
  white,
  green,
  screenHeight,
} from '../../constants/Index';
import {useNavigation} from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';

const Accounts = ({}) => {
  const navigation = useNavigation();
  const {theme} = useContext(AppContext);
  const renderAccountsRow = () => {
    return Array.from({length: 5}).map((_, index) => (
        <AccountRow key={index} />
    ));
  };
  return (
    <View style={[styles.container,{backgroundColor:theme == 'dark' ? black : backgroundColor}]}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <ViewHeader
        heading="Accounts"
        icon={'home'}
        headingColor={darkGray}
        fontSize={20}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
      {renderAccountsRow()}
      <Button
          fontSize={moderateScale(14)}
          backgroundColor={green}
          color={white}
          text="Add Account"
          style={styles.buttonContainer}
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width={moderateScale(screenWidth / 2)}
          onPress={()=>navigation.navigate('AccountInformation')}
        />
      </ScrollView>
      <TopLeftCircleProp style={{top: moderateScale(screenHeight - 150)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scrollContent: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: moderateScale(20),
  },
  header: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
});

export default Accounts;
