import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  color?: string
}

const Save: FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width || 16} height={height || 18} viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.61413 12.8569L1.25 16.6754V1C1.25 0.861929 1.36193 0.75 1.5 0.75H14.5C14.6381 0.75 14.75 0.861929 14.75 1V16.6754L8.38587 12.8569L8 12.6254L7.61413 12.8569Z" stroke={color} strokeWidth="1.5"/>
    </Svg>
  )
}

export { Save }
