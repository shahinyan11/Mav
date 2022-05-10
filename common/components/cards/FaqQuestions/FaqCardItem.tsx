import React, { FC } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './style'
type ListItem={id:number, title:string, detail:string}
interface Props {
  // data: object,
  data:ListItem,
  onItemPress: (id: number) => void;

}

const FaqCardItem: FC<Props> = ({ data, onItemPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onItemPress(data.id)
      }}
    >
      <View style={styles.card}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Image resizeMode="center" style={styles.dropIcon} source={require('@/assets/icons/add.png')} />
      </View>
    </TouchableOpacity>
  )
}

export default FaqCardItem
