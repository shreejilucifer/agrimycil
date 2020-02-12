import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import EllipseOne from '../../../Images/ellipse.png';

const BackgroundEllipse = () => {
  return (
    <View>
      <Image source={EllipseOne} style={styles.ellipseOne} />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseOne: {
    marginTop: -120,
    marginLeft: -100,
    width: '150%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default BackgroundEllipse;
