import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Tick: FC<Props> = ({ width, height }) => {
  return (
    <Svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M2.445 7.704l3.88 3.63 7.231-7.778"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export { Tick }
