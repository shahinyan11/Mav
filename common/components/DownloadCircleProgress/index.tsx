import React, { FC } from 'react'
import { View } from 'react-native'
import { colors } from '@/constants'
import ProgressCircle from 'react-native-progress-circle'

interface Props {
  percent: number,
  size?: number
}

const DownloadCircleProgress: FC<Props> = ({ percent, size= 100 }) => {
  return (
    <ProgressCircle
      outerCircleStyle={{ height: size, width: size }}
      percent={percent}
      radius={size / 2}
      borderWidth={size * 8 / 100}
      color={colors.yellow}
      shadowColor='#999'
      bgColor='#fff'
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: size * 10 / 100, height: size * 40 / 100, backgroundColor: '#000', marginHorizontal: size * 5 / 100 }} />
        <View style={{ width: size * 10 / 100, height: size * 40 / 100, backgroundColor: '#000', marginHorizontal: size * 5 / 100 }} />
      </View>
    </ProgressCircle>
  )
}

export default DownloadCircleProgress
