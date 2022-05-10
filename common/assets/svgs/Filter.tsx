import React, { FC } from 'react'
import Svg, { Rect } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Filter: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 64} height={height || 64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="64" height="64" rx="32" fill="white"/>
      <Rect x="20" y="27" width="24" height="2" fill="black"/>
      <Rect x="20" y="35" width="24" height="2" fill="black"/>
      <Rect x="35" y="25" width="5" height="5" rx="2.5" fill="white" stroke="black" strokeWidth="2"/>
      <Rect x="26" y="33" width="5" height="5" rx="2.5" fill="white" stroke="black" strokeWidth="2"/>
    </Svg>
  )
}

export { Filter }
