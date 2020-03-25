import React from 'react';
import {View} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';

const Header = () => {
  return (
    <View>
      <BackgroundEllipse />
      <Human />
      <Title />
      <Logo />
    </View>
  );
};

export default Header;
