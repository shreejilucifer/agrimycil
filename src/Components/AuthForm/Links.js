import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

const Links = () => {
  return (
    <View style={styles.container}>
      <Link to="/privacypolicy" style={styles.linkContainer}>
        <Text style={styles.linkText}>પ્રાઈવસી પોલિસી </Text>
      </Link>
      <Link to="/aboutus" style={styles.linkContainer}>
        <Text style={styles.linkText}>અમારી વિષે</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#fff',
  },
});

export default Links;
