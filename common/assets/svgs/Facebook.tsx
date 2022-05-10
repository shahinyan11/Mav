/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
  customStyle?: object
}

const Facebook: FC<Props> = ({ width, height, color, customStyle }) =>{
  return (
    <Svg style={customStyle} width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H8.72727V9.45455H6.54545V7.27273H8.72727V6.10109C8.72727 3.88291 9.808 2.90909 11.6516 2.90909C12.5345 2.90909 13.0015 2.97455 13.2225 3.00436V5.09091H11.9651C11.1825 5.09091 10.9091 5.504 10.9091 6.34036V7.27273H13.2029L12.8916 9.45455H10.9091V16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3484 0 14.5455 0Z" fill={color || '#888888'}/>
    </Svg>

  )
}

export { Facebook }
