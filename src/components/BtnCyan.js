import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
export default function BtnCyan({name, style, onPress, color}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.viewBtn, style]}>
        <Text style={[styles.txtBtn, {color: color}]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewBtn: {
    justifyContent: 'center',
    width: 240,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  txtBtn: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
  },
});
