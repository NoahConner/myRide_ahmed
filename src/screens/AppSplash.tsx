import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useAppContext} from '../context/AppContext';
import Input from '../components/Input';

const AppSplash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Your screen content here</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
export default AppSplash;
