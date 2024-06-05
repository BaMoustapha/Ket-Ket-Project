import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const activitiesPage = () => {
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
    <Image source={require('../assets/images/Logo Ket Ket Blanc 2.png')} style={styles.logo} />
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginText}>
        <Link href="/login" style={styles.buttonText}>Login</Link>
      </Text>
    </TouchableOpacity>
  </View>
);

const Carousel = () => (
  <View style={styles.carousel}>
    <Image source={require('../assets/images/yoga.jpg')} style={styles.carouselImage} />
  </View>
);

const Categories = () => (
  <View style={styles.categories}>
    <Text style={styles.title}>Our partner structure</Text>
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

const Activities = () => (
    <View style={styles.activity}>
      <ActivityItem source={require('../assets/images/fitness.jpg')} label="Outdoor Activities" />
      <ActivityItem source={require('../assets/images/natation2.jpg')} label="Yoga" />
      {/* <ActivityItem source={require('../assets/images/natation2.jpg')} label="Natation" />
      <ActivityItem source={require('../assets/images/natation2.jpg')} label="Spa" /> */}
    {/* </ScrollView> */}
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    marginTop: 10
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 8,
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
  carousel: {
    height: 200,
    marginBottom: 10
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  categories: {
    marginBottom: 10
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
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
    marginBottom: 10,
  },

  activityItem: {
    width: '48%',
    height: 300,
    borderRadius: 10,
  },
  activityImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  activityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default activitiesPage;
