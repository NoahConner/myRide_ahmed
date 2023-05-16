import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAppContext} from '../context/AppContext';

const Login = () => {
  const {token, setToken} = useAppContext();

  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => setToken(token ? false : true)}
        title="Context Check State"
      />
    </View>
  );
};

export default Login;
