import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Home: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 28} height={height || 28} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M13.6324 1.33725L13.002 0.730469L12.3716 1.33725L0.707169 12.5642L1.96804 13.7777L3.95837 11.8621V24.6665V25.5415H4.83337H21.1667H22.0417V24.6665V11.858L24.0362 13.7777L25.2971 12.5642L13.6324 1.33725ZM20.2917 10.1737L13.002 3.15759L5.70837 10.1777V23.7915H20.2917V10.1737Z" fill={color || 'black'}/>
    </Svg>
  )
}

export { Home }
