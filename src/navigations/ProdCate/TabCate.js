import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HotProd from './HotProd';
import HighLightProd from './HighLightProd';
import NewProd from './NewProd';
import Colors from '../../assets/colors/Colors';

const Tab = createMaterialTopTabNavigator();

export default function TabCate() {
  return (
    <Tab.Navigator
      initialRouteName="Hot"
      tabBarOptions={{
        style: {backgroundColor: '#f7f5f6'},
        indicatorStyle: {
          backgroundColor: Colors.cyan,
        },
      }}>
      <Tab.Screen
        name="Hot"
        component={HotProd}
        options={{tabBarLabel: 'Bán chạy'}}
      />
      <Tab.Screen
        name="New"
        component={HotProd}
        options={{tabBarLabel: 'Mới về'}}
      />
      <Tab.Screen
        name="HightLight"
        component={HotProd}
        options={{tabBarLabel: 'Nổi bật'}}
      />
    </Tab.Navigator>
  );
}
