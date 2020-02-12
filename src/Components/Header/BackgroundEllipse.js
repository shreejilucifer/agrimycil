import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import EllipseTwo from '../../Images/ellipse2.png';
import EllipseThree from '../../Images/ellipse3.png';

const BackgroundEllipse = ({type}) => {
  if (type === 2)
    return (
      <View>
        <Image source={EllipseTwo} style={styles.ellipseTwo} />
      </View>
    );
  else if (type === 3)
    return (
      <View>
        <Image source={EllipseThree} style={styles.ellipseThree} />
      </View>
    );
};

const styles = StyleSheet.create({
  ellipseTwo: {
    marginLeft: -50,
    marginTop: -50,
    position: 'absolute',
  },
  ellipseThree: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: -70,
    marginTop: -100,
  },
});

export default BackgroundEllipse;
