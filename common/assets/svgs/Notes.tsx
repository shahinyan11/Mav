/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string
  styleRotate?: object
}

const Notes: FC<Props> = ({ width, height}) => {
  return (
    <Svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 16 18"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.1 0C5.04477 0 5 0.0447714 5 0.0999999V2.9C5 2.95523 5.04477 3 5.1 3H10.9C10.9083 3 10.9163 2.999 10.924 2.9971C10.9678 2.9865 11.0004 2.947 11.0004 2.8999V2H11V0.1C11 0.0447715 10.9552 0 10.9 0H5.1ZM1 2H3.40039V2.8999C3.40039 3.83878 4.1615 4.5999 5.10039 4.5999H10.9004C11.8393 4.5999 12.6004 3.83879 12.6004 2.8999V2H15C15.5523 2 16 2.44772 16 3V17C16 17.5523 15.5523 18 15 18H1C0.447715 18 0 17.5523 0 17V3C0 2.44772 0.447715 2 1 2ZM2 8.3C2 8.13431 2.13431 8 2.3 8H13.7C13.8657 8 14 8.13431 14 8.3V9.7C14 9.86569 13.8657 10 13.7 10H2.3C2.13432 10 2 9.86569 2 9.7V8.3ZM2.3 12C2.13431 12 2 12.1343 2 12.3V13.7C2 13.8657 2.13432 14 2.3 14H13.7C13.8657 14 14 13.8657 14 13.7V12.3C14 12.1343 13.8657 12 13.7 12H2.3Z" fill="white" />
    </Svg>
  )
}

export { Notes }
