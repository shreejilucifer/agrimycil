import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import Header from '../Components/Header/index';
import AuthForm from '../Components/AuthForm/index';
import Footer from '../Components/Footer/index';

const LoginPage = () => {
  return (
    <KeyboardAvoidingView
      behavior={'position'}
      style={{flex: 1}}
      contentContainerStyle={{flex: 1}}>
      <Header />
      <AuthForm />
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
