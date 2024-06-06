import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import ImageCarousel from '../components/ImageCarousel'


const AccueilPage = () => {
  // const carouselImages = [
  //   require('../assets/images/yoga.jpg'),  
  //   require('../assets/images/fitness.jpg'),
  //   require('../assets/images/natation1.jpg'),
  //   require('../assets/images/natation2.jpg'),
  // ];
  return (
    <ScrollView style={styles.container}>
      <Header />
      <ImageCarousel />
      <Categories />
      <Buttons />
      <Activities />
    </ScrollView>
  );
};

// const ImageCarousel = ({ images }) => {
//   const [activeSlide, setActiveSlide] = React.useState(0);

//   const renderItem = ({ item }) => (
//     <Image source={item} style={{ width: 200, height: 200 }} />
//   );

//   return (
//     <View>
//       <Carousel
//         data={images}
//         renderItem={renderItem}
//         sliderWidth={300}
//         itemWidth={200}
//         layout={'default'}
//         loop={true}
//         onSnapToItem={(index) => setActiveSlide(index)}
//       />
//       <Pagination
//         dotsLength={images.length}
//         activeDotIndex={activeSlide}
//         containerStyle={{ position: 'absolute', bottom: 10, alignSelf: 'center' }}
//         dotStyle={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'red' }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//       />
//     </View>
//   );
// };

const Buttons = () => {
  return(
    <View style={styles.containerTwo}>
        <View style={styles.titles}>
            <Text style={styles.title}>Our partner structure</Text>
            <Text style={styles.title2}>See All</Text>
        </View>
        <View style={styles.buttonGroup}>
            <View>
                <Pressable style={styles.button1}>
                    <Text style={styles.text}>All</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={styles.button2}>
                    <Text style={styles.text}>Fitness</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={styles.button2}>
                    <Text style={styles.text}>Massage</Text>
                </Pressable>
            </View>
        </View>
      </View>
  )
}

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

// const Carousel = () => (
//   <View style={styles.carousel}>
//     <Image source={require('../assets/images/yoga.jpg')} style={styles.carouselImage} />
//   </View>
// );

const Categories = () => (
  <View style={styles.categories}>
    <View style={styles.titles}>
      <Text style={styles.title}>Our partner structure</Text>
      <Text style={styles.title2}>See All</Text>
    </View>
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
      <ActivityItem source={require('../assets/images/fitness.jpg')} label="Fitness" />
      <ActivityItem source={require('../assets/images/natation2.jpg')} label="Natation" />
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
  // carousel: {
  //   height: 200,
  //   marginBottom: 10
  // },
  // carouselImage: {
  //   width: '100%',
  //   height: '100%',
  // },
  categories: {
    marginBottom: 10
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
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
  },

  activityItem: {
    width: '48%',
    height: 208,
    borderRadius: 10,
  },
  activityImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  activityLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',

  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 15,
    // elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerTwo: {
    marginBottom: 20,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 10,
    // elevation: 3,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 90,
    height: 40,
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    // elevation: 3,
  },
  buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titles: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  title2: {
    fontSize: 16,
    fontWeight: 'semibold',
  }
});

export default AccueilPage;
