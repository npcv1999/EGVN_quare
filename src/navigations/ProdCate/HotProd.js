import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlatListProd from '../../components/FlatListProd';
const data = [
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
  {
    id: 10,
    title: '',
    logo: require('../../assets/img/cate/10.png'),
  },
];
export default function HotProd() {
  return <FlatListProd data={data}></FlatListProd>;
}

const styles = StyleSheet.create({});
