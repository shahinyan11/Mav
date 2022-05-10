import React, { FC } from 'react'
import Svg, { Path, Line, Rect } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Remove: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 18} height={height || 20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M2.70949 19.25L1.79282 2.75H16.2072L15.2905 19.25H2.70949Z" stroke="white" strokeWidth="1.5"/>
      <Line y1="2.25" x2="18" y2="2.25" stroke="white" strokeWidth="1.5"/>
      <Rect x="6.75" y="0.75" width="4.5" height="1.5" stroke="white" strokeWidth="1.5"/>
      <Line x1="9.25" y1="6" x2="9.25" y2="16" stroke="white" strokeWidth="1.5"/>
      <Path d="M12.5 6L12 16" stroke="white" strokeWidth="1.5"/>
      <Path d="M5.5 6L6 16" stroke="white" strokeWidth="1.5"/>
    </Svg>
  )
}

export { Remove }
