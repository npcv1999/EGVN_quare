import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Colors from '../../assets/colors/Colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import BtnCart from '../../components/BtnCart';
import ROUTES from '../../navigations/Routes';

const cate = [
  {
    id: 1,
    title: 'Hàng tiêu dùng',
    logo: require('../../assets/img/jbl.png'),
    name: 'Loa abc xyz 123 aaaaaaaaaaaaaaaa',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Tẩy rửa sinh học',
    logo: require('../../assets/img/cate/2.png'),
    name: 'Loa abc xyz 123 aaaaaaaaaaaaaaaa',
    quantity: 1,
  },
  {
    id: 3,
    title: 'Xà phòng Trái nhàu',
    logo: require('../../assets/img/cate/3.png'),
    name: 'Loa abc xyz 123 ',
    quantity: 1,
  },
  {
    id: 4,
    title: 'Thực phẩm Dinh dưỡng',
    logo: require('../../assets/img/cate/4.png'),
    name: 'Loa abc xyz 123 ',
    quantity: 1,
  },
  {
    id: 5,
    title: 'Nước hoa tinh dầu',
    logo: require('../../assets/img/cate/5.png'),
    quantity: 1,
  },
  {
    id: 6,
    title: 'Chăm sóc sức khỏe',
    logo: require('../../assets/img/cate/6.png'),
    quantity: 1,
  },
  {
    id: 7,
    title: 'Hàng điện tử',
    logo: require('../../assets/img/cate/7.png'),
    quantity: 1,
  },
  {
    id: 8,
    title: 'Thời trang làm đẹp',
    logo: require('../../assets/img/cate/8.png'),
    quantity: 0,
  },
  {
    id: 9,
    title: 'Hàng khuyến mãi ',
    logo: require('../../assets/img/cate/9.png'),
    quantity: 1,
  },
  {
    id: 10,
    title: '',
    logo: require('../../assets/img/cate/10.png'),
    quantity: 1,
  },
];

export default function Cart({navigation}) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(cate);
  const quantityHandler = (action, id) => {
    const newItems = [...cate];
    const findById = newItems.filter(item => item.id === id);
    const currentQty = findById[0]['quantity'];
    if (action == 'more') {
      findById[0]['quantity'] = currentQty + 1;
    } else if (action == 'less') {
      findById[0]['quantity'] = currentQty > 1 ? currentQty - 1 : 1;
    }
    setCount(findById[0]['quantity']);
  };

  const deleteItemById = id => {
    const filteredData = data.filter(item => item.id !== id);

    setData(filteredData);
  };
  const renderItem = ({item, index}) => (
    <View style={styles.viewItem}>
      <View style={{flex: 3}}>
        <Image style={{width: 70, height: 70}} source={item.logo}></Image>
      </View>
      <View style={{flex: 7}}>
        <Text>{item.title}</Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text style={{marginRight: 10, textDecorationLine: 'line-through'}}>
            1.950.000đ
          </Text>
          <Text style={{color: Colors.orange, fontWeight: 'bold'}}>
            1.500.000đ
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Quantity --------------------------------------------------*/}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => quantityHandler('less', item.id)}>
              <AntDesign
                name="minus"
                size={15}
                style={{backgroundColor: '#f7f5f6', padding: 1}}></AntDesign>
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10}}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => quantityHandler('more', item.id)}>
              <AntDesign
                name="plus"
                size={15}
                style={{backgroundColor: '#f7f5f6', padding: 1}}></AntDesign>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => deleteItemById(item.id)}>
            <AntDesign
              name="closecircle"
              size={18}
              color={Colors.orange}></AntDesign>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 9}}>
        <FlatList data={data} renderItem={renderItem}></FlatList>
      </View>
      <View style={styles.footerCart}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 16,
              color: '#807e7e',
            }}>
            Thành tiền
          </Text>
          <Text
            style={{color: Colors.orange, fontWeight: 'bold', fontSize: 18}}>
            6.000.000đ
          </Text>
        </View>
        <BtnCart
          text="TIẾN HÀNH ĐẶT HÀNG"
          color="white"
          style={{backgroundColor: Colors.orange}}
          onPress={() => navigation.navigate(ROUTES.ADDRESSCART)}></BtnCart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 1,
  },
  footerCart: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
});
