import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppContext } from '../context/AppContext';

const SignUp = () => {
  const { state,setState } = useAppContext();

  return (
    <View>
      <Text>SignUp</Text>
      <Button onPress={() => setState(state == "Ahmed" ? "Ali" :"Ahmed")} title="Context Check State" />
    </View>
  );
};

export default SignUp;
