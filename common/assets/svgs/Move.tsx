import React, { FC } from 'react'
import Svg, { G, Line } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Move: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 28} height={height || 28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Line x1="2" y1="7.125" x2="26" y2="7.125" stroke={color || 'black'} strokeWidth="1.75"/>
      <Line x1="2" y1="14.125" x2="26" y2="14.125" stroke={color || 'black'} strokeWidth="1.75"/>
      <Line x1="2" y1="21.125" x2="26" y2="21.125" stroke={color || 'black'} strokeWidth="1.75"/>
    </Svg>
  )
}

export { Move }
