import React from 'react';
import {View, Text} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';

const Header = () => {
  return (
    <View style={{zIndex: -1}}>
      <BackgroundEllipse type={1} />
      <Human type={1} />
      <Title />
      <Logo />
    </View>
  );
};

export default Header;
