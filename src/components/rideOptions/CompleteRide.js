import { View, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Heading from '../Heading';
import { moderateScale } from 'react-native-size-matters';
import { InterRegular, KumbhSansExtraBold, black, gold, lightestGray, lightestPurple, white } from '../../constants/Index';
import Icon from '../Icon';
import Input from '../Input';
const renderIcons = () => {
    return Array.from({length: 5}).map((_, index) => (
      <Icon
        style={styles.iconStyle}
        key={index}
        name="star"
        solid={true}
        size={16}
        color={gold}
      />
    ));
  };
const CompleteRide = () => {
    const [rating, setRating] = useState('');
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
          text="Rate Your Captain!"
          fontSize={moderateScale(12)}
          fontFamily={InterRegular}
          color={white}
          textAlign="center"
          style={{marginTop: moderateScale(15)}}
        />
        <View style={styles.ratingContainer}>{renderIcons()}</View>
        <Input
          placeholderTextColor={black}
          style={styles.helpTextArea}
          placeholder="Type Here..."
          value={rating}
          setValue={setRating}
          type="text"
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
export default CompleteRide