import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Heading from './Heading'
import { moderateScale } from 'react-native-size-matters'
import { KumbhSansExtraBold, KumbhSansExtraRegular, black, screenWidth, white } from '../constants/Index'
import { formatUSDPrice } from '../constants/HelperFunctions'

const WalletRow = () => {
  return (
    <View style={styles.WalletRow}>
        <Heading
          text="Lorem Ipsum Header"
          fontSize={moderateScale(12)}
          fontFamily={KumbhSansExtraRegular}
          color={black}
          textAlign="left"
        />
        <Heading
          text={formatUSDPrice('25')}
          fontSize={moderateScale(15)}
          fontFamily={KumbhSansExtraBold}
          color={black}
          textAlign="right"
        />
      </View>
  )
}
const styles = StyleSheet.create({
    WalletRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: moderateScale(screenWidth - 50),
        backgroundColor: white,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        marginVertical: moderateScale(10),
      },
})
export default WalletRow