import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Play: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M0 0L12 6L0 12V0Z" fill="white"/>
    </Svg>
  )
}

export { Play }
