import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Check: FC<Props> = ({ width, height }) => {
  return (
    <Svg width={width || 10} height={height || 9} viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path d='M0.555664 4.76285L3.65972 7.66656L9.44455 1.44434' stroke='white' strokeWidth='1.5' />
    </Svg>
  )
}

export { Check }
