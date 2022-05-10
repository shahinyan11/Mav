import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import img from '@/assets/images/tips/29612538.png'

const data = {
  title: '2 minute\nmind exercise',
  text: 'One brain exercise you might not have considered might actually be extremely effective – meditation. Take 2 minutes out in your day, sit in silence and focus on your breathing. Breathe in over 7 seconds, hold for 7, and breathe out over another 7 seconds.\n\nOne brain exercise you might not have considered might actually be extremely effective – meditation. Take 2 minutes',
}

const TipImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={img} style={styles.image}/>
        <View style={styles.overlay}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </View>
      <View style={{ paddingTop: 24, paddingHorizontal: 22 }}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  )
}

export default TipImage
