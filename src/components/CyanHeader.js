import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../assets/colors/Colors';

const CyanHeader = () => {
  return <View style={styles.header}></View>;
};
export default CyanHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.cyan,
  },
});
