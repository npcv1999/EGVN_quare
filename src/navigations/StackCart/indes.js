import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../../screens/cart';
import AddressCart from '../../screens/cart/AddressCart';
import CheckOut from '../../screens/cart/CheckOut';
import ROUTES from '../Routes';

const Stack = createStackNavigator();

const StackCart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CART} component={Cart} />
      <Stack.Screen name={ROUTES.ADDRESSCART} component={AddressCart} />
      <Stack.Screen name={ROUTES.CHECKOUT} component={CheckOut} />
    </Stack.Navigator>
  );
};

export default StackCart;
