import React from 'react';
import {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FloatView = ({children}) => {
  return <View style={styles.floatView}>{children}</View>;
};

export default FloatView;

const styles = StyleSheet.create({
  floatView: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
