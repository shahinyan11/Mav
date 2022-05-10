import React, { FC } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import imageBg from '@/assets/images/about/29612136.png'
import styles from './styles'
import { Props } from './types'

const Post: FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground source={imageBg} style={styles.imageBg}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.text}>{data.text}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Post
