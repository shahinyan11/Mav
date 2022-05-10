import React, { FC, useState } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import styles from './styles'

interface Props {
  data: any;
}

const FAQCard: FC<Props> = ({ data }) => {
  return (
    <View>
      <View style={[styles.main]}>
        <View style={styles.flex1}>
          <Image
            source={data.icon}
            resizeMode={'contain'}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text
          style={styles.description}
        >
          {data.description}
        </Text>
      </View>
    </View>
  )
}

export default FAQCard
