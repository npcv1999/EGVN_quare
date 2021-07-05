import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BtnCyan from '../../components/BtnCyan';

export default function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [cfm, setCfm] = useState('');
  const [erro, setError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image
          source={require('../../assets/logo/logoQuare.png')}
          style={styles.imgLogo}
          resizeMode="contain"></Image>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Họ và tên"
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
          placeholder="Email"
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

      <BtnCyan
        style={styles.btnLogin}
        onPress={() => console.log(name, mail, phone, pwd, cfm)}
        name="ĐĂNG KÝ"
        color={'white'}></BtnCyan>

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
  viewImg: {
    alignItems: 'center',
    marginBottom: 70,
  },
  imgLogo: {
    width: 175,
    height: 115,
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
  btnLogin: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: Colors.cyan,
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
