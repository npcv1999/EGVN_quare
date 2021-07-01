import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabCate from '../../ProdCate/TabCate';
import HotProd from '../../ProdCate/HotProd';
import Colors from '../../../assets/colors/Colors';

const Tab = createMaterialTopTabNavigator();

const LABEL = {
  sanpham: 'Sanpham',
  hosocuahang: 'Hoso',
};

const TopTabShop = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HotProd"
        tabBarOptions={{
          style: {
            backgroundColor: Colors.cyan,
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          labelStyle: {color: '#fff'},
          indicatorStyle: {
            backgroundColor: '#fff',
            width: 100,
            marginHorizontal: 50,
          },
        }}>
        <Tab.Screen
          name={LABEL.sanpham}
          component={TabCate}
          options={{title: 'Sản phẩm'}}
        />
        <Tab.Screen
          name={LABEL.hosocuahang}
          component={HotProd}
          options={{title: 'Hồ sơ cửa hàng'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabShop;
