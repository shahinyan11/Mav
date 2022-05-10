import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

interface Props {
  item: any
}

const ConversionItem: FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>{item.name}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  )
}

export default ConversionItem
