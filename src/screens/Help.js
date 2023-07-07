import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Button,
  DrawerHeader,
  Heading,
  Input,
  ViewHeader,
} from '../components/Index';
import {
  KumbhSansExtraMedium,
  backgroundColor,
  black,
  darkGray,
  purple,
  screenWidth,
  white
} from '../constants/Index';
import { AppContext } from '../context/AppContext';
const Help = ({}) => {
  const navigation = useNavigation()
  const [helpMessage, setHelpMessage] = useState('');
  const {theme} = useContext(AppContext);
  return (
    <View style={{flex: 1, backgroundColor:theme == 'dark' ? black : backgroundColor}}>
      <DrawerHeader navigate={navigation} style={{paddingBottom:moderateScale(10)}}/>
      <View>
        <ViewHeader
          heading="Help"
          icon={'home'}
          headingColor={theme == 'dark' ? white : darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
        <Input
        multiline
        numberOfLines={4}
          placeholderTextColor={theme == 'dark' ? white : black}
          color={theme == 'dark' ? white : black}
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
              console.error('Information Save');
            }}
          />
        </View>
        <Heading
          text="lorem ipsum dolor si rameru asdus, absdhsdasndsd, asdahsdbhasdsdasdb"
          fontSize={moderateScale(13)}
          fontFamily={KumbhSansExtraMedium}
          color={theme == 'dark' ? white : black}
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
            text="Or Call Now "
            fontSize={moderateScale(13)}
            fontFamily={KumbhSansExtraMedium}
            color={theme == 'dark' ? white : black}
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
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
