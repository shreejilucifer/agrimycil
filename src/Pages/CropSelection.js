import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Components/Header/index';
import CropSelector from '../Components/CropSelector/index';
import Footer from '../Components/Footer/index';

const CropSelection = () => {
  return (
    <View style={styles.container}>
      <Header type={2} />
      <CropSelector />
      <Footer type={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CropSelection;
