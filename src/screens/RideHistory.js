import {View, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerHeader, RideHistoryCard, ViewHeader} from '../components/Index';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  darkGray,
  screenWidth,
  lighterGray,
} from '../constants/Index';
import {FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RideHistory = ({}) => {
  const navigation = useNavigation()

  const renderCards = () => {
    return Array.from({length: 10}).map((_, index) => ({
      key: index.toString(),
      card: <RideHistoryCard navigation={navigation}/>,
    }));
  };
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View>
        <ViewHeader
          heading="Ride History"
          icon={'home'}
          headingColor={darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
        <FlatList
          data={renderCards()}
          renderItem={({item}) => item.card}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.cardContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  addressRow: {
    marginVertical: moderateScale(10),
    width: moderateScale(screenWidth),
    backgroundColor: lighterGray,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(10),
  },
  heading: {
    marginTop: moderateScale(5),
  },
  cardContainer: {
    paddingBottom: moderateScale(150),
  },
});

export default RideHistory;
