
import React, { FC } from 'react'
import Svg, { Line, Circle } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string
  styleProp?:object
}

const Share: FC<Props> = ({ width, height, iconColor, styleProp={} }) => {
  return (
    <Svg style={styleProp} width={width ||28} height={height ||28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Line x1="16.916" y1="8.79201" x2="9.91603" y2="13.4587" stroke={iconColor ||'black'} strokeWidth="1.5"/>
      <Line y1="-0.75" x2="8.41295" y2="-0.75" transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 16.5 19.834)" stroke={iconColor ||'black'} strokeWidth="1.5"/>
      <Circle cx="17.0837" cy="8.75065" r="2.16667" fill="white" stroke={iconColor ||'black'} strokeWidth="1.5"/>
      <Circle cx="17.0837" cy="19.2507" r="2.16667" fill="white" stroke={iconColor ||'black'} strokeWidth="1.5"/>
      <Circle cx="8.91667" cy="14.0007" r="2.16667" fill="white" stroke={iconColor ||'black'} strokeWidth="1.5"/>
    </Svg>
  )
}

export { Share }
