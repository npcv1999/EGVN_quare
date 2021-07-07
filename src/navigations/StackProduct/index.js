import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import DetailProd from '../../screens/detailProd';
import {ROUTES} from '../Routes';
import Colors from '../../assets/colors/Colors';

const Stack = createStackNavigator();

const StackHomeProd = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.cyan},
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.DETAIL}
        component={DetailProd}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default StackHomeProd;
