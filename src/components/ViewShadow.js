import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ViewShadow({children, style}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 25,
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
    justifyContent: 'center',
  },
});
