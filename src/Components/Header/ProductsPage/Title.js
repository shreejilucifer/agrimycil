import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title() {
  return (
    <View style={styles.titleContainerThree}>
      <Text style={styles.titleThree}>એગ્રીમાઈસીલ</Text>
      <Text style={styles.subtitleThree}>આણંદ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainerThree: {
    position: 'absolute',
    alignSelf: 'flex-end',
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    width: '65%',
  },
  titleThree: {
    color: '#fff',
    fontSize: 25,
  },
  subtitleThree: {
    color: '#fff',
    fontSize: 15,
  },
});
