import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import tick from '../../Images/tick.png';

const Tick = () => {
  return (
    <View style={styles.tickContainer}>
      <Image style={styles.tick} source={tick} />
    </View>
  );
};

const styles = StyleSheet.create({
  tickContainer: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    backgroundColor: '#FF0000',
    borderWidth: 3,
    borderColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {},
});

export default Tick;
