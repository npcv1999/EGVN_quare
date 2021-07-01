import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function GreyArea({name, label, onPress, isBorder}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, isBorder ? {borderBottomWidth: 0.5} : 0]}>
        <AntDesign
          style={styles.icon}
          name={name}
          size={22}
          color={Colors.cyan}></AntDesign>
        <Text style={styles.txtLb}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 16,
  },
  txtLb: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#777676',
  },
});
