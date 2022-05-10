import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const Folder = ({ width, height, color }: Props): JSX.Element => {
  return (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 8.5V17.5H19.5V8.5H16H11.5H4.5ZM14 7L12.4 5.8L10.9333 4.7C10.3275 4.24562 9.59063 4 8.83333 4H5.5C4.11929 4 3 5.11929 3 6.5V7V8.5V17.5V19H4.5H19.5H21V17.5V8.5V7H19.5H14ZM11.5 7L10.0333 5.9C9.68714 5.64036 9.26607 5.5 8.83333 5.5H5.5C4.94772 5.5 4.5 5.94772 4.5 6.5V7H5.5H6H8.83333H9.20833H11.5Z"
        fill={color || '#FFF'} />
    </Svg>

  )
}

export { Folder }
