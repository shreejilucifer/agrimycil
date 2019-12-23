import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../Components/Header/index';
import ProductSelector from '../Components/ProductSelector/index';

const ProductsPage = () => {
  return (
    <View style={styles.container}>
      <Header type={4} />
      <ProductSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductsPage;
