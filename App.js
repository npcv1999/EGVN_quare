/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StatusBar} from 'react-native';
import Colors from './src/assets/colors/Colors';
import BottomTabMain from './src/navigations/BottomTab';

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={Colors.cyan} />
      <BottomTabMain></BottomTabMain>
    </>
  );
};

export default App;
