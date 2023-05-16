import { View, Text } from 'react-native'
import React from 'react'
import { yellow } from '../constants/Color'
import { useAppContext } from '../context/AppContext';

const Profile = () => {
  const { state } = useAppContext();
  return (
    <View style={{backgroundColor:yellow, flex:1}}>
      <Text>{state}</Text>
    </View>
  )
}

export default Profile