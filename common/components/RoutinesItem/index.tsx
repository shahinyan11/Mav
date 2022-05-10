import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { Props } from './types'
import list_plus from '@/assets/images/Routines/list_plus.png'
import RoutinesItemBG from '@/assets/images/Routines/RoutinesItemBG.png'

const RoutinesItem: FC<Props> = ({ data, onPress }: Props) => {
  return (
    <ImageBackground resizeMode={'cover'} source={data.image} style={[styles.container, { height: data?.heigth }]}>
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View style={styles.badgeConatiner}>
            <Text style={styles.badgeTextStyle}>{data.badgeText}</Text>
          </View>
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Image source={list_plus} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{data.title}</Text>
      <ImageBackground resizeMode={'stretch'} source={RoutinesItemBG} style={{}}>
        <Text style={styles.description}>{data.description}</Text>
      </ImageBackground>
    </ImageBackground>
  )
}

export default RoutinesItem
