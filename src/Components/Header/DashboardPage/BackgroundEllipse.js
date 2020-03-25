import React from 'react';
import {StyleSheet, View} from 'react-native';

import EllipseThree from '../../../Images/ellipse3';

const BackgroundEllipse = () => {
  return (
    <View>
      <EllipseThree style={styles.ellipseThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseThree: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: -70,
    marginTop: -100,
  },
});

export default BackgroundEllipse;
