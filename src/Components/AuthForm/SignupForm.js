import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {withRouter} from 'react-router-native';

const SignupForm = ({history}) => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [otpView, setOtpView] = useState(false);

  const onSignupSubmit = (mobile, name, otp) => {
    console.log(mobile, name, otp);
    history.push('/crop-selection');
  };

  if (!otpView)
    return (
      <View style={styles.signupFormContainer}>
        <Text style={styles.label}>તમારો મોબાઈલ નંબર નીચે લખો: </Text>
        <TextInput
          maxLength={10}
          placeholder={'૯૮૨૫૬૪૭૨૪૭'}
          keyboardType={'phone-pad'}
          style={styles.loginContainer}
          onChangeText={text => setMobile(text)}
        />
        <Text style={[styles.label, {marginTop: 10}]}>તમારૂ નામ લખો:</Text>
        <TextInput
          placeholder={'શ્રીજી પેઢાડીયા'}
          keyboardType={'default'}
          style={styles.loginContainer}
          onChangeText={text => setName(text)}
        />
        <TouchableOpacity
          onPress={() => setOtpView(true)}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ઓટીપી મેળવો</Text>
        </TouchableOpacity>
      </View>
    );
  else
    return (
      <View style={styles.signupFormContainer}>
        <Text style={styles.label}>એસ. એમ. એસ. માં આવેલ ઓટીપી લખો:</Text>
        <TextInput
          maxLength={4}
          placeholder={'૯૯૯૯'}
          keyboardType={'phone-pad'}
          style={styles.loginContainer}
          onChangeText={text => setOtp(text)}
        />
        <TouchableOpacity
          onPress={() => onSignupSubmit(mobile, name, otp)}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>સાઈન અપ</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  signupFormContainer: {
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

export default withRouter(SignupForm);
