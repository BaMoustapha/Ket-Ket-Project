import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  useRouter } from 'expo-router'
// import { AntDesign, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


type Props ={
  listings: any[]
}

const ImageSlider = ({listings}: Props) => {
  const router = useRouter()
  const getImageSource = (imageName) => {
    switch(imageName) {
      // ajoutez d'autres cas pour chaque image
      case 'image168.png':
        return require('../assets/images/image168.png');

        case 'spa.jpg':
        return require('../assets/images/spa.jpg');

        case 'tennis.jpg':
        return require('../assets/images/tennis.jpg');

        case 'yoga.jpg':
        return require('../assets/images/yoga.jpg');

        case 'natation1.jpg':
        return require('../assets/images/natation1.jpg');
      default:
        return require('../assets/images/fitfitness.jpg'); // chemin vers une image par défaut
    }
  }

  const renderItems = ({ item }) => {
    const imageSource = getImageSource(item.image);

    return (
        <View style={styles.item}>
          <Image source={imageSource} style={styles.images} />
          <View style={styles.overlay}>
          <View style={styles.overlay2}>
          <Text style={styles.overlayText}> {item.name} </Text>
          <View style={styles.textbottom}>
            <View style={styles.adresse}>
              <Text style={styles.overlaySubText}><AntDesign name="staro" style={{marginLeft: 50}} size={18} color="#ccc" /> {item.rating} </Text>
            </View>
          </View>
        </View>
        </View>
        </View>

    )
  }

  return (
    <View>
      <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginRight: 50,
    width: 220
  },
  images: {
    width: 235,
    height: 243,
    borderRadius: 10
  },
  overlay:{
    position: 'absolute',
    flexDirection: "column",
    justifyContent: 'space-between',
    gap: 100,
    padding: 20,
    width: 250,
    height: 400
  },
  overlay2: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 18,
    marginTop: 150,
    borderRadius: 20,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  overlayText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overlaySubText: {
    color: '#ccc',
    fontSize: 10,
  },
})