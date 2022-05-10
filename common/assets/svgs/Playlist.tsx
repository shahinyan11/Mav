import React, { FC } from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Playlist: FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width || 28} height={height || 28} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Rect x='0.875' y='5.54102' width='26.25' height='18.0833' stroke={color || 'black'} strokeWidth='1.75' />
      <Path d='M5.83334 2.33398H22.1667' stroke={color || 'black'} strokeWidth='1.75' />
      <Path d='M18.6667 14.5833L10.5 10.5V18.6667L18.6667 14.5833Z' fill={color || 'black'} />
    </Svg>
  )
}

export { Playlist }
