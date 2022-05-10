import React, { FC } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import { Props } from './types'
import { ArrowLeft, AddIcon } from '@/assets/svgs'
import topImageRGBA from '@/assets/images/CourseLanding/topImageRGBA.png'

const CourseLandingHeader: FC<Props> = ({ data }: Props) => {
  return (
    <ImageBackground
      style={{ width: '100%' }}
      resizeMode={'stretch'}
      source={topImageRGBA}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.mainTitle}>{data}</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.addBtnContainer}>
            <AddIcon width={24} height={24} iconColor={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default CourseLandingHeader
