import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types'
import React, { FC, useState } from 'react'
import { View, ImageBackground, Image, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import styles from './style'

interface Props {
  data: object,
  onItemPress: (id: number) => void;
}

const AccordionExpandedItem: FC<Props> = ({ data, onItemPress }) => {
  return <View style={styles.cardExpandedView}>
    <TouchableOpacity onPress={() => onItemPress(data.id)}>
      <View style={styles.cardHeader}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Image resizeMode="center" style={styles.dropIcon} source={require('@/assets/images/icon_dropup.png')} />
      </View>
    </TouchableOpacity>
    <Text style={styles.detailText}>{data.detail}</Text>
  </View>
}

export default AccordionExpandedItem


