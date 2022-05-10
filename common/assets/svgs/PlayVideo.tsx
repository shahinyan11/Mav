import React, { FC } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  fill?: string
}

const PlayVideo: FC<Props> = ({ width, height, fill }) =>{
  return (
    <Svg width={width || 40} height={height || 40} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="24" cy="24" r="19.25" stroke={fill || 'white'} strokeWidth="1.5"/>
      <Path d="M21 20L29 24L21 28V20Z" fill={fill || 'white'}/>
    </Svg>
  )
}

export { PlayVideo }
