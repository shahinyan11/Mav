
import React, { FC } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?:string
}

const CheckRequireIcon: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 16} height={16 || height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="8" cy="8" r="8" fill={color || '#63E788'}/>
      <Path d="M4.04883 7.78915L6.80799 10.3702L11.9501 4.83936" stroke="white" strokeWidth="1.5"/>
    </Svg>
  )
}

export { CheckRequireIcon }
