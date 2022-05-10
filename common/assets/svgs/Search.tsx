import React, { FC } from 'react'
import Svg, { Line, Circle } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Search: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 20} height={height || 20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="9.82353" cy="9.76494" r="7.07353" stroke={color || 'black'} strokeWidth="1.5"/>
      <Line x1="14.8243" y1="14.8227" x2="21.5302" y2="21.5286" stroke={color || 'black'} strokeWidth="1.5"/>
    </Svg>
  )
}

export { Search }
