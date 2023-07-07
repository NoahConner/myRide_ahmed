import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { InterRegular, KumbhSansExtraBold, gray, purple, white } from '../constants/Index'
import Heading from './Heading'

const AccountRow = () => {
  return (
    <View style={styles.container}>
        <View>
      <Heading
          text="JP Morgan"
          fontSize={moderateScale(18)}
          fontFamily={KumbhSansExtraBold}
          color={purple}
          textAlign="left"
          style={{marginVertical: moderateScale(1)}}
        />
        <Heading
          text="12-Jun-2023"
          fontSize={moderateScale(10)}
          fontFamily={InterRegular}
          color={gray}
          textAlign="left"
          style={{marginVertical: moderateScale(1)}}
        />
        </View>
        <View>
      <Heading
          text="123456789595"
          fontSize={moderateScale(10)}
          fontFamily={InterRegular}
          color={gray}
          textAlign="left"
          style={{marginVertical: moderateScale(1)}}
        />
        <Heading
          text="ABC Branch"
          fontSize={moderateScale(10)}
          fontFamily={InterRegular}
          color={gray}
          textAlign="left"
          style={{marginVertical: moderateScale(1)}}
        />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical:moderateScale(10),
        marginVertical:moderateScale(5),
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'space-between',
        backgroundColor:white,
        paddingHorizontal:moderateScale(20),
        borderRadius:moderateScale(5)
    }
})
export default AccountRow