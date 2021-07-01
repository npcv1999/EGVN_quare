import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Colors from '../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default function RenderItem() {
  const renderItem = ({item, index}) => (
    <View style={[styles.hotItem, {marginRight: 5}]}>
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

  const ItemSeparatorComponent = () => <View style={{height: 5}}></View>;

  return {renderItem, ItemSeparatorComponent};
}

const styles = StyleSheet.create({
  hotItem: {
    width: W / 3 - 6,
    alignItems: 'center',
    marginBottom: 1,
    borderWidth: 1,
    borderColor: Colors.bgLightGray,
  },
  info: {height: 40, justifyContent: 'center'},
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    backgroundColor: Colors.bgLightGray,
    width: '100%',
  },
  txtRate: {
    fontSize: 8,
    fontStyle: 'italic',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 9,
    textDecorationLine: 'line-through',
  },
  txtSale: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.orange,
  },
});
