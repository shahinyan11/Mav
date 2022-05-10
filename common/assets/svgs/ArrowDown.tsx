import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string
}

const ArrowDown: FC<Props> = ({ width, height }) => {
  return (
    <Svg width={width || 22} height={height || 22} viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M19 1L9.99998 9.99998L1 1" stroke="white" stroke-width="1.5" />
    </Svg>
  )
}

export { ArrowDown }
