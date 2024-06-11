import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../../components/ImageSlider';
import ButtonCategories from '../../components/ButtonCategories';
import dataIfo from '../../data/dataIfo.json'


const ProfilImage = require('../../assets/images/fitness.jpg');
const ProfilImage1 = require('../../assets/images/logoGalsen.jpg');
const ProfilImage2 = require('../../assets/images/logo-fitness.png');
const ProfilImage3 = require('../../assets/images/spa.jpg');
const ProfilImage4 = require('../../assets/images/tennis.jpg');
const ProfilImage5 = require('../../assets/images/yoga.jpg');
const ProfilImage6 = require('../../assets/images/medal.png');


export default function acceuil() {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hello Moussa</Text>
            <View>
                <Pressable style={styles.button}>
                    <Image source={ProfilImage6} style={styles.imageLogo}  />
                    <Text style={styles.text}>200 Pts</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={{ marginTop: 13, marginRight: 16}}>
          <Ionicons name="notifications-outline" size={28} color="black" />          
          </View>
        <Image source={ProfilImage} style={styles.image} />
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.titles}>
          <Text style={styles.title}>Our partner structure</Text>
          <Text style={styles.title2}>See All</Text>
        </View>
      </View>
      <View style={styles.containerTrois}>
        <View style={styles.imageContainer1}>
            <Image source={ProfilImage1} style={styles.image1} />
        </View>
        <View style={styles.imageContainer1}>
            <Image source={ProfilImage2} style={styles.image1} />
        </View>
        <View style={styles.imageContainer1}>
            <Image source={ProfilImage3} style={styles.image1} />
        </View>
        <View style={styles.imageContainer1}>
            <Image source={ProfilImage4} style={styles.image1} />
        </View>
        <View style={styles.imageContainer1}>
            <Image source={ProfilImage5} style={styles.image1} />
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.buttonGroup}>
            <ButtonCategories/>
        </View>
      </View>
      <View style={styles.imageGroup}>
          <View>
                <ImageSlider listings={dataIfo}/>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EE',
    color: '#000',
    padding: 10,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  titles: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 30
  },
  title2: {
    fontSize: 15,
    fontWeight: 'semibold',
    marginTop: 2,
    color: "#888888"
  },
  containerOne: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    // backgroundColor: 'blue',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    width: 100,
    height: 45,
    backgroundColor: ('90deg, rgba(0,100,255,1)'),
    marginTop: 15,
    // elevation: 3,
  },
  imageLogo:{
    width: 30,
    height: 23
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imageContainer :{
    marginTop: 15,
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginTop: 2,
  },
  containerTwo: {
    // backgroundColor: 'red',
    marginTop: 5,
  },
  containerTrois:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 5,
    marginBottom: 10
    // backgroundColor: 'red'
  },
  image1: {
    width: 75,
    height: 75,
    borderRadius: 35,
    marginTop: 13,
  },
  imageContainer1:{
    margin: 5,
  },
  buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    marginTop: 15,
    // elevation: 3,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: 100,
    height: 40,
    backgroundColor: '#EEEEEE',
    marginTop: 15,
    // elevation: 3,
  },
  imageGroup:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    // margin: 15,
  },
  imageActivity: {
   marginTop: 15,
  },
  image2: {
    width: 150,
    height: 300,
    borderRadius: 5,
  }
});
