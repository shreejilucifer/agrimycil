import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import ManTwo from '../../../Images/man2.js';

const Human = () => {
  return (
    <View style={styles.humanContainer}>
      <ManTwo />
    </View>
  );
};

const styles = StyleSheet.create({
  humanContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: 20,
    marginRight: 30,
  },
});

export default Human;
