import React, { FC } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './style'
interface Props {
  data: string
  onPress: () => void
}

const ButtonCardItem: FC<Props> = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnText}>{data}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCardItem
