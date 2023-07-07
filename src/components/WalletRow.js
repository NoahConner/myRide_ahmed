import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { formatUSDPrice } from '../constants/HelperFunctions'
import { InterRegular, KumbhSansExtraBold, black, white } from '../constants/Index'
import Heading from './Heading'

const WalletRow = () => {
  return (
    <View style={styles.WalletRow}>
        <Heading
          text="Lorem Ipsum Header"
          fontSize={moderateScale(12)}
          fontFamily={InterRegular}
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
        width: '95%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: white,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        marginVertical: moderateScale(10),
      },
})
export default WalletRow