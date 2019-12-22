import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Links from './Links';

const AuthForm = () => {
  const [activeTab, setactiveTab] = useState(1);

  return (
    <LinearGradient
      colors={['#7AD13F', '#3B76F6']}
      start={{x: 0.1, y: 0.4}}
      end={{x: 0.3, y: 1}}
      style={styles.formContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setactiveTab(1)}
          style={
            activeTab === 1
              ? [
                  styles.tabs,
                  {
                    borderTopLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    backgroundColor: '#E6355F',
                  },
                ]
              : [styles.tabs, {borderBottomRightRadius: 15}]
          }>
          <Text style={styles.tabText}>જુના મેમ્બર</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setactiveTab(2)}
          style={
            activeTab === 2
              ? [
                  styles.tabs,
                  {
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    backgroundColor: '#E6355F',
                  },
                ]
              : [styles.tabs, {borderBottomLeftRadius: 15}]
          }>
          <Text style={styles.tabText}>નવા મેમ્બર</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 1 ? <LoginForm /> : <SignupForm />}

      <Links />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 300,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#7AD13F',
    borderRadius: 15,
    elevation: 3,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'transparent',
  },
  tabs: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
});

export default AuthForm;
