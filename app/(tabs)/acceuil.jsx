import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

const ProfilImage = require('../../assets/images/fitness.jpg');
const ProfilImage1 = require('../../assets/images/logoGalsen.jpg');
const ProfilImage2 = require('../../assets/images/logo-fitness.png');
const ProfilImage3 = require('../../assets/images/spa.jpg');
const ProfilImage4 = require('../../assets/images/tennis.jpg');
const ProfilImage5 = require('../../assets/images/yoga.jpg');

export default function acceuil() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Hello, Moussa</Text>
            <View>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>200 Pts</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image source={ProfilImage} style={styles.image} />
        </View>
      </View>
      <View style={styles.containerTwo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Our partner structure</Text>
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
        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Activities</Text>
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
      <View style={styles.imageGroup}>

        <View style={styles.imageActivity}>
            <Image source={ProfilImage} style={styles.image2} />
        </View>

        <View style={styles.imageActivity}>
            <Image source={ProfilImage} style={styles.image2} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    
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
    justifyContent: 'center',
    borderRadius: 4,
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
  imageContainer :{
    marginTop: 15,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginTop: 13,
  },
  containerTwo: {
    // backgroundColor: 'red',
    marginTop: 30,
  },
  containerTrois:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    margin: 5,
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
  }
});
