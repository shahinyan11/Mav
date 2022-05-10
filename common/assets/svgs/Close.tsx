import React, { FC } from 'react'
import Svg, { Color, Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  styles?: object
  color?: Color
}

const Close: FC<Props> = ({ width, height, styles, color }) => {
  return (
    <Svg style={styles} width={width || 15} height={height || 15} viewBox="0 0 20 20" fill="none">
      <Path
        d="M3.33337 16.6676L16.6679 3.33301"
        stroke={color || 'black'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round" />
      <Path
        d="M16.6679 16.6676L3.33337 3.33301"
        stroke={color || 'black'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round" />
    </Svg>
  )
}

export { Close }
