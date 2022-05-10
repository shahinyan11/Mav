import React, { FC } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import icon from '@/assets/images/quote.png'
import styles from './styles'
import { Props } from './types'

const Learning: FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.topImg} source={data.topIcon || icon}/>
        <Text style={styles.title}>We want to help making learning as accessible as possible, for everyone.</Text>
      </View>
      <View style={styles.center}>
        <View>
          <Image style={styles.leftImage} source={data.images[1]}/>
        </View>
        <View style={styles.right}>
          <Image style={styles.rightImage} source={data.images[0]}/>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  )
}

export default Learning
