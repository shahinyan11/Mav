/* eslint-disable max-len */
import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Chevron = ({ width, height, color }: Props): JSX.Element => {
  return (
    <Svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M14 5.3335L7.99999 11.3335L2 5.3335"
        stroke={color || 'white'}
        strokeWidth="1.5" />
    </Svg>

  )
}

export { Chevron }
