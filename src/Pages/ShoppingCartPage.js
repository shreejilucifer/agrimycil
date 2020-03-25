import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {withRouter} from 'react-router-native';
import Header from '../Components/Header/ShoppingCartPage/index';
import {CartItem} from '../Components/ShoppingCart/index';

import trichomeal from '../Images/trichomeal.png';
import PaymentFooter from '../Components/ShoppingCart/PaymentFooter';

const ShoppingCartPage = ({history}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.productsContainer}>
        <CartItem
          productImage={trichomeal}
          productPrice={300}
          productName="ટ્રાઈકોમીલ"
        />
        <CartItem
          productImage={trichomeal}
          productPrice={250}
          productName="પેસીલોમાયસીલ"
        />
        <CartItem
          productImage={trichomeal}
          productPrice={250}
          productName="પેસીલોમાયસીલ"
        />
        <CartItem
          productImage={trichomeal}
          productPrice={250}
          productName="પેસીલોમાયસીલ"
        />
        <CartItem
          productImage={trichomeal}
          productPrice={250}
          productName="પેસીલોમાયસીલ"
        />
      </ScrollView>
      <PaymentFooter totalAmount={300} history={history} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsContainer: {
    maxHeight: 350,
    marginTop: 250,
    marginRight: 25,
    marginLeft: 25,
  },
});

export default withRouter(ShoppingCartPage);
