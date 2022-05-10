/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Bell: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 20} height={height || 20} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1.56812 9.54558C1.56812 5.4411 4.89545 2.11377 8.99993 2.11377C13.1044 2.11377 16.4318 5.44111 16.4318 9.54559V16.9774H1.56812V9.54558Z" stroke={color || 'black'} strokeWidth="1.5"/>
      <Path d="M7.18175 18.1818V18.1818C7.18175 19.186 7.99578 20 8.99993 20V20C10.0041 20 10.8181 19.186 10.8181 18.1818V18.1818" stroke={color || 'black'} strokeWidth="1.5"/>
      <Path d="M9 0L9 1.81818" stroke={color || 'black'} strokeWidth="1.5"/>
    </Svg>
  )
}

export { Bell }
