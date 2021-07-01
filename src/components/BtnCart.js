import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BtnCart({text, style, onPress, color}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.viewBtn, style]}>
        <Text style={[styles.txtBtn, {color: color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewBtn: {
    paddingVertical: 7,
    paddingHorizontal: 20,

    borderRadius: 8,
  },
  txtBtn: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'center',
  },
});
