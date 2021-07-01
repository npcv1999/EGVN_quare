import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
const cate = [
  {
    id: 1,
    title: 'Hàng tiêu dùng',
    logo: require('../../assets/img/cate/1.png'),
    name: 'Loa abc xyz 123 aaaaaaaaaaaaaaaa',
  },
  {
    id: 2,
    title: 'Tẩy rửa sinh học',
    logo: require('../../assets/img/cate/2.png'),
    name: 'Loa abc xyz 123 aaaaaaaaaaaaaaaa',
  },
  {
    id: 3,
    title: 'Xà phòng Trái nhàu',
    logo: require('../../assets/img/cate/3.png'),
    name: 'Loa abc xyz 123 ',
  },
  {
    id: 4,
    title: 'Thực phẩm Dinh dưỡng',
    logo: require('../../assets/img/cate/4.png'),
    name: 'Loa abc xyz 123 ',
  },
  {
    id: 5,
    title: 'Nước hoa tinh dầu',
    logo: require('../../assets/img/cate/5.png'),
  },
  {
    id: 6,
    title: 'Chăm sóc sức khỏe',
    logo: require('../../assets/img/cate/6.png'),
  },
  {
    id: 7,
    title: 'Hàng điện tử',
    logo: require('../../assets/img/cate/7.png'),
  },
  {
    id: 8,
    title: 'Thời trang làm đẹp',
    logo: require('../../assets/img/cate/8.png'),
  },
  {
    id: 9,
    title: 'Hàng khuyến mãi ',
    logo: require('../../assets/img/cate/9.png'),
  },
  //   {
  //     id: 10,
  //     title: '',
  //     logo: require('../assets/img/cate/10.png'),
  //   },
];
export default function ListCate() {
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.logo} style={styles.imgCate}></Image>
          <Text style={styles.txtTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
  const itemSeparator = () => <View style={{height: 13}}></View>;
  return (
    <View style={styles.container}>
      <Text style={styles.txtCate}>DANH SÁCH NGÀNH HÀNG</Text>
      <FlatList
        data={cate}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 50, paddingVertical: 20},
  txtCate: {
    marginBottom: 30,

    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',

    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.textGray,
  },
  imgCate: {
    width: 55,
    height: 55,
    marginRight: 12,
  },
  txtTitle: {
    fontFamily: 'GoogleSans',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',

    color: Colors.textGray,
  },
});
