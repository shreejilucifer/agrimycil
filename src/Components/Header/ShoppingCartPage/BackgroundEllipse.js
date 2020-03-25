import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import EllipseThree from '../../../Images/ellipse3.png';

const BackgroundEllipse = () => {
  return (
    <View>
      <Image source={EllipseThree} style={styles.ellipseThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseThree: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: -170,
    marginTop: -100,
  },
});

export default BackgroundEllipse;
