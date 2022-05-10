import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number
  height?: string | number
  iconColor?: string | number

}

const EmptyPlaylistIcon: FC<Props> = ({ width, height, iconColor }) => {
  return (
    <Svg
      width={width || 66}
      height={height || 48}
      viewBox="0 0 66 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 0v37.161h66V0H0zm3.07 3.097h59.86v30.968H3.07V3.097zm24.438 4.597c-.755.06-1.402.802-1.391 1.596v18.581c.01 1.095 1.348 1.9 2.254 1.355l15.35-9.29c.91-.552.91-2.183 0-2.734l-15.35-9.29a1.461 1.461 0 00-.863-.218zm1.63 4.33l10.817 6.557-10.816 6.532V12.024zM8.443 40.258c-2.12 0-3.837 1.733-3.837 3.871S6.323 48 8.442 48c1.57 0 2.907-.96 3.501-2.323h49.452c.848 0 1.535-.693 1.535-1.548 0-.855-.687-1.548-1.535-1.548H11.943c-.594-1.363-1.931-2.323-3.501-2.323z"
        fill={iconColor}
      />
    </Svg>
  )
}

export { EmptyPlaylistIcon }
