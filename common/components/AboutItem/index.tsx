import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { Props } from './types'
import list_plus from '@/assets/images/Routines/list_plus.png'
import RoutinesItemBG from '@/assets/images/Routines/RoutinesItemBG.png'

const AboutItem: FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>{data?.trim()}</Text>
    </View>
  )
}

export default AboutItem
