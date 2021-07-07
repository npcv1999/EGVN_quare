import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Cart from '../../screens/cart';
import AddressCart from '../../screens/cart/AddressCart';
import CheckOut from '../../screens/cart/CheckOut';
import {ROUTES, TITLE} from '../Routes';
import Colors from '../../assets/colors/Colors';
import PaySuccess from '../../screens/PaySuccess';

const Stack = createStackNavigator();

const StackCart = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {backgroundColor: Colors.cyan},
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name={ROUTES.CART}
        component={Cart}
        options={{title: TITLE.CART}}
      />
      <Stack.Screen
        name={ROUTES.ADDRESSCART}
        component={AddressCart}
        options={{title: TITLE.ADDRESSCART}}
      />
      <Stack.Screen
        name={ROUTES.CHECKOUT}
        component={CheckOut}
        options={{title: TITLE.CHECKOUT}}
      />
      <Stack.Screen
        name={ROUTES.SUCCESS}
        component={PaySuccess}
        options={{title: TITLE.SUCCESS}}
      />
    </Stack.Navigator>
  );
};

export default StackCart;
