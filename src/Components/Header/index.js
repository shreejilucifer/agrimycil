import React from 'react';
import {View} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';

const Header = ({type}) => {
  if (type === null || type === undefined) type = 1;
  if (type === 1)
    return (
      <View style={{zIndex: -1}}>
        <BackgroundEllipse type={1} />
        <Human type={1} />
        <Title />
        <Logo />
      </View>
    );
  else if (type === 2)
    return (
      <View style={{zIndex: -1}}>
        <BackgroundEllipse type={2} />
        <Human type={2} />
        <Title type={2} />
      </View>
    );
};

export default Header;
