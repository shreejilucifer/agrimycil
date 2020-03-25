import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../Components/Header/ProductsPage/index';
import ProductSelector from '../Components/ProductSelector/index';

const ProductsPage = () => {
  return (
    <View style={styles.container}>
      <Header />
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
