import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const ArrowRight: FC<Props> = ({ width, height }) =>{
  return (
    <Svg
      width={width || 17} height={height||14}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.915 15h1.962L17 8l-5.123-7H9.915l2.4 3.244c.85 1.167 1.6 2.176 2.247 3.028H0v1.495h14.543L13.42 10.26c-.356.485-.623.846-.8 1.082-.178.236-.28.373-.305.413L9.915 15z"
        fill="#000"
      />
    </Svg>
  )
}

export { ArrowRight }
