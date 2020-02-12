import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>એગ્રીમાઈસીલ</Text>
      <Text style={styles.subtitle}>આણંદ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
    width: '60%',
  },
  title: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 40,
    textAlign: 'right',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
  subtitle: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
});
