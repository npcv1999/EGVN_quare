import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Cart from '../../screens/cart';
import Profile from '../../screens/user';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/colors/Colors';
import Notification from '../../screens/notification';

const Tab = createBottomTabNavigator();

const NAME = {
  home: 'Trang chủ',
  notification: 'Thông báo',
  cart: 'Giỏ hàng',
  user: 'Tài khoản',
};

const BottomTabMain = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.cyan,
          tabStyle: {paddingVertical: 5},
          style: {height: 60},
        }}>
        <Tab.Screen
          name={NAME.home}
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAME.notification}
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcon
                name="bell-ring-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={NAME.cart}
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="shoppingcart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAME.user}
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabMain;
