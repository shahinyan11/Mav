import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

interface Props {
  item: any
  style?: object
}

const SavedItem: FC<Props> = ({ item, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={item.img} style={styles.img} resizeMode='contain' />
      <View style={styles.overlay}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.number}> {item.number}</Text>
      </View>

    </View>
  )
}

export default SavedItem
