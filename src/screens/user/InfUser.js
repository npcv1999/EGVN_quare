import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {TextInput} from 'react-native-paper';
import BtnCart from '../../components/BtnCart';
import {CheckBox} from 'react-native-elements';

export default function InfUser() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.vwInfo}>
        <View style={styles.vwInput}>
          <TextInput
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Họ và tên"
            value="Nguyen Pham Chi Vinh"></TextInput>
          <TextInput
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Số điện thoại"></TextInput>
          <TextInput
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Email"></TextInput>
          <TextInput
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Địa chỉ"></TextInput>
          <CheckBox
            textStyle={{color: Colors.cyan}}
            containerStyle={{backgroundColor: 'white', borderWidth: 0}}
            title="Đổi mật khẩu"
            checked={checked}
            checkedColor={Colors.cyan}
            onPress={() => setChecked(!checked)}
          />

          <TextInput
            disabled={!checked}
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Mật khẩu cũ"></TextInput>
          <TextInput
            disabled={!checked}
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Mật khẩu mới"></TextInput>
          <TextInput
            disabled={!checked}
            theme={{colors: {primary: Colors.cyan}}}
            style={{backgroundColor: 'white'}}
            label="Nhập lại mật khẩu mới"></TextInput>
          <BtnCart
            color={Colors.cyan}
            style={{
              borderColor: Colors.cyan,
              borderWidth: 1,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            text="Lưu thay đổi"></BtnCart>
        </View>
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
  },
  vwInfo: {
    flex: 1,
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  vwInput: {
    paddingHorizontal: 10,
    elevation: 10,
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom: 30,
  },
});
