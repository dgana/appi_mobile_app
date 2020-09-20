import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const Button = ({onPress, type = 'primary', style, children}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, styles[type], style]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 12,
  },
  primary: {
    backgroundColor: 'black',
  },
  secondary: {
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
  },
  text_primary: {
    color: 'white',
  },
  text_secondary: {
    color: 'black',
  },
});

export default Button;
