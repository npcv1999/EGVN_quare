import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BtnCart from '../../components/BtnCart';
import BtnCyan from '../../components/BtnCyan';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ViewShadow from '../../components/ViewShadow';
import InfCheckOut from '../../components/InfCheckOut';
import {ROUTES} from '../../navigations/Routes';

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
];

export default function CheckOut({navigation}) {
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
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Product */}
      <View style={{flex: 5}}>
        <Text style={styles.title}>SẢN PHẨM</Text>
        <FlatList data={cate} renderItem={renderItem}></FlatList>
      </View>

      {/* Info checkout */}

      <View
        style={{
          flex: 5,
          backgroundColor: 'white',
        }}>
        <ScrollView>
          <ViewShadow
            style={{
              paddingVertical: 20,
              marginTop: 0,
              justifyContent: 'space-around',
            }}>
            <Text style={styles.label}>THÔNG TIN THANH TOÁN</Text>

            {/* Price */}
            <InfCheckOut
              label="Thành tiền"
              price="6.000.000đ"
              font={{fontWeight: 'bold'}}></InfCheckOut>
            <InfCheckOut label="Phí vận chuyển" price="30.000đ"></InfCheckOut>
            <InfCheckOut label="Giảm giá" price="0đ"></InfCheckOut>
            <InfCheckOut
              label="Tổng cộng"
              price="6.030.000đ"
              font={{fontWeight: 'bold', color: Colors.orange}}></InfCheckOut>
          </ViewShadow>

          {/* AddressCart */}
          <ViewShadow style={{paddingVertical: 20}}>
            <Text style={styles.label}>ĐỊA CHỈ GIAO HÀNG</Text>
            <Text style={styles.txtAddress}>
              20 Nguyễn Trãi, Bến Thành, Quận 1, HCM
            </Text>
          </ViewShadow>

          {/* Button checkout */}
          <View>
            <BtnCart
              onPress={() => navigation.navigate(ROUTES.SUCCESS)}
              color="white"
              text="THANH TOÁN"
              style={{
                backgroundColor: Colors.orange,
                marginHorizontal: 50,
                paddingVertical: 10,
                marginTop: 20,
              }}></BtnCart>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    color: '#807e7e',
    marginVertical: 15,
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
  label: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',

    color: '#807e7e',
  },
  txtAddress: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#777676',
  },
});
