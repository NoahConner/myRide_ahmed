import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, Icon} from '../components/Index';
import {
  KumbhSansExtraBold,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {handleCallButtonPress} from '../constants/HelperFunctions';
const ViewHeader = ({
  heading,
  icon,
  headingColor,
  fontSize,
  style,
  navigation,
  path,
  phoneNumber,
}) => {
  const handleButtonPress = () => {
    if (icon === 'phone-alt') {
      handleCallButtonPress(phoneNumber);
    } else {
      navigation.navigate(path);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          name={'arrow-left'}
          size={icon === 'phone-alt' ? 10 : 15}
          color={white}
        />
      </TouchableOpacity>
      <View style={styles.headingContainer}>
        <Heading
          text={heading}
          fontSize={moderateScale(fontSize)}
          fontFamily={KumbhSansExtraBold}
          color={headingColor}
          textAlign="center"
        />
      </View>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={handleButtonPress}>
        <Icon name={icon} size={25} color={purple} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    width: '100%',
    maxWidth: moderateScale(screenWidth),
  },
  backButton: {
    backgroundColor: purple,
    borderRadius: moderateScale(200),
    width: moderateScale(30),
    height: moderateScale(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ViewHeader;
