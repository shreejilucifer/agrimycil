import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import arrow from '../../Images/arrow.png';

const DashboardCard = ({history, gradient, link, title, img, imgstyle}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => history.push(link)}>
      <LinearGradient
        colors={gradient.colors}
        start={gradient.start}
        end={gradient.end}
        style={styles.container}>
        <View style={{width: '75%'}}>
          <Text style={styles.title}>{title}</Text>
          <Image source={arrow} style={styles.arrow} />
        </View>
        <View
          style={[
            {
              width: '25%',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            },
            imgstyle,
          ]}>
          <Image source={img} style={styles.image} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 100,
    borderRadius: 15,
    elevation: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 6,
  },
  arrow: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default withRouter(DashboardCard);
