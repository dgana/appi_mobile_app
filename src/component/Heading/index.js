import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = ({children, type = 'primary', style}) => {
  return <Text style={[styles.heading, styles[type], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
  },
  primary: {
    fontSize: 50,
  },
  secondary: {
    fontSize: 32,
  },
});

export default Heading;
