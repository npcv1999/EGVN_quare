import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import RenderItem from '../components/RenderItem';

export default function FlatListProd({data}) {
  const {renderItem, ItemSeparatorComponent} = RenderItem();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 10, alignItems: 'center'},
});
