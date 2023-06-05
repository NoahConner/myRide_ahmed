import { View, StyleSheet } from 'react-native'
import React from 'react'
import Heading from './Heading';
import { KumbhSansExtraRegular, backgroundColor, gray, green, screenWidth, white } from '../constants/Index';
import { moderateScale } from 'react-native-size-matters';

const ChatBody = ({item}) => {
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
          fontFamily={KumbhSansExtraRegular}
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