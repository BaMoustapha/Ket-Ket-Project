import { View, Text } from 'react-native';
import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constants';

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(500)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 90}
      sliderStyle={{ display: 'flex', borderRadius:20 }} // Correction ici
    />
  );
}

const ItemCard = ({item, index}, parallaxProps)=>{
  return(
  <View style={{width: wp(100), height: hp(40)}}>
    <ParallaxImage
    source={item}
    containerStyle={{borderRadius:5, flex:1, marginTop: 20}}
    style={{resizeMode: 'contain'}}
    parallaxFactor={1}
    {...parallaxProps}
    />
  </View>

  )
}

// import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'

// const listingImg = [
//   {
//     id: 'card1',
//     title: 'Titre 1',
//     description: 'Description 1',
//     imageUrl: require('../assets/images/image168.png'), // Assurez-vous que le chemin d'accès est correct
//   },
//   {
//     id: 'card2',
//     title: 'Titre 2',
//     lieu: 'Description 2',
//     imageUrl: require('../assets/images/image168.png'), 
//   },
//   // Ajoutez plus d'objets ici pour plus de cartes
// ];

// const ImageSlider = () => {
//   return (
//     <View>
//       {/* ListHeaderComponentStyle={{marginVertical: 10}} */}
//       ListHeaderComponent={()=>(
//         <View>
//           <FlatList
//           horizontal
//           style={{ paddingVertical: 5}}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{ gap: 10, paddingHorizontal: 12}}
//           data={listingImg}
//           keyExtractor={(item, idx) => item + idx}
//           renderItem={({item}) => (
//             <TouchableOpacity style={{
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "row",
//               alignItems: "center",
//               width: 300,
//               height: 240,
//               borderRadius: 20
//              }}>

//             </TouchableOpacity>
//           )}
//           />
//         </View>
//       )}
//     </View>
//   )
// }

// export default ImageSlider

// const styles = StyleSheet.create({

// })