import React from 'react';
import {View} from 'react-native';

import BackgroundEllipse from './BackgroundEllipse';
import Human from './Human';
import Title from './Title';
import Logo from './Logo';
import DashboardTitle from './DashboardTitle';

const Header = () => {
  return (
    <View style={{zIndex: -1}}>
      <BackgroundEllipse />
      <Human />
      <Title />
      <Logo />
      <DashboardTitle
        text="અમારી ઉત્પાદનો 🛒"
        textStyle={{width: '100%'}}
        back
      />
    </View>
  );
};

export default Header;
