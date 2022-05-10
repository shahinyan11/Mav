import React, { FC } from 'react'
import Svg, { Path, Color } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  color?: Color
  styleProp?: object
}

const Sent: FC<Props> = ({ width, height, color, styleProp = {} }) => {
  return (
    <Svg width={width || 18} height={height || 16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M14.625 16L9.59961 13.0828L7.77621 14.8571L6.75 11.4286L14.625 3.42857L4.9725 9.96571L0 6.85714L18 0L14.625 16Z" fill="black"/>
    </Svg>

  )
}

export { Sent }
