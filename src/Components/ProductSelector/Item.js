import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function Item({image, name}) {
  return (
    <View style={styles.itemContainer}>
      <Image
        resizeMode={'contain'}
        overflow={'hidden'}
        style={styles.cropImage}
        source={{
          uri: image,
        }}
      />
      <View
        style={{
          backgroundColor: '#E6355F',
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
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
    borderWidth: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    elevation: 2,
  },
  cropImage: {
    height: 100,
    width: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
  },
});
export default Item;
