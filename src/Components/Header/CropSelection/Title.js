import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title() {
  return (
    <View style={styles.titleContainerTwo}>
      <Text style={styles.titleTwo}>
        નીચે આપેલા પાક માં થી તમારા પાક પસંદ કરો
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
