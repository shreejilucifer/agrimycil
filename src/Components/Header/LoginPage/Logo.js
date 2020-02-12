import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from '../../../Images/logo.png';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    left: 0,
    marginTop: 150,
  },
});

export default Logo;
