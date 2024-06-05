import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent = () => {
  const [entries, setEntries] = useState([
    { title: 'Image 1', illustration: require('../assets/images/natation2.jpg') },
    { title: 'Image 2', illustration: require('../assets/images/natation2.jpg') },
    { title: 'Image 3', illustration: require('../assets/images/natation2.jpg') },
  ]);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.illustration} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <Carousel
      data={entries}
      renderItem={_renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      autoplay={true}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
  },
});

export default CarouselComponent;
