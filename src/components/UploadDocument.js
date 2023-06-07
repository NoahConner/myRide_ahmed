import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from './Button';
import Icon from './Icon';
import {moderateScale} from 'react-native-size-matters';
import Heading from './Heading';
import {
  KumbhSansExtraRegular,
  black,
  purple,
  screenWidth,
  white,
} from '../constants/Index';

const UploadDocument = ({
  headingText,
  buttonStyle,
  truncate,
  onPress,
  document,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon
          style={styles.iconStyle}
          name="file"
          solid={true}
          size={14}
          color={black}
        />
        <Heading
          text={headingText}
          fontSize={moderateScale(14)}
          fontFamily={KumbhSansExtraRegular}
          color={styles.textStyle.color}
          textAlign="left"
          truncate={truncate}
          style={{width: moderateScale(screenWidth / 3 - 10)}}
        />
      </View>
      <Button
        style={[styles.button, buttonStyle]}
        fontSize={moderateScale(14)}
        backgroundColor={purple}
        color={white}
        text={document ? 'Uploaded' : 'Upload'}
        padding={moderateScale(10)}
        textAlign="center"
        borderRadius={moderateScale(100)}
        width={moderateScale(screenWidth / 3 - 10)}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  iconStyle: {
    marginRight: moderateScale(3),
  },
  textStyle: {
    color: purple,
  },
  button: {},
  buttonText: {
    color: purple,
  },
});

export default UploadDocument;
