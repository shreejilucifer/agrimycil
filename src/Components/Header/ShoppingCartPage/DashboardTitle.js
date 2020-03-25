import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {withRouter} from 'react-router-native';
import backarrow from '../../../Images/backarrow.png';
import cart from '../../../Images/cart.png';

const DashboardTitle = ({history, text, textStyle, back}) => {
  return (
    <React.Fragment>
      {back ? (
        <View style={styles.controlsContainer}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => history.goBack()}>
            <Image source={backarrow} style={{marginRight: 10}} />
            <Text style={styles.backBtn}>પાછળ</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.container}>
        <Text style={styles.title}>શોપિંગ કાર્ટ</Text>
        <Image source={cart} />
      </View>
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
    marginTop: 70,
    paddingLeft: 30,
  },
  title: {
    width: '100%',
    fontSize: 35,
  },
  seperator: {
    height: 2,
    width: '85%',
    backgroundColor: '#C3C3C3',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    marginTop: 270,
    elevation: 3,
  },
  controlsContainer: {
    marginTop: 20,
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
