import { Image } from 'native-base'
import React, { FC } from 'react'
import { StyleSheet, useWindowDimensions, SafeAreaView, ImageSourcePropType } from 'react-native'

interface Props {
  source: ImageSourcePropType
}

const Background: FC<Props> = ({ source }) => {
  return <Image source={source} alt="Background Image" style={style.image} />
}

const style = StyleSheet.create({
  image: {
    bottom: 0,
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    // zIndex: 1,
  },
})

export default Background
