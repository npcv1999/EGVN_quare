import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function SocialIcon({color, name, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.Icon, {backgroundColor: color}]}>
        <FontAwesome name={name} size={15} color="white"></FontAwesome>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
