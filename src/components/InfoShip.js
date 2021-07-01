import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function InfoShip({onPress, label}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <AntDesign name="right" size={15} color={Colors.labelGray}></AntDesign>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: Colors.labelGray,
  },
});
