import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Props } from './types'

const Post: FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.bottomText}>{data.bottomText}</Text>
        <Text></Text>
      </View>
    </View>
  )
}

export default Post
