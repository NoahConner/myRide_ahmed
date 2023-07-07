import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { DrawerHeader, RideHistoryCard, ViewHeader } from '../components/Index';
import {
  backgroundColor,
  black,
  darkGray,
  lighterGray,
  screenWidth,
  white,
} from '../constants/Index';
import { AppContext } from '../context/AppContext';

const RideHistory = ({}) => {
  const navigation = useNavigation()
  const {theme} = useContext(AppContext);
  const renderCards = () => {
    return Array.from({length: 10}).map((_, index) => ({
      key: index.toString(),
      card: <RideHistoryCard navigation={navigation}/>,
    }));
  };
  return (
    <View style={{flex: 1, backgroundColor: theme == 'dark' ? black : backgroundColor}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <View>
        <ViewHeader
          heading="Ride History"
          icon={'home'}
          headingColor={theme == 'dark' ? white : darkGray}
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
          showsVerticalScrollIndicator={false}
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
