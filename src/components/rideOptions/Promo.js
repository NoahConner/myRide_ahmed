import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Heading, Input} from '../Index';
import {KumbhSansBold, black, gray, white} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';

const Promo = () => {
  const [promo, setPromo] = useState('');
  return (
    <KeyboardAvoidingView  behavior="height" enabled>
      <Heading
        text="Enter Promo Code"
        style={styles.heading}
        fontSize={moderateScale(20, 0.1)}
        fontFamily={KumbhSansBold}
        color={white}
        textAlign="center"
      />
      <Input
        value={promo}
        setValue={setPromo}
        placeholder="Promo Code"
        type="text"
        style={styles.input}
        placeholderTextColor={gray}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginTop: moderateScale(15, 0.1),
  },
  input: {
    backgroundColor: white,
    padding: moderateScale(10, 0.1),
    color:black,
    shadowColor: black,
    shadowOffset: {width: 2, height: 30},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
    borderRadius:moderateScale(10,0.1),
    textAlign:'center'
  },
});
export default Promo;
