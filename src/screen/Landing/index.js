import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'appi_mobile_app/src/component';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button type="primary" onPress={() => navigation.navigate('Login')}>
          LOG IN
        </Button>
        <Button
          type="secondary"
          onPress={() => navigation.navigate('Register')}>
          REGISTER
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  white: {
    color: 'white',
  },
});

export default Landing;
