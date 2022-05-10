import React, { FC, useState } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { Props } from './types'

const Header: FC<Props> = ({ data }: Props) => {
  return (
    <View>
      <View style={styles.imagesContent}>
        <View style={styles.rightBox}>
          <Image style={styles.topRightImg} source={data.images[1]} />
        </View>
        <View style={styles.leftBox}>
          <Image style={styles.bottomLeftImg} source={data.images[0]} />
        </View>

        <View style={styles.centerBox}>
          <Image style={styles.rightAbsoluteImg} source={data.images[2]} />
          <Image style={styles.leftAbsoluteImg} source={data.images[3]} />
        </View>
        <Text style={styles.mainTitle}>
          {data.title}
        </Text>
      </View>
    </View>
  )
}


export default Header
