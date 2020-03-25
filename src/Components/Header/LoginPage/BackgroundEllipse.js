import React from 'react';
import {StyleSheet, View} from 'react-native';

import Ellipseone from '../../../Images/ellipse';

const BackgroundEllipse = () => {
  return (
    <View>
      <Ellipseone style={styles.ellipse} />
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
  ellipse: {
    marginTop: -110,
    marginLeft: -30,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default BackgroundEllipse;
