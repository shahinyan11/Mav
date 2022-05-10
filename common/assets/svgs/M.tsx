import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
  color?: string
}

const M: FC<Props> = ({ width, height, color }) =>{
  return (
    <Svg width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM13.4851 12.3636H9.17164V12.1215L10.1818 11.2327V6.16L7.70109 12.3636H7.31345L4.54545 6.11127V10.5382L5.81091 12.1215V12.3636H2.51491V12.1215L3.82327 10.5382V5.27127L2.66036 3.81745C2.66036 3.81745 2.66036 3.60727 2.66036 3.64H5.84291L8.31491 8.98764L10.4473 3.64H13.4684V3.81745L12.3636 4.74618V11.2327L13.4851 12.1215V12.3636Z" fill={color || '#888888'}/>
    </Svg>
  )
}

export { M }
