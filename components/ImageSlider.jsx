import { View, Text } from 'react-native';
import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderTmages } from '../constants';

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderTmages}
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
