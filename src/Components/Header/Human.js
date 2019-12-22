import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import ManOne from '../../Images/man1.png';
import ManTwo from '../../Images/man2.png';
import ManThree from '../../Images/man3.png';

const Human = ({type}) => {
  return (
    <View style={styles.humanContainer}>
      {type === 1 ? <Image source={ManOne} style={styles.human} /> : null}
      {type === 2 ? <Image source={ManTwo} style={styles.human} /> : null}
      {type === 3 ? <Image source={ManThree} style={styles.human} /> : null}
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
