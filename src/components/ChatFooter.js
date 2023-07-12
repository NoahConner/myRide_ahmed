import moment from 'moment';
import React from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { socketMessage } from '../constants/HelperFunctions';
import { black, gray, green, white } from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';
import Icon from './Icon';

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
    shadowOpacity: Platform.OS == 'ios' ? 0.3 : 1,
    shadowRadius: 10,
    elevation: 20,
    shadowColor: gray,
    shadowOffset: {width: 0, height: -30},
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
