import { ratio } from '@/constants'
import React, { FC, useCallback } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface Props {
  width?: number,
  height?: number,
  color?: string,
}

const Watch: FC<Props> = ({ width, height, color }) => {
  const size = useCallback(() => {
    return {
      width: ratio.width * (width || 32),
      height: ratio.width * (height || 32),
    }
  }, [ratio, width, height])

  return (
    <Svg width={size().width} height={size().height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M16 8V16.6667L21 20"
        stroke={color || 'black'}
        strokeWidth="1.5" />
      <Circle
        cx="15.9997"
        cy="16.0007"
        r="13.9167"
        stroke={color || 'black'}
        strokeWidth="1.5" />
    </Svg>
  )
}

export { Watch }
