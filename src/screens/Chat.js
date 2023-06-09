import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ChatBody from '../components/ChatBody';
import {
  ChatFooter,
  ChatHeader,
  DrawerHeader,
  ViewHeader
} from '../components/Index';
import {
  backgroundColor,
  black,
  gray,
  green,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import { AppContext, useAppContext } from '../context/AppContext';
import { socket } from '../stacks/DrawerNavigator';
const Chat = ({route}) => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(route.params.selectedUser);
  const [messageList, setMessageList] = useState([]);
  const {user, theme} = useAppContext(AppContext);
  const isFocused = useIsFocused()
  useEffect(() => {
    console.log(messageList, 'hello new messhadasd');
  }, [messageList]);
  useEffect(() => {
    const handleSocketMessage = ({from, to, message, time}) => {
      if (to == user?.id) {
        const newMessage = {
          content: message,
          sender: 'receiver',
        };
        setMessageList(prevMessageList => [...prevMessageList, newMessage]);
      }
    };

    socket.on('message', handleSocketMessage);

    return () => {
      socket.off('message', handleSocketMessage);
    };
  }, [socket, selectedUser?.id, setMessageList]);

  const renderMessage = ({item}) => {
    return (
      <ChatBody
        item={item}
        selectedUser={selectedUser}
        setMessageList={setMessageList}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme == 'dark' ? black : backgroundColor}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View style={[styles.container,{backgroundColor: theme == 'dark' ? black : backgroundColor}]}>
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
        <ChatHeader selectedUser={selectedUser} backgroundColor={theme == 'dark' ? black : backgroundColor}/>
        <FlatList
          data={messageList}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.chatContainer}
        />
        <ChatFooter
          message={message}
          setMessage={setMessage}
          setMessageList={setMessageList}
          selectedUser={selectedUser}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  header: {
    marginTop: moderateScale(20),
  },
  chatContainer: {
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(80),
    paddingHorizontal: moderateScale(20),
    width: screenWidth,
  },
  messageContainer: {
    maxWidth: '70%',
    borderRadius: 10,
    padding: moderateScale(20),
    marginVertical: moderateScale(5),
  },
  senderContainer: {
    alignSelf: 'flex-end',
    backgroundColor: green,
  },
  receiverContainer: {
    alignSelf: 'flex-start',
    backgroundColor: gray,
  },
  senderText: {
    color: white,
  },
  receiverText: {
    color: white,
  },
});

export default Chat;
