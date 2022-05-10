import React, { FC } from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Play: FC<Props> = ({ width, height }) =>{
  return (
    <Svg
      width={width || 12}
      height={height || 12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.55 10.42V1.58L10.388 6 1.55 10.42z"
        fill="url(#paint0_linear_1308_18330)"
        stroke="url(#paint1_linear_1308_18330)"
        strokeWidth={0.1}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1308_18330"
          x1={3.16628}
          y1={3.23048}
          x2={10.3722}
          y2={9.49485}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FADD94" />
          <Stop offset={1} stopColor="#CE9E21" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1308_18330"
          x1={3.79812}
          y1={2.88438}
          x2={9.65734}
          y2={8.23271}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFC4" />
          <Stop offset={1} stopColor="#B98F23" stopOpacity={0.76} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export { Play }
