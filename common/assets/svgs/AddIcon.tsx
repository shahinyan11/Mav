import { ratio } from '@/constants'
import React, { FC, useCallback } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  iconColor?: string | number
}

const AddIcon: FC<Props> = ({ width, height, iconColor }) => {
  const size = useCallback(() => {
    return {
      width: ratio.width * (width || 32),
      height: ratio.width * (height || 32),
    }
  }, [ratio, width, height])

  return (
    <Svg width={size().width} height={size().height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M15.9997 26.6667V5.33333"
        stroke={iconColor || 'black'}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round" />
      <Path
        d="M26.6663 16H5.33301"
        stroke={iconColor || 'black'}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round" />
    </Svg>
  )
}

export { AddIcon }
