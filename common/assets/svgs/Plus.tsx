import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Plus: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 40} height={height||40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M20 28V12" stroke="black" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
      <Path d="M28 20H12" stroke="black" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
    </Svg>
  )
}

export { Plus }
