import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import buybtn from '../../Images/buybtn.png';

export const Data = ({data}) => {
  return (
    <ScrollView style={styles.dataContainer}>
      <Text style={styles.dataTitle}>માહિતી</Text>
      <Text style={styles.dataContent}>{data}</Text>
    </ScrollView>
  );
};

export const BuyButton = ({history}) => {
  return (
    <LinearGradient
      colors={['#E6355F', '#FAF954']}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 1}}
      style={styles.buyButtonContainer}>
      <TouchableOpacity
        onPress={() => history.push('/shopping-cart')}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.buynow}>ખરીદો</Text>
        <View style={styles.buybtnContainer}>
          <Image source={buybtn} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    height: 350,
    marginTop: 220,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 20,
  },
  dataContent: {
    marginTop: 10,
    textAlign: 'justify',
  },
  buyButtonContainer: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopLeftRadius: 100,
  },
  buynow: {
    fontSize: 30,
    marginRight: 10,
    color: '#fff',
  },
  buybtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FAF954',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
