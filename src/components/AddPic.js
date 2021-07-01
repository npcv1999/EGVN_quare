import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AddPic() {
  return (
    <View style={styles.vwPic}>
      <TouchableOpacity>
        <View style={styles.Pic}>
          <AntDesign name="plus" size={15} color={Colors.cyan}></AntDesign>
        </View>
      </TouchableOpacity>

      <Text style={styles.txtPic}>Hình ảnh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  vwPic: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  Pic: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.cyan,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPic: {
    opacity: 0.6,
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',

    textAlign: 'center',
    color: Colors.labelGray,
  },
});
