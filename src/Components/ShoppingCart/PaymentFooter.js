import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PaymentFooter = ({history, totalAmount}) => {
  return (
    <LinearGradient
      colors={['#7AD13F', '#3B76F6']}
      start={{x: 0, y: 0.1}}
      end={{x: 0, y: 1}}
      style={styles.footerContainer}>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>ટોટલ રકમ: ₹{totalAmount}</Text>
      </View>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={styles.paymentBtn}
          onPress={() => console.log('Pay')}>
          <Text style={styles.pay}>પે</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  amountContainer: {
    width: '60%',
  },
  paymentContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontSize: 30,
    color: '#fff',
  },
  pay: {
    fontSize: 20,
  },
  paymentBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF954',
    width: '100%',
    elevation: 3,
    borderRadius: 15,
  },
});

export default PaymentFooter;
