import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import img from '@/assets/images/tips/29612538.png'
import { Pause, Play } from '@/assets/svgs'
import { BlurTint, BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'

const data = {
  title: '2 minute\nmind exercise',
  text: 'One brain exercise you might not have considered might actually be extremely effective – meditation. Take 2 minutes out in your day, sit in silence and focus on your breathing. Breathe in over 7 seconds, hold for 7, and breathe out over another 7 seconds.',
}

const TipVideo = () => {
  const [played, setPlayed] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={img} style={styles.image}/>
        <View style={styles.overlay}>
          <TouchableOpacity onPress={()=>setPlayed(!played)} style={styles.iconCircle}>
            <BlurView intensity={55} tint={'dark'} style={styles.blur}>
              {
                played
                  ? <Pause/>
                  : <Play width={12} height={12}/>
              }
            </BlurView>
          </TouchableOpacity>
          {
            played && <View style={styles.progressBar}>
              <LinearGradient
                colors={['rgba(255, 250, 152, 1)', 'rgba(255, 214, 0, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.progressIndicator, width: '20%' }}
              />
            </View>
          }
        </View>
      </View>
      <View style={{ paddingTop: 24, paddingHorizontal: 22 }}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  )
}

export default TipVideo
