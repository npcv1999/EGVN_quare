import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Colors from '../../assets/colors/Colors';
import BtnCart from '../../components/BtnCart';

export default function AddressCart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.vwAddress}>
        <TextInput
          style={{backgroundColor: 'white'}}
          label="Họ và tên"></TextInput>
        <TextInput
          style={{backgroundColor: 'white'}}
          label="Số điện thoại"></TextInput>
        <TextInput style={{backgroundColor: 'white'}} label="Tỉnh"></TextInput>
        <TextInput
          style={{backgroundColor: 'white'}}
          label="Quận/Huyện"></TextInput>
        <TextInput
          style={{backgroundColor: 'white'}}
          label="Phường/Xã"></TextInput>
        <TextInput style={{backgroundColor: 'white'}} label="Đường"></TextInput>
        <TextInput
          style={{backgroundColor: 'white'}}
          label="Số nhà"></TextInput>
        <BtnCart
          color={Colors.cyan}
          style={{
            borderColor: Colors.cyan,
            borderWidth: 1,
            marginHorizontal: 50,
            top: 150,
          }}
          text="Giao đến địa chỉ này"></BtnCart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.cyan,
    position: 'absolute',
    zIndex: -1,
  },
  vwAddress: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 40,
    marginVertical: 50,
    borderRadius: 5,

    elevation: 10,
  },
});
