import { ratio } from '@/constants'
import React, { FC, useCallback } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  iconColor?: string
}

const ArrowLeft: FC<Props> = ({ width, height, iconColor }) => {
  const size = useCallback(() => {
    return {
      width: (ratio.width * (width || 24)),
      height: (ratio.width * (height || 24)),
    }
  }, [ratio, width, height])

  return (
    <Svg width={size().width} height={size().height} viewBox="0 0 24 24" fill="none" >
      <Path
        d="M11.0849 5H9.12326L4.00006 12L9.12326 19H11.0849L8.68522 15.7556C7.83452 14.589 7.08541 13.5796 6.43787 12.7275H21.0001V11.2331H6.45691C6.85052 10.7088 7.22507 10.2107 7.58059 9.73876C7.9361 9.25374 8.20273 8.89326 8.38049 8.6573C8.55825 8.42135 8.65982 8.28371 8.68522 8.24438L11.0849 5Z"
        fill={iconColor || 'white'}
      />
    </Svg >
  )
}

export { ArrowLeft }
