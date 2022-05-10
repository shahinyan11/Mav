/* eslint-disable max-len */
import { ratio } from '@/constants'
import React, { FC } from 'react'
import Svg, { Path, Line, Color } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  color?: Color
}

const Download: FC<Props> = ({ width, height, color }) => {
  return (
    <Svg
      width={width || (ratio.width * 24)}
      height={height || (ratio.width * 24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80005 9.69406V12.154L11.4 16.7996L18 12.154L18.0001 9.69406L14.5804 12.1266C13.7584 12.7031 13.022 13.2265 12.3731 13.6955L12.3731 3.59961H10.3917L10.3917 13.6813C10.1066 13.4752 9.83078 13.2756 9.5643 13.0825L9.56095 13.0801C9.12607 12.7735 8.80406 12.5445 8.59414 12.3924C8.40167 12.253 8.27018 12.159 8.21497 12.1233L4.80005 9.69406ZM18 18.9301L4.80005 18.9301V20.7301L18 20.7301V18.9301Z"
        fill={color || '#000'} />
    </Svg>

  )
}

export { Download }
