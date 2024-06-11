import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import CarouselPage from '../components/Carousel';
import ButtonCategaries from '../components/ButtonCategories';
import ImageSlider from '../components/ImageSlider';
import dataIfo from '../data/dataIfo.json'




const AccueilPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <CarouselPage />
      <Categories />
      <ButtonCategaries />
      <ImageSlider listings={dataIfo}/>
    </ScrollView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../assets/images/Logo Ket Ket Blanc 2.png')} style={styles.logo} />
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>
        <Link href="/login" style={styles.buttonText}>Login</Link>
      </Text>
    </TouchableOpacity>
  </View>
);

const Categories = () => (
  <View style={styles.categories}>
    <View style={styles.titles}>
      <Text style={styles.title}>Our partner structure</Text>
      <Text style={styles.title2}>See All</Text>
    </View>
    <View style={styles.category}>
      <CategoryItem source={require('../assets/images/spa.jpg')} />
      <CategoryItem source={require('../assets/images/logoGalsen.jpg')} />
      <CategoryItem source={require('../assets/images/tennis.jpg')} />
      <CategoryItem source={require('../assets/images/natation1.jpg')} />
    </View>
  </View>
);

const CategoryItem = ({ source }) => (
  <View style={styles.categoryItem}>
    <Image source={source} style={styles.categoryImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 30,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  logo: {
    width: 130,
    height: 40,
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: 70,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categories: {
    marginBottom: 10
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 15,
    // elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerTwo: {
    marginBottom: 20,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 10,
    // elevation: 3,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 40,
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    // elevation: 3,
  },
  buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titles: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  title2: {
    fontSize: 16,
    fontWeight: 'semibold',
  }
});

export default AccueilPage;
