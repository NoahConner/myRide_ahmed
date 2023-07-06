import {
  View,
  StyleSheet,
  Animated,
  FlatList,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {
  Button,
  CardRow,
  DrawerHeader,
  Heading,
  Input,
  ViewHeader,
} from '../../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  KumbhSansExtraBold,
  InterRegular,
  backgroundColor,
  cards,
  darkGray,
  gray,
  lightGray,
  purple,
  screenHeight,
  screenWidth,
  white,
  black,
} from '../../constants/Index';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';
const CardsAndAccounts = ({}) => {
  const navigation = useNavigation()
  const {theme} = useContext(AppContext);
  const [name, setName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [expiry, setExpiry] = useState('');
  const [CCV, setCCV] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [illustratorProp] = useState(new Animated.Value(screenWidth + 250));
  useEffect(() => {
    startAnimations();
  }, []);

  useEffect(() => {
    if (name === '' || cardNo === '' || expiry === '' || CCV === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, cardNo, expiry, CCV]);

  const startAnimations = () => {
    Animated.timing(illustratorProp, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={{flex: 1, backgroundColor: theme == 'dark' ? black : backgroundColor}}>
      <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
      <View style={[styles.container, {backgroundColor: theme == 'dark' ? black : backgroundColor}]}>
          <ViewHeader
            heading="Cards & Accounts"
            icon={'home'}
            headingColor={theme == 'dark' ? white : darkGray}
            fontSize={20}
            style={styles.header}
            navigation={navigation}
            path={'Home'}
          />
          <Heading
            text="Credit/Debit Card Information"
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansExtraBold}
            color={purple}
            textAlign="left"
            style={styles.heading}
          />
          <Heading
            text="Fill this form to make payment easily"
            fontSize={moderateScale(12)}
            fontFamily={InterRegular}
            color={theme == 'dark' ? white : gray}
            textAlign="left"
            style={styles.heading}
          />
          <View style={styles.profileForm}>
            <Input
              value={name}
              setValue={setName}
              placeholder="Full Name"
              type="text"
              style={styles.input}
              placeholderTextColor={gray}
              color={black}
            />
            <Input
              value={cardNo}
              setValue={setCardNo}
              placeholder="Card No"
              type="text"
              style={styles.input}
              placeholderTextColor={gray}
              color={black}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Input
                value={moment(expiry).format('DD/MM/YYYY')}
                setValue={setExpiry}
                placeholder="Expiry Date"
                type="date"
                style={styles.inputHalf}
                placeholderTextColor={gray}
                color={black}
              />
              <Input
                value={CCV}
                setValue={setCCV}
                placeholder="CCV"
                type="text"
                style={styles.inputHalf}
                placeholderTextColor={gray}
                color={black}
              />
            </View>
            <Button
              disabled={disabled}
              fontSize={moderateScale(14)}
              backgroundColor={purple}
              color={white}
              text="Save"
              padding={moderateScale(10)}
              textAlign="center"
              borderRadius={moderateScale(100)}
              width="50%"
              style={styles.saveButton}
              onPress={() => {
                console.log('Information Save');
              }}
            />
          </View>
          <FlatList
          showsVerticalScrollIndicator={false}
            style={styles.cardView}
            data={cards}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <CardRow card={item} index={index} />
            )}
            horizontal={false}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: moderateScale(20),
  },
  heading: {
    paddingLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  profileForm: {
    marginTop: moderateScale(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHalf: {
    width: screenWidth * 0.5 - moderateScale(30),
    marginHorizontal: moderateScale(10),
    backgroundColor: lightGray,
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  input: {
    backgroundColor: lightGray,
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    width: screenWidth - moderateScale(40),
    borderRadius: moderateScale(5),
  },
  saveButton: {
    marginTop: moderateScale(20),
  },
  prop: {
    marginTop: moderateScale(10),
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
  },
  cardView: {
    flexGrow: 1,
    maxHeight: screenHeight * 0.6,
    marginTop: moderateScale(10),
  },
});

export default CardsAndAccounts;
