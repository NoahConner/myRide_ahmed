import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from './Button'
import Icon from './Icon'
import { moderateScale } from 'react-native-size-matters'
import Heading from './Heading'
import { KumbhSansExtraRegular, black, purple, white } from '../constants/Index'

const UploadDocument = ({ headingText, buttonStyle,truncate, onPress }) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            style={styles.iconStyle}
            name="file"
            solid={true}
            size={14}
            color={black}
          />
          <Heading
            text={headingText}
            fontSize={moderateScale(14)}
            fontFamily={KumbhSansExtraRegular}
            color={styles.textStyle.color}
            textAlign="left"
            truncate={truncate}
          />
        </View>
        <Button
          style={[styles.button, buttonStyle]}
          fontSize={moderateScale(14)}
          backgroundColor={purple}
          color={white}
          text="Upload"
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width="35%"
          onPress={onPress}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginVertical:moderateScale(5)
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: moderateScale(10),
    },
    iconStyle: {
      marginRight: moderateScale(3),
    },
    textStyle: {
      color: purple,
    },
    button: {
    },
    buttonText: {
      color: purple,
    },
  })
export default UploadDocument