import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ViewPolicy({source, label}) {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
      <Image
        source={source}
        style={{width: 30, height: 30, marginRight: 15}}
        resizeMode="contain"></Image>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'normal',
          fontStyle: 'normal',
          textAlign: 'left',
          color: '#777676',
        }}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
