import React from 'react';
import {View, StyleSheet} from 'react-native';

import Man3 from '../../../Images/man3';

const Human = () => {
  return (
    <View style={styles.humanContainer}>
      <Man3 />
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
