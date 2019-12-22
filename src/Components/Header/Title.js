import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({type}) {
  if (type === null || type === undefined) type = 1;

  if (type === 1)
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>એગ્રીમાઈસીલ</Text>
        <Text style={styles.subtitle}>આણંદ</Text>
      </View>
    );
  else if (type === 2)
    return (
      <View style={styles.titleContainerTwo}>
        <Text style={styles.titleTwo}>
          નીચે આપેલા પાક માં થી તમારા પાક પસંદ કરો
        </Text>
      </View>
    );
  else if (type === 3)
    return (
      <View style={styles.titleContainerThree}>
        <Text style={styles.titleThree}>એગ્રીમાઈસીલ</Text>
        <Text style={styles.subtitleThree}>આણંદ</Text>
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
  titleContainerTwo: {
    flex: 1,
    paddingTop: 50,
    width: '50%',
  },
  titleTwo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
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
