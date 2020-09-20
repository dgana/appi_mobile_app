import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Login;
