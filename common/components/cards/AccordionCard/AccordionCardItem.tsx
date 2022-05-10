import React, { FC } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './style'

interface Props {
  data: object,
  onItemPress: (id: number) => void;

}

const AccordionCardItem: FC<Props> = ({ data, onItemPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onItemPress(data.id)
      }}
    >
      <View style={styles.card}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Image resizeMode="center" style={styles.dropIcon} source={require('@/assets/images/icon_dropdown.png')} />
      </View>
    </TouchableOpacity>
  )
}

export default AccordionCardItem
