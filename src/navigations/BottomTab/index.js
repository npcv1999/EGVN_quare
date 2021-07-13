import React from 'react';

import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/colors/Colors';
import Notification from '../../screens/notification';
import StackAuth from '../StackAuth';
import StackCart from '../StackCart/indes';
import StackHomeProd from '../StackProduct';
import {ROUTES} from '../Routes';

const Tab = createBottomTabNavigator();

const NAME = {
  home: 'Trang chủ',
  notification: 'Thông báo',
  cart: 'Giỏ hàng',
  user: 'Tài khoản',
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  if (routeName === ROUTES.DETAIL) {
    return false;
  }

  return true;
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
          component={StackHomeProd}
          options={({route}) => ({
            tabBarVisible: getTabBarVisibility(route),
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          })}
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
          component={StackCart}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="shoppingcart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NAME.user}
          component={StackAuth}
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
