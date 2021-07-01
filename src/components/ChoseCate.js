import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function ChoseCate({label, style}) {
  return (
    <TouchableOpacity>
      <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <AntDesign name="right" size={15} color={Colors.labelGray}></AntDesign>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    opacity: 0.6,
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: Colors.labelGray,
  },
});
