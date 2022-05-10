/* eslint-disable max-len */

import React, { FC } from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
  customStyle?: object
}

const Edit: FC<Props> = ({ width, height, color, customStyle }) =>{
  return (
    <Svg style={customStyle} width={width || 24} height={ height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect x="14.7628" y="5.96007" width="2.56695" height="14.7678" transform="rotate(30 14.7628 5.96007)" stroke="black" strokeWidth="1.5"/>
      <Path d="M6.76086 22.3882L6.35547 19.0234L9.87755 21.0569L6.76086 22.3882Z" fill={color ||'black' }/>
      <Rect x="16.4581" y="3.02452" width="2.56695" height="1.88912" transform="rotate(30 16.4581 3.02452)" fill={color ||'black' } stroke="black" strokeWidth="1.5"/>
    </Svg>
  )
}

export { Edit }
