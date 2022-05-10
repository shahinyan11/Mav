import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string | number

}

const RemoveIcon: FC<Props> = ({ width, height, iconColor }) => {
  return (
    <Svg
      width={width || 27}
      height={height || 27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.227 23.526L5.207 5.164h16.07l-1.02 18.362H6.226z"
        stroke={iconColor}
        strokeWidth={1.5}
      />
      <Path
        stroke={iconColor}
        strokeWidth={1.5}
        d="M3.31055 4.76758L23.1726 4.76758"
      />
      <Path
        stroke={iconColor}
        strokeWidth={1.5}
        d="M10.6816 2.95703H15.80229V4.76737H10.6816z"
      />
      <Path
        stroke={iconColor}
        strokeWidth={1.5}
        d="M13.4395 8.82813L13.4395 19.8626"
      />
      <Path
        d="M17.104 8.828l-.552 11.035M9.38 8.828l.552 11.035"
        stroke={iconColor}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export { RemoveIcon }
