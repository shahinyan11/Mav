import React, { FC } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Profile: FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28">
      <Path d="M17.0138 10.1106C17.0138 11.7751 15.6644 13.1245 13.9999 13.1245C12.3354 13.1245 10.986 11.7751 10.986 10.1106C10.986 8.44604 12.3354 7.09668 13.9999 7.09668C15.6644 7.09668 17.0138 8.44604 17.0138 10.1106Z" stroke={color || 'black'} strokeWidth="1.75" />
      <Path fillRule="evenodd" clipRule="evenodd" d="M6.30069 20.6392C8.16679 22.8012 10.924 24.1661 14 24.1661C17.0765 24.1661 19.8341 22.8008 21.7002 20.6382C20.0568 18.1269 17.2211 16.4717 14.0008 16.4717C10.7801 16.4717 7.94399 18.1274 6.30069 20.6392ZM23.5074 20.7628C21.7296 17.323 18.1398 14.9717 14.0008 14.9717C9.86128 14.9717 6.27108 17.3236 4.49353 20.764C6.60871 23.7312 10.0784 25.6661 14 25.6661C17.9222 25.6661 21.3923 23.7307 23.5074 20.7628Z" fill={color || 'black'} />
      <Circle cx="14" cy="13.9997" r="10.7917" stroke={color || 'black'} strokeWidth="1.75" />
    </Svg>
  )
}

export { Profile }
