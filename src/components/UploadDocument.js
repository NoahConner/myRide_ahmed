import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  InterRegular,
  black,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import { AppContext } from '../context/AppContext';
import Button from './Button';
import Heading from './Heading';
import Icon from './Icon';

const UploadDocument = ({
  headingText,
  buttonStyle,
  truncate,
  onPress,
  document,
}) => {
  const {theme} = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon
          style={styles.iconStyle}
          name="file"
          solid={true}
          size={14}
          color={theme == 'dark' ? white : black}
        />
        <Heading
          text={headingText}
          fontSize={moderateScale(14)}
          fontFamily={InterRegular}
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
