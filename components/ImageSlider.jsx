import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  useRouter } from 'expo-router'

type Props ={
  listings: any[]
}

const ImageSlider = ({listings}: Props) => {
  const router = useRouter()
  const getImageSource = (imageName) => {
    switch(imageName) {
      case 'fitness.jpg':
        return require('../assets/images/fitness.jpg');
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
      <TouchableOpacity onPress={()=> router.push('accueillPrincipal')}>
        <View style={styles.item}>
          <Image source={imageSource} style={styles.images} />
        </View>
      </TouchableOpacity>
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
    marginRight: 5,
    width: 220
  },
  images: {
    width: 200,
    height: 260,
    borderRadius: 10
  }
})