import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Link } from 'expo-router';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Logo Ket Ket Bleu 1.png')} style={styles.logo} />
      <Text style={styles.description}>A partner network for {'\n'} your well-being</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/homePage" style={styles.buttonText}>Start</Link>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D428A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30, 
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20, 
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20, 
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#003366',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
