import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const CartItem = ({productName, productImage, productPrice}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <LinearGradient
      colors={['#7AD13F', '#FAF954']}
      start={{x: 0, y: 0.5}}
      end={{x: 0, y: 1}}
      style={styles.productWrapper}>
      <View style={styles.leftWrapper}>
        <Image source={productImage} style={styles.productImage} />
        <Text style={styles.productName}>
          {productName} ₹{productPrice} x
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <View style={styles.triangleContainer}>
          <TouchableOpacity
            onLongPress={() => setQuantity(quantity + 50)}
            onPress={() => setQuantity(quantity + 1)}>
            <View style={styles.triangleUp} />
          </TouchableOpacity>
          <TouchableOpacity
            onLongPress={() => setQuantity(quantity - 50)}
            onPress={() => setQuantity(quantity - 1)}>
            <View style={styles.triangleDown} />
          </TouchableOpacity>
        </View>
        <View style={styles.productQuantityIn}>
          <Text style={styles.productQuantity}>{quantity}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 2,
    borderRadius: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },
  rightWrapper: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  productImage: {
    height: 40,
    width: 40,
  },
  productName: {
    width: '95%',
    fontSize: 20,
    color: '#E6355F',
    textAlign: 'right',
  },
  productQuantityIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 2,
    backgroundColor: '#fff',
  },
  productQuantity: {
    fontSize: 20,
    color: '#E6355F',
  },
  triangleContainer: {
    height: 50,
    width: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    transform: [{rotate: '180deg'}],
  },
});
