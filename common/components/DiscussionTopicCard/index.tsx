import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { deg } from 'react-native-linear-gradient-degree'
import styles from './styles'

const DiscussionTopicCard = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(255, 255, 255, 0.16)', 'rgba(255, 255, 255, 0)']}
      {...deg(153.75)}
    >
      <View style={styles.top}>
        <Text style={styles.title}>The importance of routines</Text>
        <LinearGradient
          style={styles.circle}
          colors={['rgba(255, 255, 255, 0.16)', 'rgba(255, 255, 255, 0)']}
          {...deg(153.75)}
        >
          <Text style={styles.number}>16</Text>
          <Text style={styles.circleText}>questions</Text>
        </LinearGradient>
      </View>
      <Text style={styles.bottomText}>
        Ask Derek about his routines and discuss which ones are best for your positon.
      </Text>
    </LinearGradient>
  )
}

export default DiscussionTopicCard
