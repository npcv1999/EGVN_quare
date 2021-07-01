import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CyanHeader from '../../components/CyanHeader';
import styles from './style';

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
  {
    id: 10,
    title: '',
    logo: require('../../assets/img/cate/10.png'),
  },
];

export default function Home() {
  // const renderItem = ({item}) => (
  //   <>
  //     <TouchableOpacity>
  //       <Image source={item.logo} style={styles.imgCate}></Image>

  //       <Text>{item.title}</Text>
  //     </TouchableOpacity>
  //   </>
  // );

  return (
    <>
      <View style={styles.container}>
        <CyanHeader></CyanHeader>
        <View style={styles.viewHome}>
          <View style={styles.searchBar}>
            <TextInput
              style={{backgroundColor: 'white', borderRadius: 5}}
              placeholder="Search"></TextInput>
          </View>

          <ScrollView style={styles.bodyHome}>
            <View style={styles.viewPadding}>
              <View style={styles.banner}>
                <Image
                  source={require('../../assets/img/slider1.png')}
                  style={{width: '100%', height: 170}}
                  resizeMode="contain"></Image>
              </View>

              <View style={styles.category}>
                {cate.map((value, index) => (
                  <View style={styles.itemCate} key={index}>
                    <TouchableOpacity>
                      <Image source={value.logo} style={styles.imgCate}></Image>
                    </TouchableOpacity>

                    <Text style={styles.txtCate}>{value.title}</Text>
                  </View>
                ))}
              </View>

              <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>CÁC SẢN PHẨM BÁN CHẠY</Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 15,
                    }}
                    resizeMode="contain"
                    source={require('../../assets/logo/title.png')}></Image>
                </View>

                <ScrollView
                  horizontal={true}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    flex: 1,
                  }}>
                  <View style={styles.viewHot}>
                    {cate.map((value, index) => (
                      <View style={styles.hotItem} key={index}>
                        <TouchableOpacity>
                          <Image
                            style={{
                              flexDirection: 'column',
                              width: 110,
                              height: 100,
                            }}
                            source={value.logo}
                            resizeMode="cover"></Image>
                        </TouchableOpacity>

                        <View style={styles.info}>
                          <Text style={styles.txtCate}>{value.name}</Text>
                        </View>

                        <View style={styles.price}>
                          <View>
                            <Text style={styles.txtPrice}>1.500.000đ</Text>
                          </View>

                          <Text style={styles.txtSale}>1.500.000đ</Text>
                        </View>

                        <View style={styles.rate}>
                          <View style={{flexDirection: 'row'}}>
                            <AntDesign
                              name="star"
                              size={8}
                              color={Colors.star}></AntDesign>
                            <AntDesign
                              name="star"
                              size={8}
                              color={Colors.star}></AntDesign>
                            <AntDesign
                              name="star"
                              size={8}
                              color={Colors.star}></AntDesign>
                            <AntDesign
                              name="star"
                              size={8}
                              color={Colors.star}></AntDesign>
                            <AntDesign
                              name="star"
                              size={8}
                              color={Colors.star}></AntDesign>
                          </View>

                          <Text style={styles.txtRate}>120 lượt xem</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={styles.header}></View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
