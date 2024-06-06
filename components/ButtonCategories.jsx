import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import buttonCategorie from'../data/categories'


export default function ButtonCategaries() {

  // const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [ActiveIndex, setActiveIndex] = useState(0)

  const handleSelectCategory = (index) => {
    setActiveIndex(index)
    console.log(index);
  }

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Activities</Text>
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
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: '#390050',
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