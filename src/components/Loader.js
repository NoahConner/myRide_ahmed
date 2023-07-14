import { View, Text, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import { backgroundColor, black, purple } from '../constants/Index'
import { AppContext } from '../context/AppContext'

const Loader = () => {
    const theme = useContext(AppContext)
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:theme == 'dark' ? black : backgroundColor }}>
        <ActivityIndicator size="large" color={purple} />
      </View>
  )
}

export default Loader