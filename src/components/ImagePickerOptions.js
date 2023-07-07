import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { handleCameraPress, handleGalleryPress } from '../constants/HelperFunctions'
import { purple, white } from '../constants/Index'
import Button from './Button'

const ImagePickerOptions = ({setImageSource, setSheet}) => {
  return (
    <View style={styles.rbsheetContainer}>
          <Button
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Open Camera"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            style={styles.saveButton}
            onPress={() => {
              handleCameraPress(setImageSource, setSheet)
            }}
          />
          <Button
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Pick Image From Gallery"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            style={styles.saveButton}
            onPress={() => {
              handleGalleryPress(setImageSource, setSheet)
            }}
          />
        </View>
  )
}

const styles = StyleSheet.create({
    saveButton: {
        marginTop: moderateScale(20),
      },
      prop: {
        marginVertical: moderateScale(30),
      },
      rbsheetContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:moderateScale(30)
      },
})
export default ImagePickerOptions