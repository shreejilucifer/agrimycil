import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import BackgroundEllipse from './BackgroundEllipse';
import logo from '../../../Images/logo.png';
import backarrow from '../../../Images/backarrow.png';

const Header = ({history, image, productName}) => {
  return (
    <View>
      <BackgroundEllipse />
      <View style={styles.titleContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{productName}</Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: 20,
        }}
        onPress={() => history.goBack()}>
        <Image source={backarrow} style={{marginRight: 10}} />
        <Text style={styles.backBtn}>પાછળ</Text>
      </TouchableOpacity>
      <View style={styles.humanContainer}>
        <Image source={image} />
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  humanContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: 40,
    marginRight: 30,
  },
  seperator: {
    height: 2,
    width: '85%',
    backgroundColor: '#C3C3C3',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    marginTop: 230,
    elevation: 3,
  },
  titleContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    width: '45%',
  },
  title: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
  backBtn: {
    color: '#3B76F6',
    fontSize: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Header;
