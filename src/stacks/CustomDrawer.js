import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = props => {

  return(
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text>Page1</Text>
        <Text>Page2</Text>
        <Text>Page3</Text>
        <Text>Page4</Text>
        <Text>Page5</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
});