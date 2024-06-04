// App.js
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Carousel />
      <Categories />
      <Activities />
    </ScrollView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../assets/images/natation2.jpg')} style={styles.logo} />
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
  </View>
);

const Carousel = () => (
  <View style={styles.carousel}>
    <Image source={require('../assets/images/natation2.jpg')} style={styles.carouselImage} />
  </View>
);

const Categories = () => (
  <View style={styles.categories}>
    <Text style={styles.title}>Our partner structure</Text>
    <ScrollView horizontal>
      <CategoryItem source={require('../assets/images/natation2.jpg')} label="All" />
      <CategoryItem source={require('../assets/images/natation2.jpg')} label="Fitness" />
      <CategoryItem source={require('../assets/images/natation2.jpg')} label="Massage" />
    </ScrollView>
  </View>
);

const CategoryItem = ({ source, label }) => (
  <View style={styles.categoryItem}>
    <Image source={source} style={styles.categoryImage} />
    <Text style={styles.categoryLabel}>{label}</Text>
  </View>
);

const Activities = () => (
  <View style={styles.activities}>
    <ActivityItem source={require('../assets/images/natation2.jpg')} label="Outdoor Activities" />
    <ActivityItem source={require('../assets/images/natation2.jpg')} label="Yoga" />
    <ActivityItem source={require('../assets/images/natation2.jpg')} label="Natation" />
    <ActivityItem source={require('../assets/images/natation2.jpg')} label="Spa" />
  </View>
);

const ActivityItem = ({ source, label }) => (
  <View style={styles.activityItem}>
    <Image source={source} style={styles.activityImage} />
    <Text style={styles.activityLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  loginText: {
    color: 'white',
  },
  carousel: {
    height: 200,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  categories: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryLabel: {
    marginTop: 5,
  },
  activities: {
    padding: 20,
  },
  activityItem: {
    marginBottom: 20,
  },
  activityImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  activityLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
