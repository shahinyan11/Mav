import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string
  styleRotate?: object
}

const Menu: FC<Props> = ({ width, height, iconColor, styleRotate }) => {
  return (
    <Svg width={width || 18} height={height || 18} style={styleRotate} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6C4.65685 6 6 4.65685 6 3ZM16 3C16 1.34315 14.6569 0 13 0C11.3431 0 10 1.34315 10 3C10 4.65685 11.3431 6 13 6C14.6569 6 16 4.65685 16 3ZM0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13ZM16 13C16 11.3431 14.6569 10 13 10C11.3431 10 10 11.3431 10 13C10 14.6569 11.3431 16 13 16C14.6569 16 16 14.6569 16 13Z"
        fill={iconColor || 'white'}
      />
    </Svg>
  )
}

export { Menu }
