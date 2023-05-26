import { View, Text } from 'react-native'
import React from 'react'
import { yellow} from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';

const Profile = () => {
  const { state } = useAppContext(AppContext);
  return (
    <View style={{backgroundColor:yellow, flex:1}}>
      <Text>{state}</Text>
    </View>
  )
}

export default Profile