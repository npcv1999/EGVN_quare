import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BtnCyan from '../../components/BtnCyan';
import CheckBox from '@react-native-community/checkbox';

export default function SellRegister() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [cfm, setCfm] = useState('');
  const [erro, setError] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>ĐĂNG KÝ</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => setName(text)}></TextInput>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Điện thoại"
          onChangeText={text => setPhone(text)}></TextInput>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Tên shop"
          onChangeText={text => setMail(text)}></TextInput>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Mật khẩu"
          onChangeText={text => setPwd(text)}></TextInput>
      </View>

      <View
        style={[
          styles.containerInput,
          erro && {borderColor: 'red', borderWidth: 1},
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry={true}
          onChangeText={text => {
            if (text == pwd) {
              setCfm(text);
              console.log('trung khop');
              setError(false);
            } else {
              console.log('khong trung khop');
              setError(true);
            }
          }}></TextInput>
        {erro && <Text type="error">Không trùng khớp!</Text>}
      </View>

      <View style={styles.containerCheckbox}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{true: Colors.cyan, false: 'gray'}}
        />
        <Text style={styles.label}>Tôi đã đọc điều khoản của QUARE</Text>
      </View>

      <BtnCyan
        style={styles.btnLogin}
        onPress={() => console.log(name, mail, phone, pwd, cfm)}
        name="ĐĂNG KÝ"
        color={Colors.cyan}></BtnCyan>

      <View style={styles.viwFooter}>
        <Text style={styles.txtLogin}>{`Đã có tài khoản? `}</Text>

        <TouchableOpacity styeonPress={() => console.log('Đăng kí')}>
          <Text
            style={[
              styles.txtRegister,
              {
                color: Colors.cyan,
                fontWeight: 'bold',
              },
            ]}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>

        <Text>{` ngay !`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  txtTitle: {
    marginVertical: 45,
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#a6a6a8',
  },
  containerInput: {
    paddingHorizontal: 22,
    elevation: 3,
    borderRadius: 5,
    borderStyle: 'solid',
    marginBottom: 25,
    backgroundColor: 'white',
    borderColor: '#707070',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 54,
    fontFamily: 'GoogleSans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 8.5,
    letterSpacing: 0,
  },
  containerCheckbox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: Colors.txtGray,
  },

  btnLogin: {
    alignItems: 'center',
    marginBottom: 30,
    borderColor: Colors.cyan,
    borderWidth: 1,
    borderRadius: 8,
  },
  viwFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtLogin: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,

    color: '#696767',
  },
});
