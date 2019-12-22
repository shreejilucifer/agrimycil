import React from 'react';
import {StyleSheet} from 'react-native';
import Header from '../Components/Header/index';
import CropSelector from '../Components/CropSelector/index';
import Footer from '../Components/Footer/index';
import LinearGradient from 'react-native-linear-gradient';

const CropSelection = () => {
  return (
    <LinearGradient
      colors={['#3B76F6', '#7AD13F']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <Header type={2} />
      <CropSelector />
      <Footer type={2} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CropSelection;
