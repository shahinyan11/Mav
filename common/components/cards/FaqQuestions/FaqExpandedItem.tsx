import React, { FC, useState } from 'react'
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'
import styles from './style'
type ListItem={id:number, title:string, detail:string}
interface Props {
  data:ListItem;
  onItemPress: (id: number) => void;
}

const FaqExpandedItem: FC<Props> = ({ data, onItemPress }) => {
  return (
    <View style={styles.cardExpandedView}>
      <TouchableOpacity onPress={() => onItemPress(data.id)}>
        <View style={styles.cardHeader}>
          <Text style={styles.expandTitleText}>{data.title}</Text>
          <Image
            resizeMode="center"
            style={styles.dropIcon}
            source={require('@/assets/icons/cross.png')}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.detailText}>{data.detail}</Text>
    </View>
  )
}

export default FaqExpandedItem
