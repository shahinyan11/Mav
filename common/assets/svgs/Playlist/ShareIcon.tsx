import React, { FC } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string | number

}

const ShareIcon: FC<Props> = ({ width, height, iconColor }) => {
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        stroke="#000"
        strokeWidth={1.5}
        d="M16.916 8.79201L9.91603 13.4587"
      />
      <Path
        transform="scale(-1 1) rotate(-33.69 24.504 37.165)"
        stroke="#000"
        strokeWidth={1.5}
        d="M0 -0.75L8.41295 -0.75"
      />
      <Circle
        cx={17.0837}
        cy={8.75065}
        r={2.16667}
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
      />
      <Circle
        cx={17.0837}
        cy={19.2507}
        r={2.16667}
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
      />
      <Circle
        cx={8.91667}
        cy={14.0007}
        r={2.16667}
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export { ShareIcon }
