import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import DrawerHeader from '../../components/DrawerHeader';
import ViewHeader from '../../components/ViewHeader';
import {black, purple} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';

const Profile = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
        <DrawerHeader navigate={navigation} />
        <ViewHeader
          heading={'Profile'}
          icon={'home'}
          headingColor={purple}
          fontSize={25}
          style={styles.header}
        />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  header:{
    marginTop:moderateScale(10)
  }
});
export default Profile;
