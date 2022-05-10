import { icons } from '@/components/inputs/assets/icons'
import React, { FC } from 'react'
import { View, Image, ImageBackground, Pressable, Text } from 'react-native'
import styles from './styles'
import sessionImage from '@/assets/images/imageB2.png'

interface Props {
  index: number,
  item: {
    name: string,
    title: string
  },
  separators: any,
  onItemPress: (id: number) => void
}

const SessionsCardItem: FC<Props> = ({ data }) => {
  return (
    <View style={{ elevation: 2 }}>
      <ImageBackground
        source={sessionImage}
        style={styles.sessionImgBg}>
        <View
          style={styles.p_10ph_14}
        >
          <Text style={styles.nameStyle}>
            {data.item.name}
          </Text>
          <Text
            style={styles.representStyle}
          >
            {data.item.title}
          </Text>
        </View>
        <Text
          style={styles.EpTxt}
        >
          Ep 1 • 30 min
        </Text>
        <Pressable style={styles.sessionAddView}>
          <Image
            style={styles.sessionAddBtn}
            source={icons.add}
          />
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default SessionsCardItem
