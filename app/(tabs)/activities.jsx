import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const activitiesData = [
  { id: '1', image: require('../../assets/images/fitness.jpg'), description: 'Fitness' },
  { id: '2', image: require('../../assets/images/spa.jpg'), description: 'Spa' },
  { id: '3', image: require('../../assets/images/natation1.jpg'), description: 'Swimming' },
  { id: '4', image: require('../../assets/images/yoga.jpg'), description: 'Yoga' },
  { id: '5', image: require('../../assets/images/bascket.jpg'), description: 'Basket' },
  { id: '6', image: require('../../assets/images/tennis.jpg'), description: 'Tennis' },
];

const activities = () => {
  const [likedActivities, setLikedActivities] = useState({});

  const toggleLike = (id) => {
    setLikedActivities((prevLikedActivities) => ({
      ...prevLikedActivities,
      [id]: !prevLikedActivities[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
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
        borderRadius:50
    }}>
      <Icon
        name={likedActivities[item.id]? 'heart' : 'heart-outline'}
        size={30}
        color={likedActivities[item.id]? 'red' : 'red'}
      />
    </View>
      </Pressable>
      <Text style={styles.description}>{item.description}</Text>
    </View>
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
  for (let i = 0; i < activitiesData.length; i += 2) {
    pairedActivities.push([activitiesData[i], activitiesData[i + 1]]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>Activities</Text>
      </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
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

export default activities;
