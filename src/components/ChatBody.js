import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { InterRegular, backgroundColor, gray, green, screenWidth, white } from '../constants/Index';
import Heading from './Heading';

const ChatBody = ({item, user}) => {
    const isSender = item.sender === 'sender';
    const containerStyle = isSender
      ? styles.senderContainer
      : styles.receiverContainer;
    const textStyle = isSender ? styles.senderText : styles.receiverText;
    
    return (
      <View style={[styles.messageContainer, containerStyle]}>
        <Heading
          text={item?.content}
          fontSize={moderateScale(10)}
          fontFamily={InterRegular}
          color={textStyle}
          textAlign="center"
        />
      </View>
    );
}
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
export default ChatBody