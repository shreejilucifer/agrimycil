import React from 'react';
import {View, Text} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';
import DashboardTitle from './DashboardTitle';

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
  else if (type === 3)
    return (
      <View style={{zIndex: -1}}>
        <BackgroundEllipse type={3} />
        <Human type={3} />
        <Title type={3} />
        <Logo type={2} />
        <DashboardTitle />
      </View>
    );
};

export default Header;
