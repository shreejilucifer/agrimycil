import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Tick from './Tick';

function Item({image, name, tick}) {
  return (
    <View style={styles.itemContainer}>
      {tick === true ? <Tick /> : null}
      <Image
        resizeMode={'cover'}
        overflow={'hidden'}
        style={styles.cropImage}
        source={{
          uri: image,
        }}
      />
      <View
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 150,
    width: 150,
    marginBottom: 20,
    borderRadius: 20,
    padding: 2,
    backgroundColor: '#FAF954',
    alignItems: 'center',
  },
  cropImage: {
    height: 100,
    width: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    color: '#000',
    fontSize: 20,
  },
});
export default Item;
