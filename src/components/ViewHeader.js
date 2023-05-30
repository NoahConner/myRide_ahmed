import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, Icon} from '../components/Index';
import {KumbhSansExtraBold, purple, screenWidth, white} from '../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ViewHeader = ({
  heading,
  icon,
  headingColor,
  fontSize,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <Icon name={'arrow-left'} size={15} color={white} />
      </TouchableOpacity>
      <Heading
        text={heading}
        fontSize={moderateScale(fontSize)}
        fontFamily={KumbhSansExtraBold}
        color={headingColor}
        textAlign="center"
      />
      <TouchableOpacity style={styles.secondaryButton} onPress={() => {}}>
        <Icon name={icon} size={25} color={purple} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:moderateScale(screenWidth)
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
  secondaryButton:{
    backgroundColor: 'transparent',
  }
});
export default ViewHeader;
