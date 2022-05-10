
import React, { FC } from 'react'
import Svg, { G, Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const More: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width ||4} height={height || 16} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C0.895431 16 -3.91387e-08 15.1046 -8.7421e-08 14C-1.35703e-07 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 -3.01409e-07 9.10457 -3.49691e-07 8C-3.97973e-07 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 9.10457 3.10457 10 2 10ZM-6.11958e-07 2C-5.63675e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -1.35705e-07 2 -8.74228e-08C0.89543 -3.91405e-08 -6.6024e-07 0.895431 -6.11958e-07 2Z" fill={color ||'#C0C0C0' }/>
    </Svg>
  )
}

export { More }
