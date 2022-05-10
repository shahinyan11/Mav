import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Pause: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clip-rule="evenodd" d="M5.46875 3.5L5.46875 12.5L3.99957 12.5L3.99957 3.5L5.46875 3.5Z" fill="white"/>
      <Path fillRule="evenodd" clip-rule="evenodd" d="M11.999 3.5L11.999 12.5L10.5298 12.5L10.5298 3.5L11.999 3.5Z" fill="white"/>
    </Svg>
  )
}

export { Pause }
