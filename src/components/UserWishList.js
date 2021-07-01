import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function UserWishList({count, label}) {
  return (
    <View style={{alignItems: 'center', width: 90}}>
      <Text style={styles.font}>{count}</Text>
      <Text style={styles.font}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
});
