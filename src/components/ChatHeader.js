import { View, StyleSheet } from 'react-native'
import React from 'react'
import Heading from './Heading'
import { KumbhSansExtraRegular, green } from '../constants/Index'
import { moderateScale } from 'react-native-size-matters'

const ChatHeader = ({user}) => {
  return (
    <View style={styles.container}>
        <Heading
            text={user?.name}
            fontSize={moderateScale(14)}
            fontFamily={KumbhSansExtraRegular}
            color={green}
            textAlign="left"
          />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{

    }
})
export default ChatHeader