import React, { FC } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const CircleCheck: FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width || 16} height={height || 16} viewBox='0 0 16 16' fill='none' xmlns="http://www.w3.org/2000/svg">
      <Circle cx="8" cy="8" r="8" fill={ color || '#C0C0C0'}/>
      <Path d="M4.04883 7.78964L6.80799 10.3707L11.9501 4.83984" stroke="white" strokeWidth="1.5"/>
    </Svg>
  )
}

export { CircleCheck }
