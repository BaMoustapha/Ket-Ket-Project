import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import image1 from '../../assets/images/image168.png'; 
import image2 from '../../assets/images/fitfitness.jpg';


const cardsData = [
  {
    id: 'card1',
    title: 'Galsenfit',
    description: 'Rue LIB-50, Liberté 6 extension , Dakar, Senegal',
    imageUrl: image1,
  },
  {
    id: 'card2',
    title: 'Lif\'itness gyms',
    description: 'Route des Almadies en face Tigo, Dakar, Senegal',
    imageUrl: image2,
  },
  // Ajoutez plus d'objets ici pour plus de cartes
];


export default function Acceuil() {
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => console.log('Card pressed')}>
        <View style={styles.cardContainer}>
          <Image source={item.imageUrl} style={styles.cardImage} />
          
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle1} onPress={() => console.log('Premier bouton pressé')}>
              <Text style={{color: '#000000'}}>4,5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle2} onPress={() => console.log('Deuxième bouton pressé')}>
              <Text style={{color: '#FFFFFF', margin: 'auto'}}>200 pts</Text>
          </TouchableOpacity>

          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Activités</Text>
        <FlatList
          data={cardsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      backgroundColor: '#F6F1EE',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 25
    },
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 5,
      marginVertical: 15,
      height: 270,
      overflow: 'hidden', // Assurez-vous que le conteneur peut contenir les boutons absolument positionnés
    },
    cardImage: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
      marginBottom: 12,
      borderRadius: 5,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 65, // Positionne le conteneur de boutons en bas de l'image
      flexDirection: 'row', // Aligne les boutons horizontalement
      justifyContent: 'space-between', // Donne de l'espace égal entre les boutons
      width: '100%', // Prend toute la largeur de l'image
      padding: 10, // Ajoute un peu d'espace autour des boutons
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 15,
      marginTop: 10
    },
    cardDescription: {
      fontSize: 13,
      marginBottom: 10,
      marginLeft: 15,
      color: "#5B5B5E"
    },
    buttonStyle1: {
        backgroundColor: '#FFFFFF', // Fond blanc
         // Bord noir pour le contraste
         // Largeur de bordure
        borderRadius: 20, // Arrondi des coins
        padding: 10, // Espacement interne pour le texte
        width: 70, // Espacement interne pour le texte
        marginRight: 5, // Espace à droite pour séparer le bouton suivant
        color: '#000'
      },
    
      buttonStyle2: {
        backgroundColor: '#390050', // Fond bleu
        // borderColor: '#FFFFFF', // Bord blanc pour le contraste
        // borderWidth: 1, // Largeur de bordure
        borderRadius: 25, // Arrondi des coins
        padding: 10,
        width:100, // Espacement interne pour le texte
        marginLeft: 5, // Espace à gauche pour séparer le bouton précédent
      },
  });