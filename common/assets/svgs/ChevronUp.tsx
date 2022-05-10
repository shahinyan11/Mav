/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const ChevronUp: FC<Props> = ({ width, height }) => {
  return (
    <Svg width={width || 16} height={height || 16} viewBox={`0 0 ${width || 16} ${height || 16}`} fill="none">
      <Path d="M2.00002 11.333L8.00001 5.33302L14 11.333" stroke="white" strokeWidth="1.5" />
    </Svg>
  )
}

export { ChevronUp }
