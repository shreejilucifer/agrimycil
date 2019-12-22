import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import EllipseOne from '../../Images/ellipse.png';
import EllipseTwo from '../../Images/ellipse2.png';
import EllipseThree from '../../Images/ellipse3.png';

const BackgroundEllipse = ({type}) => {
  if (type === null || type === undefined) type = 1;

  if (type === 1)
    return (
      <View>
        <Image source={EllipseOne} style={styles.ellipseOne} />
      </View>
    );
  else if (type === 2)
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
  ellipseOne: {
    marginTop: -120,
    marginLeft: -100,
    width: '150%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
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
