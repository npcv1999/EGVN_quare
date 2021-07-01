import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/colors/Colors';
import BtnCart from '../components/BtnCart';
import ViewPolicy from '../components/ViewPolicy';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './style';

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
  {
    id: 11,
    title: '',
    logo: require('../../assets/img/cate/10.png'),
  },
];

export default function DetailProd() {
  const [count, setCount] = useState(0);

  const renderItem = ({item}) => (
    <View style={styles.hotItem}>
      <TouchableOpacity>
        <Image
          style={styles.hotItem}
          source={item.logo}
          resizeMode="cover"></Image>
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.txtCate}>{item.name}</Text>
      </View>

      <View style={styles.price}>
        <View>
          <Text style={styles.txtPrice}>1.500.000đ</Text>
        </View>

        <Text style={styles.txtSale}>1.500.000đ</Text>
      </View>

      <View style={styles.rate}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" size={8} color={Colors.star}></AntDesign>
          <AntDesign name="star" size={8} color={Colors.star}></AntDesign>
          <AntDesign name="star" size={8} color={Colors.star}></AntDesign>
          <AntDesign name="star" size={8} color={Colors.star}></AntDesign>
          <AntDesign name="star" size={8} color={Colors.star}></AntDesign>
        </View>

        <Text style={styles.txtRate}>120 lượt xem</Text>
      </View>
    </View>
  );

  const ItemSeparatorComponent = () => (
    <View style={{width: 131, height: 5}}></View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/jbl.png')}
            style={{width: 300, height: 300}}></Image>
        </View>

        <View style={styles.infoProd}>
          {/* Name Product */}
          <Text style={styles.nameProd}>Loa kéo Karaoke Bluetooth JBL2</Text>
          {/* <Text>{data[4].title}</Text> */}

          {/* Price Product */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{textDecorationLine: 'line-through', marginRight: 10}}>
              1.950.000đ
            </Text>
            <Text
              style={{color: Colors.orange, fontSize: 16, fontWeight: 'bold'}}>
              1.500.000đ
            </Text>
          </View>

          {/* Quantity */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Số lượng</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <TouchableOpacity>
                <Icon
                  name="minus"
                  size={15}
                  style={{backgroundColor: '#f7f5f6', padding: 1}}></Icon>
              </TouchableOpacity>
              <Text style={{marginHorizontal: 10}}>{count}</Text>
              <TouchableOpacity>
                <Icon
                  name="plus"
                  size={15}
                  style={{backgroundColor: '#f7f5f6', padding: 1}}></Icon>
              </TouchableOpacity>
            </View>
          </View>

          {/* Components Policy */}
          <View style={styles.viewInfo}>
            <ViewPolicy
              source={require('../assets/img/icon/shield.png')}
              label="Chính sách bảo hành"></ViewPolicy>
            <ViewPolicy
              source={require('../assets/img/icon/cycle.png')}
              label="Chính sách đổi trả trong 30 ngày"></ViewPolicy>
            <ViewPolicy
              source={require('../assets/img/icon/pay.png')}
              label="Thanh toán khi nhận hàng"></ViewPolicy>
          </View>

          {/* Descriptions */}
          <View style={styles.viewInfo}>
            <Text style={styles.txt_label}>MÔ TẢ SẢN PHẨM</Text>
          </View>

          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Helvetica',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textAlign: 'justify',
                lineHeight: 20,
                color: '#777676',
              }}>
              {`Thiết kế ấn tượng

  Người dùng ấn tượng với loa karaoke JBL CV1070 ngay từ cái nhìn đầu tiên nhờ phong cách thiết kế mạnh mẽ, cuốn hút nhưng không bị phô mà vẫn có nét mềm mại.
  Thùng loa đứng được làm từ chất liệu gỗ MDF cao cấp, các góc cạnh được bo tròn tỉ mỉ, bề mặt phủ lớp sơn đen sần bền bỉ với khả năng hạn chế tiếng ồn do rung lắc trong quá trình sử dụng.
  Thiết kế ấn tượng người dùng ấn tượng với loa karaoke JBL CV1070 ngay từ cái nhìn đầu tiên nhờ phong cách thiết kế mạnh mẽ, cuốn hút nhưng không bị phô mà vẫn có nét mềm mại.`}
            </Text>
          </View>

          {/* Relative Product */}
          <View>
            <Text style={styles.txt_label}>CÁC SẢN PHẨM LIÊN QUAN</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View>
                <FlatList
                  contentContainerStyle={{flexDirection: 'row'}}
                  data={data.slice(0, Math.ceil(data.length / 2))}
                  renderItem={renderItem}
                  ItemSeparatorComponent={ItemSeparatorComponent}></FlatList>
                <FlatList
                  contentContainerStyle={{flexDirection: 'row'}}
                  data={data.slice(Math.ceil(data.length / 2))}
                  renderItem={renderItem}
                  ItemSeparatorComponent={ItemSeparatorComponent}></FlatList>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* ADD CART */}
      <View style={styles.viewAddCart}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/img/icon/chat.png')}
              style={{width: 30, height: 30}}></Image>
            <Text style={styles.txt_label}>Chat</Text>
          </TouchableOpacity>
        </View>
        <BtnCart
          text="Mua ngay"
          style={{backgroundColor: Colors.orange}}
          color="white"></BtnCart>
        <BtnCart
          text="Thêm vào giỏ"
          style={{borderColor: Colors.cyan, borderWidth: 1}}
          color={Colors.cyan}></BtnCart>
      </View>
    </View>
  );
}
