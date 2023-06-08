import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {black, gray, green, white} from '../constants/Index';
import Icon from './Icon';
import { socketMessage } from '../constants/HelperFunctions';
import { AppContext, useAppContext } from '../context/AppContext';
import moment from 'moment';

const ChatFooter = ({setMessage, message, setMessageList, selectedUser}) => {
  const {user} =
    useAppContext(AppContext);
  const handleSend = () => {
    if (message.trim() !== '') {
      const newMessage = {
        content: message,
        sender: 'sender',
      };
      const currentTime = moment().format("HH:mm");
      socketMessage(user?.id, selectedUser?.id, message, currentTime)
      // setMessageList(newMessage);
      setMessageList(prevMessageList => [...prevMessageList, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor={gray}
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Icon name="paper-plane" size={20} color={green} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: white,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    alignItems: 'center',
    shadowColor: gray,
    shadowOffset: {width: 0, height: -30},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  inputContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: white,
    marginRight: moderateScale(10),
  },
  input: {
    height: moderateScale(40),
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(14),
    color:black
  },
  sendButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatFooter;
