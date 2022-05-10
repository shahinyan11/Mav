/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  color?: string
}

const Avatar: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 20} height={height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="9.99984" cy="6.66683" r="2.58333" stroke={color || 'black'} strokeWidth="1.5"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M3.6703 15.6736C5.22815 17.4106 7.48685 18.5002 9.99999 18.5002C12.5135 18.5002 14.7725 17.4103 16.3304 15.6728C14.9477 13.6542 12.6274 12.3335 10.0006 12.3335C7.37351 12.3335 5.05295 13.6546 3.6703 15.6736ZM18.1492 15.7973C16.6254 12.8489 13.5484 10.8335 10.0006 10.8335C6.45249 10.8335 3.37518 12.8494 1.85156 15.7983C3.66458 18.3417 6.6386 20.0002 9.99999 20.0002C13.3618 20.0002 16.3362 18.3412 18.1492 15.7973Z" fill={color || 'black'}/>
      <Circle cx="10" cy="10" r="9.25" stroke={color || 'black'} strokeWidth="1.5"/>
    </Svg>
  )
}

export { Avatar }
