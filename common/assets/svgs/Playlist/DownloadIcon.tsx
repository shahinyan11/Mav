import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string | number

}

const DownloadIcon: FC<Props> = ({ width, height, iconColor }) => {
  return (
    <Svg
      width={width || 29}
      height={height || 28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.982 13.589v1.373l4.9 3.586 4.9-3.586V13.59l-2.27 1.68c-.817.595-1.524 1.12-2.12 1.573V8.398h-1.046v8.43l-1.046-.786c-.34-.249-.592-.435-.758-.56a9.201 9.201 0 00-.288-.213l-2.272-1.68z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.5}
      />
      <Path
        stroke="#000"
        strokeWidth={1.5}
        d="M20.4824 20.6973L9.28242 20.6973"
      />
    </Svg>
  )
}

export { DownloadIcon }
