import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputCustom = ({
  style,
  placeholder,
  secureTextEntry,
  multiLine,
  numberOfLines,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      multiline={multiLine}
      numberOfLines={numberOfLines}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 12,
    fontSize: 16,
    height: 54,
    marginTop: 12,
    marginBottom: 8,
  },
});

export default TextInputCustom;
