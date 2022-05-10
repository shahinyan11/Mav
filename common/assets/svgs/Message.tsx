import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Message: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 18} height={height || 18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.45809V16.5H16.5L16.5 7.45809L11.5121 11.6146L11.2896 11.8001H11H7H6.71036L6.48785 11.6146L1.5 7.45809ZM15.5404 6.17506L8.90882 1.8028L2.44357 6.16167L7.28964 10.2001H10.7104L15.5404 6.17506ZM0 6.00005L8.89953 0L18 6.00005L18 16.5V18H16.5H1.5H0V16.5V6.00005Z" fill="black"/>
    </Svg>
  )
}

export { Message }
