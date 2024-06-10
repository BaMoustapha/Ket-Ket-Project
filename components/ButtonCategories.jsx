import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import buttonCategorie from'../data/categories'
import {  useRouter } from 'expo-router'



export default function ButtonCategaries() {
  const router = useRouter()

  // const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [ActiveIndex, setActiveIndex] = useState(0)

  const handleSelectCategory = (index) => {
    setActiveIndex(index)
    console.log(index);
  }

  return (
    <View>
        <View style={styles.titles}>
          <Text style={styles.title}>Activities</Text>
          <TouchableOpacity onPress={()=> router.push('activities')}>
              <Text style={styles.title2}>See All</Text>
          </TouchableOpacity>
        </View>
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
        gap: 20 ,
        paddingVertical: 10,
        marginBottom: 10
      }}>
        {buttonCategorie.map((item,index) => (
          <TouchableOpacity 
          key={index}  
          onPress={() => handleSelectCategory(index)} 
          style={ ActiveIndex == index ? styles.categoryBtnAtive : styles.categoryBtn}>
            <Text style={ ActiveIndex == index ? styles.categoryBtnTextActive : styles.categoryBtnText}> {item.title} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  titles: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'semibold',
    marginTop: 2,
    color: "#888888"
  },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRaduis: 3,
  },
  categoryBtnAtive: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D428A',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRaduis: 3,
  },
  categoryBtnText:{
  },
  categoryBtnTextActive:{
    color:'#fff'
  }
})