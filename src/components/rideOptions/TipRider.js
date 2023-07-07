import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { formatUSDPrice } from '../../constants/HelperFunctions';
import { InterRegular, KumbhSansExtraBold, black, gray, lightestGray, lightestPurple, white } from '../../constants/Index';
import Heading from '../Heading';
import Input from '../Input';
const TipRider = () => {
    const [selected, setSelected] = useState(null);
    const [amount, setAmount] = useState('');
    const handleSelect = value => {
        setSelected(value);
      };
    const renderRadioButton = value => {
        const isSelected = selected === value;
        return (
          <TouchableOpacity
            style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
            onPress={() => handleSelect(value)}>
            <Text style={styles.radioButtonText}>{formatUSDPrice(value)}</Text>
          </TouchableOpacity>
        );
      };
    return (
      <View>
        <Heading
          text={'Your ride has \n been completed!'}
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={white}
          textAlign="center"
        />
        <Heading
          text="Tip your captain!"
          fontSize={moderateScale(12)}
          fontFamily={InterRegular}
          color={white}
          textAlign="center"
          style={{marginTop: moderateScale(15)}}
        />
        <View style={styles.tipContainer}>
          {renderRadioButton(5)}
          {renderRadioButton(10)}
          {renderRadioButton(15)}
        </View>
        <Input
          value={amount}
          setValue={setAmount}
          placeholder="Amount"
          type="number"
          style={styles.input}
          placeholderTextColor={gray}
          color={black}
        />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalButton: {
      padding: moderateScale(10),
      marginBottom: moderateScale(10),
    },
    ratingContainer: {
      flexDirection: 'row',
      marginVertical: moderateScale(5),
      justifyContent: 'center',
    },
    tipContainer: {
      flexDirection: 'row',
      marginVertical: moderateScale(5),
      justifyContent: 'center',
    },
    iconStyle: {
      marginHorizontal: moderateScale(1),
    },
    helpTextArea: {
      minHeight: moderateScale(100),
      backgroundColor: lightestGray,
      width: '90%',
      marginTop: moderateScale(5),
      borderRadius: moderateScale(10),
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    radioButton: {
      borderRadius: 10,
      paddingHorizontal: 20,
      backgroundColor: white,
      paddingVertical: 10,
      marginHorizontal: moderateScale(5),
    },
    radioButtonSelected: {
      backgroundColor: lightestPurple,
    },
    radioButtonText: {
      color: black,
    },
    input: {
      backgroundColor: white,
      borderRadius: moderateScale(10),
      textAlign: 'center',
      marginTop: moderateScale(5),
    },
  });
export default TipRider