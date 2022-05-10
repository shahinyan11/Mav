
import React, { FC } from 'react'
import Svg, { Path, Color } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  color?: Color
  styleProp?: object
}

const Send: FC<Props> = ({ width, height, color, styleProp = {} }) => {
  return (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 24C18.6274 24 24 18.6274 24 12V12C24 5.37258 18.6274 2.34843e-07 12 5.24537e-07V5.24537e-07C5.37258 8.1423e-07 -8.1423e-07 5.37258 -5.24537e-07 12V12C-2.34843e-07 18.6274 5.37258 24 12 24V24Z"
        fill="white" />
      <Path
        d="M14.2829 20C15.3251 17.325 20 4 20 4C20 4 6.66394 8.67593 4 9.7137C4 9.7137 10.0505 12.0008 11.625 12.3799C11.959 13.7731 14.2829 20 14.2829 20Z"
        stroke={color || '#000'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <Path
        d="M20 4L12 12"
        stroke={color || '#000'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </Svg>

  )
}

export { Send }
