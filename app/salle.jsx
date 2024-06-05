// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';


const Salle = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/image168.png')} style={styles.logo} />
        <View style={styles.overlay}>
          <View style={styles.overlay1}>
          <AntDesign name="left" size={20} color="white" />
          </View>
          <View style={styles.overlay2}>
          <Text style={styles.overlayText}>Galsenfit</Text>
          <View style={styles.textbottom}>
            <View style={styles.adresse}>
              <AntDesign name="enviromento" size={18} color="#ccc" />
              <Text style={styles.overlaySubText}>Liberté 6 extension , Dakar</Text>
            </View>
              <Text style={styles.overlayPoints}>200 pts</Text>
          </View>
        </View>
        </View>
        
      </View>
      <Text style={styles.title}>Aperçu</Text>
      <View style={styles.iconContainer}>
          <View style={styles.iconContainer1}>
                <AntDesign name="clockcircle" size={20} color="black" style={styles.icon} />
                <Text style={styles.iconText}>2 hours</Text>
          </View>
          <View style={styles.iconContainer2}>
                <AntDesign name="star" size={20} color="black" style={styles.icon} />
                <Text style={styles.iconText}>4.5</Text>
          </View>
      </View>
      <Text style={styles.subtitle}>
        Do you dream of transforming your body and adopting a healthier lifestyle? Our fitness program is here to help you achieve your goals, whether you're a beginner or an advanced athlete.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe Now</Text>
        <Feather name="send" size={24} color="white" style={styles.buttonIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  overlay:{
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 170,
  },
  overlay1:{
    top: 20,
    left: 20,
  },
  overlay2: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlayText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overlaySubText: {
    color: '#ccc',
    fontSize: 14,
  },
  overlayPoints: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 27,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    backgroundColor: '#e5e7e6',
    padding: 5,
    marginHorizontal: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#1D428A',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 10,
  },
  iconContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
  },
  adresse:{
    flexDirection: 'row',
  }
});

export default Salle;
