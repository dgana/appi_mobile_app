import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';

const Heading = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 66,
    margin: 32,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    marginBottom: 16,
  },
});

export default Heading;
