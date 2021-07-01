import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../assets/colors/Colors';

export default function LabelInput({label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputPackage}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: Colors.labelGray,
  },
  inputPackage: {
    marginTop: 18,
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    borderColor: '#707070',
  },
});
