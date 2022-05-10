import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string
}

const Tips: FC<Props> = ({ }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 16 22" fill="none">
      <Path
        d="M7.95592 21.8509L0.515108 11L7.95592 0.149066L15.3967 11L7.95592 21.8509Z"
        fill="white"
        stroke="black"
        strokeWidth="0.11875"
      />
    </Svg>
  )
}

export { Tips }
