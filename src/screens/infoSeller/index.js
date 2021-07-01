import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import TabShop from '../../navigations/TopTab/TabShop';

import styles from './style';

const InfoSeller = ({count = 103}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            alignItems: 'center',
          }}>
          <View style={{flex: 3}}>
            <Image
              style={{width: 70, height: 70, borderRadius: 35}}
              source={require('../../assets/img/jbl.png')}></Image>
          </View>

          <View style={{flex: 7}}>
            {/* NAME SHOP */}
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.txtWhite]}>CỬA HÀNG ABC</Text>
              <TouchableOpacity style={styles.btnShop}>
                <Text style={[styles.txtWhite]}>CHAT</Text>
              </TouchableOpacity>
            </View>

            {/* FOLLOW */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.txtWhite]}>{count} Theo dõi</Text>
              <TouchableOpacity style={styles.btnShop}>
                <Text style={[styles.txtWhite]}>Theo dõi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Top tab */}
      <View style={{flex: 1}}>
        <TabShop></TabShop>
      </View>

      {/* BODY */}
      <View></View>
    </View>
  );
};

export default InfoSeller;
