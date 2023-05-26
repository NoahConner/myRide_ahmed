import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Icon = ({
    name,
    size,
    color
  }) => {
  return (
    <FontAwesome5 name={name} size={size} color={color} />
  )
}

export default Icon