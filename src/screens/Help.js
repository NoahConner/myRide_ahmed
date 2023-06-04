import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  DrawerHeader,
  Heading,
  Input,
  ViewHeader,
} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  KumbhSansExtraMedium,
  backgroundColor,
  black,
  darkGray,
  gray,
  lightestGray,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
const Help = ({navigation}) => {
  const [helpMessage, setHelpMessage] = useState('');
  return (
    <View style={{flex: 1}}>
      <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
      <View>
        <ViewHeader
          heading="Help"
          icon={'home'}
          headingColor={darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
        <Input
          placeholderTextColor={black}
          style={styles.helpTextArea}
          placeholder="Type Here..."
          value={helpMessage}
          setValue={setHelpMessage}
          type="text"
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Button
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Send"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            style={styles.saveButton}
            onPress={() => {
              console.log('Information Save');
            }}
          />
        </View>
        <Heading
          text="lorem ipsum dolor si rameru asdus, absdhsdasndsd, asdahsdbhasdsdasdb"
          fontSize={moderateScale(13)}
          fontFamily={KumbhSansExtraMedium}
          color={black}
          textAlign="left"
          style={styles.heading}
        />
        <View
          style={{
            display: 'flex',
            flexDirection:'row',
            marginLeft:moderateScale(35),
            marginTop:moderateScale(10)
          }}>
          <Heading
            text="Or Call Now"
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraMedium}
            color={black}
            textAlign="left"
          />
          <Heading
            text="123-456-7890"
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraMedium}
            color={purple}
            textAlign="left"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  header: {
    marginTop: moderateScale(20),
  },
  heading: {
    width: moderateScale(screenWidth - 70),
    marginHorizontal: moderateScale(35),
    marginTop: moderateScale(20),
  },
  helpTextArea: {
    minHeight: moderateScale(200),
    backgroundColor: lightestGray,
    width: moderateScale(screenWidth - 70),
    marginHorizontal: moderateScale(35),
    marginTop: moderateScale(35),
    borderRadius: moderateScale(10),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  saveButton: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(35),
  },
});

export default Help;
