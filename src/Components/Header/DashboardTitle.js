import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {withRouter} from 'react-router-native';
import BackArrow from '../../Images/backarrow.js';

const DashboardTitle = ({history, text, textStyle, back}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={[styles.title, textStyle]}>{text}</Text>
      </View>
      {back ? (
        <View style={styles.controlsContainer}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => history.goBack()}>
            <BackArrow />
            <Text style={styles.backBtn}>પાછળ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => history.push('/shopping-cart')}>
            <Text style={styles.backBtn}>શોપિંગ કાર્ટ</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.seperator}></View>
    </React.Fragment>
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
  controlsContainer: {
    marginTop: 220,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  backBtn: {
    color: '#3B76F6',
    fontSize: 15,
  },
});

export default withRouter(DashboardTitle);
