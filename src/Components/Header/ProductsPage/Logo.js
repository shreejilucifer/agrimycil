import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from '../../../Images/logo.png';

const Logo = ({type}) => {
  return (
    <View style={styles.logoContainer2}>
      <Image source={logo} style={styles.logo2} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer2: {
    position: 'absolute',
    left: 0,
    marginTop: 10,
  },
  logo2: {
    height: 150,
    width: 150,
  },
});

export default Logo;
