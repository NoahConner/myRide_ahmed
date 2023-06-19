import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  ChatFooter,
  ChatHeader,
  DrawerHeader,
  Heading,
  ViewHeader,
} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  gray,
  green,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import ChatBody from '../components/ChatBody';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {socket} from '../stacks/DrawerNavigator';
import {AppContext, useAppContext} from '../context/AppContext';
const Chat = ({route}) => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(route.params.selectedUser);
  const [messageList, setMessageList] = useState([]);
  const {user} = useAppContext(AppContext);
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
    <View style={{flex: 1}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View style={styles.container}>
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
        <ChatHeader selectedUser={selectedUser} />
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
