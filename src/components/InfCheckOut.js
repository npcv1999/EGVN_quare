import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function InfCheckOut({font, label, price}) {
  return (
    <View style={{flexDirection: 'row', marginVertical: 2}}>
      <Text style={styles.Label}>{label}</Text>
      <Text style={[styles.Price, font]}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Label: {
    flex: 0.5,
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#777676',
  },
  Price: {
    flex: 0.5,
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#777676',
  },
});
