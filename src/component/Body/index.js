import React from 'react';
import {StyleSheet, View} from 'react-native';

const Body = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 32,
    marginRight: 32,
  },
});

export default Body;
