import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCustom = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextCustom;
