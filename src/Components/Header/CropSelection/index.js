import React from 'react';
import {View, Text} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';

const Header = () => {
  return (
    <View style={{zIndex: -1}}>
      <BackgroundEllipse />
      <Human />
      <Title />
    </View>
  );
};

export default Header;
