import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const activitiesData = [
  { id: '1', image: require('../../assets/images/fitness.jpg'), description: 'Fitness' },
  { id: '2', image: require('../../assets/images/spa.jpg'), description: 'Spa' },
  { id: '3', image: require('../../assets/images/natation1.jpg'), description: 'Swimming' },
  { id: '4', image: require('../../assets/images/yoga.jpg'), description: 'Yoga' },
  { id: '5', image: require('../../assets/images/bascket.jpg'), description: 'Basket' },
  { id: '6', image: require('../../assets/images/tennis.jpg'), description: 'Tennis' },
  { id: '7', image: require('../../assets/images/football.jpg'), description: 'Football' },
  { id: '8', image: require('../../assets/images/boxe.jpg'), description: 'Boxe' },
  { id: '9', image: require('../../assets/images/self.jpg'), description: 'Self Défense' },
  { id: '10', image: require('../../assets/images/rollers.jpg'), description: 'Rollers' },
];

const Activities = () => {
  const [likedActivities, setLikedActivities] = useState({});
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const toggleLike = (id) => {
    setLikedActivities((prevLikedActivities) => ({
      ...prevLikedActivities,
      [id]: !prevLikedActivities[id],
    }));
  };

  const filteredActivities = activitiesData.filter(activity =>
    activity.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('accueillPrincipal', { item })}>
      <Image source={item.image} style={styles.image} />
      <Pressable
        style={styles.likeButton}
        onPress={() => toggleLike(item.id)}
      >
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: 45,
          backgroundColor: 'white',
          borderRadius: 50
        }}>
          <Icon
            name={likedActivities[item.id] ? 'heart' : 'heart-outline'}
            size={30}
            color={likedActivities[item.id] ? 'red' : 'red'}
          />
        </View>
      </Pressable>
      <Text style={styles.description}>{item.description}</Text>
    </Pressable>
  );

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.column}>
        {renderItem({ item: item[0] })}
      </View>
      {item[1] && (
        <View style={styles.column}>
          {renderItem({ item: item[1] })}
        </View>
      )}
    </View>
  );

  const pairedActivities = [];
  for (let i = 0; i < filteredActivities.length; i += 2) {
    pairedActivities.push([filteredActivities[i], filteredActivities[i + 1]]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable  onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}>Activities</Text>
        <Pressable onPress={() => setSearchVisible(!searchVisible)} style={styles.searchIcon}>
          <Icon name="search" size={24} color="black" />
        </Pressable>
      </View>
      {searchVisible && (
        <TextInput
          style={styles.searchBar}
          placeholder="Search activities..."
          value={searchText}
          onChangeText={setSearchText}
        />
      )}
      <FlatList
        data={pairedActivities}
        renderItem={renderRow}
        keyExtractor={(item, index) => `row-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
    position: 'relative',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 15,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  likeButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Activities;
