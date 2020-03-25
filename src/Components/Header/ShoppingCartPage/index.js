import React from 'react';
import {View} from 'react-native';

import BackgroundEllipse from './BackgroundEllipse';
import Human from './Human';

import DashboardTitle from './DashboardTitle';

const Header = () => {
  return (
    <View style={{zIndex: -1}}>
      <BackgroundEllipse />
      <Human />
      <DashboardTitle back />
    </View>
  );
};

export default Header;
