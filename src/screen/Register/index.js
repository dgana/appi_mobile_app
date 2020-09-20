import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
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

export default Register;
