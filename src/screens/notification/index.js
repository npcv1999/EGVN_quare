import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import styles from './style';
import img from '../../assets/img';

const data = [
  {
    id: 1,
    payload: 'Quare là một hệ thống thương mại điện tử',
    data: 'Với phương châm hoạt động “Tất cả vì Khách Hàng”, Quare.vn luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm…',
  },
  {
    id: 2,
    payload: 'Quare là một hệ thống thương mại điện tử',
    data: 'Với phương châm hoạt động “Tất cả vì Khách Hàng”, Quare.vn luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm…',
  },
  {
    id: 3,
    payload: 'Quare là một hệ thống thương mại điện tử',
    data: 'Với phương châm hoạt động “Tất cả vì Khách Hàng”, Quare.vn luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm…',
  },
  {
    id: 4,
    payload: 'Quare là một hệ thống thương mại điện tử',
    data: 'Với phương châm hoạt động “Tất cả vì Khách Hàng”, Quare.vn luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm…',
  },
  {
    id: 5,
    payload: 'Quare là một hệ thống thương mại điện tử ',
    data: 'Với phương châm hoạt động “Tất cả vì Khách Hàng”, Quare.vn luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm…',
  },
];

const Notification = () => {
  const renderItem = ({item}) => (
    <View style={styles.vwItem}>
      <View style={styles.vwLabel}>
        <Image
          resizeMode="contain"
          style={{width: 25, height: 25, marginRight: 10}}
          source={img.info}></Image>
        <View style={{flex: 1}}>
          <Text style={styles.txtLabel}>{item.payload}</Text>
          <Text style={styles.txtMess}>{item.data}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Thông báo</Text>
      </View>
      <FlatList data={data} renderItem={renderItem}></FlatList>
    </View>
  );
};

export default Notification;
