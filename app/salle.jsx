// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Salle = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/image 168.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Aperçu</Text>
      <Text style={styles.subtitle}>
        Do you dream of transforming your body and adopting a healthier lifestyle? Our fitness program is here to help you achieve your goals, whether you're a beginner or an advanced athlete.
      </Text>
      <View>
        
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 330,
    height: 440,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    color: '#1D428A',
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1D428A',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Salle;
