import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Header from '../Components/Header/index';
import DashboardCard from '../Components/DashboardCard';

import products from '../Images/products.png';
import presentation from '../Images/presentation.png';
import questions from '../Images/questions.png';
import address from '../Images/address.png';

const DashboardPage = () => {
  return (
    <View style={styles.container}>
      <Header type={3} />
      <ScrollView style={styles.cardsContainer}>
        <DashboardCard
          gradient={{
            colors: ['#3B76F6', '#FAF954'],
            start: {x: 0.5, y: -0.5},
            end: {x: 0.6, y: 1.3},
          }}
          link="/products"
          title="અમારી ઉત્પાદનો"
          img={products}
        />
        <DashboardCard
          gradient={{
            colors: ['#E6355F', '#FAF954'],
            start: {x: 0.5, y: -0.5},
            end: {x: 0.6, y: 1.3},
          }}
          link="/videos-presentation"
          title="વીડિયો અને રજુઆતો"
          img={presentation}
          imgstyle={{paddingRight: 20, paddingBottom: 10}}
        />
        <DashboardCard
          gradient={{
            colors: ['#7AD13F', '#3B76F6'],
            start: {x: 0.5, y: -0.5},
            end: {x: 0.6, y: 1.3},
          }}
          link="/questions"
          title="અમને સવાલ પૂછો"
          img={questions}
          imgstyle={{paddingRight: 20, paddingBottom: 10}}
        />
        <DashboardCard
          gradient={{
            colors: ['#7AD13F', '#E6355F'],
            start: {x: 0.5, y: -0.5},
            end: {x: 0.6, y: 1.3},
          }}
          link="/address"
          title="અમારૂ સરનામું"
          img={address}
          imgstyle={{paddingRight: 20, paddingBottom: 10}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    marginTop: 280,
  },
});
export default DashboardPage;
