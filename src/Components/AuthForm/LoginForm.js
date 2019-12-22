import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.label}>તમારો મોબાઈલ નંબર નીચે લખો: </Text>
      <TextInput
        maxLength={10}
        placeholder={'૯૮૨૫૬૪૭૨૪૭'}
        keyboardType={'phone-pad'}
        style={styles.loginContainer}
        onChangeText={text => setMobile(text)}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>લોગ ઈન</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  label: {
    color: '#fff',
    fontSize: 20,
  },
  loginContainer: {
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 3,
    fontSize: 20,
    paddingLeft: 20,
    borderColor: '#E6355F',
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {width: 0, height: 3},
  },
  loginButton: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7AD13F',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default LoginForm;
