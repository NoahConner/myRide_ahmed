import {View, StyleSheet} from 'react-native';
import React from 'react';
import {ChatHeader, DrawerHeader, ViewHeader} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, purple, screenWidth} from '../constants/Index';

const Chat = ({navigation}) => {
    const user = {
        name:'Bill Carter',
        image:'../../assets/Images/AppLogo.png',
        rating:5
    }
  return (
    <View style={{flex: 1}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View>
        <ViewHeader
          heading="Chats"
          icon={'phone-alt'}
          headingColor={purple}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path="Home"
          phoneNumber="1234567890"
        />
        <ChatHeader user={user}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  header: {
    marginTop: moderateScale(20),
  },
  heading: {
    width: moderateScale(screenWidth - 40),
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
});

export default Chat;
