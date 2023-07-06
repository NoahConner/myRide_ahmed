import { View, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, Heading } from './Index';
import {
  KumbhSansExtraBold,
  InterRegular,
  darkGray,
  gray,
  lighterGray,
  red,
} from '../constants/Index';
import { moderateScale } from 'react-native-size-matters';

const CardRow = ({key, card ,index}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Heading
            text={card?.name}
            fontSize={moderateScale(14)}
            fontFamily={InterRegular}
            color={gray}
            textAlign="left"
          />
          <Heading
            text={card?.selected}
            fontSize={moderateScale(12)}
            fontFamily={KumbhSansExtraBold}
            color={darkGray}
            textAlign="left"
            style={styles.marginLeft}
          />
        </View>
        <View style={styles.row}>
          <Heading
            text={card?.number}
            fontSize={moderateScale(8)}
            fontFamily={InterRegular}
            color={gray}
            textAlign="left"
          />
          <Heading
            text="MasterCard"
            fontSize={moderateScale(12)}
            fontFamily={InterRegular}
            color={red}
            textAlign="left"
            style={styles.marginLeft}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => console.log('hello')}>
        <Icon name={'trash'} size={20} color={red} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
    backgroundColor: lighterGray,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: moderateScale(5),
  },
});

export default CardRow;