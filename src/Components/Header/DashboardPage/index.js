import React from 'react';
import {View} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';
import DashboardTitle from './DashboardTitle';

const Header = () => {
  return (
    <View style={{zIndex: -1}}>
      <BackgroundEllipse />
      <Human />
      <Title />
      <Logo />
      <DashboardTitle text="કેમ છો ! શ્રીજી… એગ્રીમાઇસીલ મા તમારૂ સ્વાગત છે 😊" />
    </View>
  );
};

export default Header;
