import React, { FC, useState } from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import topBg from '@/assets/images/about/29612157.png'
import styles from './styles'
import { Props } from './types'

const Header: FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={topBg}>
        <Text style={styles.mainTitle}>
          {data.title}
        </Text>
        <View style={styles.imagesContent}>
          <View style={styles.leftBox}>
            <Image style={styles.img1} source={data.images[2]}/>
            <Image style={styles.img2} source={data.images[3]}/>
          </View>
          <View style={styles.rightBox}>
            <Image style={styles.img3} source={data.images[1]}/>
            <Image style={styles.img4} source={data.images[0]}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}


export default Header
