import React, { FC, useRef } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import styles from './styles'
import Button from '@/views/general/Button'
import { Play } from '@/assets/svgs'
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
  data: {
    index: number;
    background: any;
    price: string;
    description: string;
    text: string;
    savePercent: string;
  };
}

const PlanCard: FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={data.background}
            style={styles.cardBgImage}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <View>
                <Text style={styles.title}>{data.price}</Text>
                <Text style={styles.text}>{data.description}</Text>
              </View>
              {data.savePercent && (
                <LinearGradient
                  style={styles.bottom}
                  colors={[
                    'rgba(255, 255, 255, 0.4)',
                    'rgba(255, 255, 255, 0.18)',
                  ]}
                >
                  <Text style={styles.saveText}>{data.savePercent}</Text>
                </LinearGradient>
              )}
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.bottomText}>{data.text}</Text>
      </View>
    </View>
  )
}

export default PlanCard
