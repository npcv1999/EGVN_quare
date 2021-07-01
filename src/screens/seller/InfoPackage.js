import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../../assets/colors/Colors';
import LabelInput from '../../components/LabelInput';

export default function InfoPackage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vui lòng điền đầy đủ thông tin gói hàng</Text>
      <LabelInput label="Trọng lượng tối đa (gam)"></LabelInput>
      <LabelInput label="Chiều dài (cm)"></LabelInput>
      <LabelInput label="Chiều rộng (cm)"></LabelInput>
      <LabelInput label="Chiều cao (cm)"></LabelInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 30, paddingVertical: 20},
  title: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.labelGray,
  },
});
