import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddPic from '../../components/AddPic';
import ViewShadow from '../../components/ViewShadow';
import ChoseCate from '../../components/ChoseCate';
import BtnCyan from '../../components/BtnCyan';
export default function AddProd() {
  return (
    <View style={styles.container}>
      <View style={styles.addPic}>
        <AddPic></AddPic>
        <AddPic></AddPic>
      </View>

      <ViewShadow>
        <TextInput
          placeholder="Tên sản phẩm"
          style={styles.borderBottom}></TextInput>
        <TextInput placeholder="Mô tả" style={styles.borderBottom}></TextInput>
      </ViewShadow>

      <ViewShadow>
        <ChoseCate label="Ngành hàng" style={styles.borderBottom}></ChoseCate>
        <ChoseCate label="Thương hiệu" style={styles.borderBottom}></ChoseCate>
        <ChoseCate label="Nhóm màu" style={styles.borderBottom}></ChoseCate>
      </ViewShadow>
      <Text>CÁC LỰA CHỌN</Text>
      <ViewShadow>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View style={{flex: 0.3}}>
            <Text style={{marginBottom: 10}}>Sản phẩm</Text>
            <Text>Tất cả</Text>
          </View>
          <View style={{flex: 0.4, marginRight: 14}}>
            <Text style={{marginBottom: 10}}>Hàng tồn</Text>
            <TextInput
              style={styles.inputChose}
              placeholder="Hàng tồn"></TextInput>
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{marginBottom: 10}}>Gía</Text>
            <TextInput style={styles.inputChose} placeholder="Gía"></TextInput>
          </View>
        </View>
        <ChoseCate label="Gói hàng" style={styles.borderBottom}></ChoseCate>
      </ViewShadow>
      <BtnCyan
        name="Gửi"
        color="white"
        style={{backgroundColor: Colors.cyan, marginVertical: 20}}></BtnCyan>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  addPic: {
    flexDirection: 'row',
    backgroundColor: Colors.addPic,
    paddingVertical: 18,
    paddingHorizontal: 40,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#efeaea',
  },
  inputChose: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#707070',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,

    elevation: 3,
  },
});
