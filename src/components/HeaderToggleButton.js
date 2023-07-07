import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../components/Index';
import { white } from '../constants/Index';
const HeaderToggleButton = ({drawer}) => {
  return (
    <TouchableOpacity
        onPress={() => drawer.toggleDrawer()}>
          <Icon name={'bars'} size={25} color={white}/>
      </TouchableOpacity>
  )
}
export default HeaderToggleButton