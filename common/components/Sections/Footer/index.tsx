import React, { FC, useState } from 'react'
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Props } from './types'
import avatar from '@/assets/images/Footer/avatar.png'
import home from '@/assets/images/Footer/home.png'
import move from '@/assets/images/Footer/move.png'
import playlist from '@/assets/images/Footer/playlist.png'
import search from '@/assets/images/Footer/search.png'

const Footer: FC<Props> = ({ data }: Props) => {
  const footerList = [
    {
      image: home,
      key: 'home',
    },
    {
      image: search,
      key: 'search',
    },
    {
      image: playlist,
      key: 'playlist',
    },
    {
      image: avatar,
      key: 'avatar',
    },
    {
      image: move,
      key: 'move',
    },

  ]
  return (
    <View style={styles.container}>
      {footerList.map((elem) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={elem.key}>
            <Image source={elem.image} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default Footer
