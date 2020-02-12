import React from 'react';
import {View, Text} from 'react-native';
import BackgroundEllipse from './BackgroundEllipse';
import Title from './Title';
import Human from './Human';
import Logo from './Logo';
import DashboardTitle from './DashboardTitle';

const Header = ({type}) => {
  if (type === 3)
    return (
      <View style={{zIndex: -1}}>
        <BackgroundEllipse type={3} />
        <Human type={3} />
        <Title type={3} />
        <Logo type={2} />
        <DashboardTitle text="કેમ છો ! શ્રીજી… એગ્રીમાઇસીલ મા તમારૂ સ્વાગત છે 😊" />
      </View>
    );
  else if (type === 4)
    return (
      <View style={{zIndex: -1}}>
        <BackgroundEllipse type={3} />
        <Human type={4} />
        <Title type={3} />
        <Logo type={2} />
        <DashboardTitle
          text="અમારી ઉત્પાદનો 🛒"
          textStyle={{width: '100%'}}
          back
        />
      </View>
    );
};

export default Header;
