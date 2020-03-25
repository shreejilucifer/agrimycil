import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import EllipseTwo from '../../../Images/ellipse2.png';

const BackgroundEllipse = () => {
  return (
    <View>
      <Image source={EllipseTwo} style={styles.ellipseTwo} />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseTwo: {
    marginLeft: -50,
    marginTop: -50,
    position: 'absolute',
  },
});

export default BackgroundEllipse;
