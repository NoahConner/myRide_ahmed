import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Button,
  DrawerHeader,
  Heading,
  Input,
  TopLeftCircleProp,
  ViewHeader,
  WalletRow
} from '../../components/Index';
import { formatUSDPrice } from '../../constants/HelperFunctions';
import {
  InterRegular,
  KumbhSansExtraBold,
  black,
  darkGray,
  gray,
  green,
  lightGray,
  purple,
  screenHeight,
  screenWidth,
  white
} from '../../constants/Index';
import { AppContext } from '../../context/AppContext';

const Wallet = ({}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const navigation = useNavigation();
  const {theme} = useContext(AppContext);

  const renderWalletRow = () => {
    return Array.from({length: 5}).map((_, index) => <WalletRow key={index} />);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? black : white},
      ]}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <ViewHeader
        heading="Wallet"
        icon={'home'}
        headingColor={theme == 'dark' ? white : darkGray}
        fontSize={20}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Heading
          text="Total"
          fontSize={moderateScale(18)}
          fontFamily={KumbhSansExtraBold}
          color={black}
          textAlign="center"
          style={{marginLeft: moderateScale(10)}}
        />
        <Heading
          text={formatUSDPrice('250')}
          fontSize={moderateScale(40)}
          fontFamily={KumbhSansExtraBold}
          color={purple}
          textAlign="center"
          style={{marginLeft: moderateScale(10)}}
        />
        <Button
          fontSize={moderateScale(14)}
          backgroundColor={green}
          color={white}
          text="Withdraw"
          style={styles.buttonContainer}
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width={moderateScale(screenWidth / 2)}
          onPress={() => navigation.navigate('Accounts')}
        />
        <Heading
          text="Transactions"
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={purple}
          textAlign="center"
          style={{marginLeft: moderateScale(10)}}
        />
        <Heading
          text="Date Range"
          fontSize={moderateScale(10)}
          fontFamily={InterRegular}
          color={theme == 'dark' ? white : gray}
          textAlign="center"
          style={{marginTop: moderateScale(10)}}
        />
        <View style={styles.dateContainer}>
          <Input
            value={moment(from).format('DD/MM/YYYY')}
            setValue={setFrom}
            placeholder="From"
            type="date"
            style={styles.inputHalf}
            placeholderTextColor={theme == 'dark' ? white : gray}
            color={theme == 'dark' ? black : gray}
          />
          <Input
            value={moment(to).format('DD/MM/YYYY')}
            setValue={setTo}
            placeholder="To"
            type="date"
            style={styles.inputHalf}
            placeholderTextColor={theme == 'dark' ? white : gray}
            color={theme == 'dark' ? black : gray}
          />
        </View>
        {renderWalletRow()}
      </ScrollView>
      <TopLeftCircleProp style={{top: moderateScale(screenHeight - 150)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    alignItems: 'center'
  },
  buttonContainer: {
    marginVertical: moderateScale(20),
  },
  header: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputHalf: {
    width: screenWidth * 0.5 - moderateScale(30),
    marginHorizontal: moderateScale(10),
    backgroundColor: lightGray,
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(100),
  },

  image: {
    width: moderateScale(200),
    marginLeft: 'auto',
  },
});

export default Wallet;
