import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const data = {
  title: '2 minute\nmind exercise',
  text: 'One brain exercise you might not have considered might actually be extremely effective – meditation. Take 2 minutes out in your day, sit in silence and focus on your breathing. Breathe in over 7 seconds, hold for 7, and breathe out over another 7 seconds.\n\n One brain exercise you might not have considered might actually be extremely effective – meditation. Take 2 minutes out in your day, sit in silence and focus on your breathing. Breathe in over 7 seconds, hold for 7, and breathe out over another 7 seconds.',
}

const TipText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  )
}

export default TipText
