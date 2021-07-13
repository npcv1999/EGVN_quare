import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../assets/colors/Colors';
import img from '../assets/img';

export default function PaySuccess() {
  return (
    <View style={styles.container}>
      <Image style={{width: 250, height: 250}} source={img.thankyou}></Image>
      <Text style={styles.txtTks}>Đơn hàng của quý khách đang được xử lý!</Text>
      <Text style={styles.txtTks}>
        Mã đơn hàng :
        <Text style={{color: Colors.orange, fontWeight: 'bold'}}>
          {` YU5678910`}
        </Text>
      </Text>
      <View
        style={{
          borderBottomColor: Colors.cyan,
          borderBottomWidth: 1,
          width: 50,
          height: 20,
        }}></View>
      <Text style={{color: Colors.cyan, fontWeight: 'bold', fontSize: 20}}>
        CẢM ƠN QUÝ KHÁCH
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    backgroundColor: 'white',
  },
  txtTks: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#777676',
  },
});
