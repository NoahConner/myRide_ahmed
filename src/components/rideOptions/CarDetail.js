import { View, Text, Image } from 'react-native'
import React from 'react'

const CarDetail = ({car}) => {
    console.log(car);
  return (
    <View>
        <Image
            source={require('../../../assets/Images/ride1.png')}
            resizeMode="cover"
          />
          <Text>Car</Text>
    </View>
  )
}

export default CarDetail