import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DashboardTitle = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          કેમ છો ! શ્રીજી… એગ્રીમાઇસીલ મા તમારૂ સ્વાગત છે 😊
        </Text>
      </View>
      <View style={styles.seperator}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 160,
    paddingLeft: 30,
  },
  title: {
    width: '50%',
    fontSize: 20,
  },
  seperator: {
    height: 2,
    width: '85%',
    backgroundColor: '#C3C3C3',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    marginTop: 260,
    elevation: 3,
  },
});

export default DashboardTitle;
