import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Heading, Button} from 'appi_mobile_app/src/component';

const Landing = ({navigation}) => {
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Heading>LOGO</Heading>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="secondary"
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          LOG IN
        </Button>
        <Button
          type="primary"
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          REGISTER
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  button: {
    flex: 1,
    margin: 12,
  },
  white: {
    color: 'white',
  },
});

export default Landing;
