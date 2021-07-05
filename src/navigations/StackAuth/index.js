import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login';
import Register from '../../screens/register';
import ROUTES from '../Routes';

const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGIST} component={Register} />
    </Stack.Navigator>
  );
};

export default StackAuth;
