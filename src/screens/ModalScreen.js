import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Icon from '../components/Icon';
import Input from '../components/Input';
import CustomModal from '../components/Modal';
import { formatUSDPrice } from '../constants/HelperFunctions';
import {
  InterRegular,
  KumbhSansExtraBold,
  black,
  gold,
  gray,
  lightestGray,
  lightestPurple,
  purple,
  red,
  screenWidth,
  white
} from '../constants/Index';
const renderIcons = () => {
  return Array.from({length: 5}).map((_, index) => (
    <Icon
      style={styles.iconStyle}
      key={index}
      name="star"
      solid={true}
      size={14}
      color={gold}
    />
  ));
};
const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [rating, setRating] = useState('');
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState('');
  const handleOpenModal = component => {
    setSelectedComponent(component);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSelect = value => {
    setSelected(value);
  };

  const renderRadioButton = value => {
    const isSelected = selected === value;
    return (
      <TouchableOpacity
        style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
        onPress={() => handleSelect(value)}>
        <Text style={styles.radioButtonText}>{formatUSDPrice(value)}</Text>
      </TouchableOpacity>
    );
  };


  const CompleteRide = () => {
    return (
      <View>
        <Heading
          text={'Your ride has \n been completed!'}
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={white}
          textAlign="center"
        />
        <Heading
          text="Rate Your Captain!"
          fontSize={moderateScale(12)}
          fontFamily={InterRegular}
          color={white}
          textAlign="center"
          style={{marginTop: moderateScale(15)}}
        />
        <View style={styles.ratingContainer}>{renderIcons()}</View>
        <Input
          placeholderTextColor={black}
          style={styles.helpTextArea}
          placeholder="Type Here..."
          value={rating}
          setValue={setRating}
          type="text"
          color={black}
        />
      </View>
    );
  };

  const TipRider = () => {
    return (
      <View>
        <Heading
          text={'Your ride has \n been completed!'}
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={white}
          textAlign="center"
        />
        <Heading
          text="Tip your captain!"
          fontSize={moderateScale(12)}
          fontFamily={InterRegular}
          color={white}
          textAlign="center"
          style={{marginTop: moderateScale(15)}}
        />
        <View style={styles.tipContainer}>
          {renderRadioButton(5)}
          {renderRadioButton(10)}
          {renderRadioButton(15)}
        </View>
        <Input
          value={amount}
          setValue={setAmount}
          placeholder="Amount"
          type="number"
          style={styles.input}
          placeholderTextColor={gray}
          color={black}
        />
      </View>
    );
  };

  let modalContent = null;
  if (selectedComponent === 'CompleteRide') {
    modalContent = <CompleteRide />;
  } else if (selectedComponent === 'TipRider') {
    modalContent = <TipRider />;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        style={styles.modalButton}
        fontSize={moderateScale(14)}
        backgroundColor={red}
        color={white}
        text="Complete Ride Modal"
        padding={moderateScale(0)}
        textAlign="center"
        borderRadius={moderateScale(0)}
        width={moderateScale(screenWidth / 2 - 30)}
        onPress={() => handleOpenModal('CompleteRide')}
      />
      <Button
        style={styles.modalButton}
        fontSize={moderateScale(14)}
        backgroundColor={red}
        color={white}
        text="Tip Rider Modal"
        padding={moderateScale(0)}
        textAlign="center"
        borderRadius={moderateScale(0)}
        width={moderateScale(screenWidth / 2 - 30)}
        onPress={() => handleOpenModal('TipRider')}
      />
      <View style={styles.container}>
        <CustomModal
          times={true}
          backgroundColor={purple}
          visible={modalVisible}
          onClose={handleCloseModal}
          content={modalContent}
          buttonText={selectedComponent === 'CompleteRide' ? 'Submit' : 'Send'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
    justifyContent: 'center',
  },
  tipContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
    justifyContent: 'center',
  },
  iconStyle: {
    marginHorizontal: moderateScale(1),
  },
  helpTextArea: {
    minHeight: moderateScale(100),
    backgroundColor: lightestGray,
    width: '90%',
    marginTop: moderateScale(5),
    borderRadius: moderateScale(10),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  radioButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: white,
    paddingVertical: 10,
    marginHorizontal: moderateScale(5),
  },
  radioButtonSelected: {
    backgroundColor: lightestPurple,
  },
  radioButtonText: {
    color: black,
  },
  input: {
    backgroundColor: white,
    borderRadius: moderateScale(10),
    textAlign: 'center',
    marginTop: moderateScale(5),
  },
});

export default ModalScreen;
