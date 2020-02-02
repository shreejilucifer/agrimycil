import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Keyboard} from 'react-native';
import ellipseone from '../../Images/ellipse.png';
import ellipsetwo from '../../Images/ellipse2.png';
import ellipsethree from '../../Images/ellipse3.png';
import ellipsefour from '../../Images/ellipse4.png';

const Footer = ({type}) => {
  if (type === null || type === undefined) type = 1;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (type === 1)
    return (
      <View style={styles.footerContainer}>
        {isKeyboardVisible ? null : (
          <Image source={ellipseone} style={styles.footer} />
        )}
      </View>
    );
  else if (type === 2)
    return (
      <View style={styles.footerContainerTwo}>
        {isKeyboardVisible ? null : (
          <Image source={ellipsetwo} style={styles.footer} />
        )}
      </View>
    );
  else if (type === 3)
    return (
      <View style={styles.footerContainerThree}>
        {isKeyboardVisible ? null : (
          <Image source={ellipsethree} style={styles.footerThree} />
        )}
      </View>
    );
  else if (type === 4)
    return (
      <View style={styles.footerContainerFour}>
        {isKeyboardVisible ? null : (
          <React.Fragment>
            <Image source={ellipsefour} style={styles.footerFour} />
          </React.Fragment>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    width: '150%',
    marginBottom: -200,
    marginLeft: -100,
  },
  footerContainerTwo: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
    marginBottom: -150,
    marginRight: -100,
  },
  footerContainerTwo: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
    marginBottom: -150,
    marginRight: -100,
  },
  footerThree: {
    zIndex: -1,
  },
  footerContainerFour: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
    marginBottom: -270,
    marginRight: -100,
  },
  footerFour: {
    zIndex: -1,
  },
});

export default Footer;
