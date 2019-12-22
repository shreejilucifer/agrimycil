import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from '../../Images/logo.png';

const Logo = ({type}) => {
  if (type === undefined || type === null) type = 1;

  if (type === 1)
    return (
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    );

  if (type === 2)
    return (
      <View style={styles.logoContainer2}>
        <Image source={logo} style={styles.logo2} />
      </View>
    );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    left: 0,
    marginTop: 150,
  },
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
