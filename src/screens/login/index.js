import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BtnCyan from '../../components/BtnCyan';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../../navigations/Routes';
import img from '../../assets/img';

export default function Login() {
  const navigation = useNavigation();

  const [icon, setIcon] = useState('eye-off');
  const [secure, setSecure] = useState(true);
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');

  const changeIcon = () => {
    setIcon(icon === 'eye' ? 'eye-off' : 'eye');
    setSecure(!secure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image
          source={img.logo}
          style={styles.imgLogo}
          resizeMode="contain"></Image>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Tên đăng nhập"
          value={usr}
          onChangeText={text => setUsr(text)}></TextInput>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          value={pwd}
          onChangeText={text => setPwd(text)}
          placeholder="Mật khẩu"
          secureTextEntry={secure}></TextInput>
        <Feather
          name={icon}
          style={styles.eye}
          size={18}
          color={Colors.lightGray}
          onPress={() => changeIcon()}
        />
      </View>

      <TouchableOpacity
        style={{alignItems: 'flex-end'}}
        onPress={() => console.log('Quên mk')}>
        <Text style={styles.txtForgot}>Quên mật khẩu!{` `}</Text>
      </TouchableOpacity>

      <BtnCyan
        style={styles.btnLogin}
        onPress={() => console.log(usr, pwd)}
        name="ĐĂNG NHẬP"
        color={'white'}></BtnCyan>

      <View style={styles.viwFooter}>
        <Text style={styles.txtRegister}>{`Bạn chưa có tài khoản? `}</Text>

        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGIST)}>
          <Text
            style={[
              styles.txtRegister,
              {
                color: Colors.orange,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              },
            ]}>
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
  viewImg: {
    alignItems: 'center',

    marginVertical: 100,
  },
  imgLogo: {
    width: 175,
    height: 115,
  },

  txtForgot: {
    color: Colors.cyan,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontStyle: 'italic',
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 22,
    elevation: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    marginBottom: 30,
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
    marginVertical: 30,
    backgroundColor: Colors.cyan,
  },
  viwFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtRegister: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,

    color: '#696767',
  },
});
