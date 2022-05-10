import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useColorMode } from 'native-base'

const Logo: FC = () => {
  const { colorMode } = useColorMode()
  const fill = colorMode === 'light' ? 'black' : 'white'

  return (
    <Svg width="32" height="20" viewBox="0 0 32 20" fill="none">
      <Path
        d="M20.6101 13.414C20.7264 14.2215 20.9562 14.8252 21.2994 15.2252C21.9268 15.9544 23.0005 16.3185 24.5206 16.3174C25.2714 16.34 26.021 16.2428 26.7399 16.0295C27.8169 15.6606 28.3559 14.9764 28.357 13.977C28.3636 13.7018 28.2932 13.4301 28.1535 13.1912C28.0138 12.9522 27.81 12.7551 27.5641 12.621C27.0365 12.309 26.1992 12.0329 25.052 11.7927L23.0926 11.3728C21.1678 10.9579 19.8457 10.5059 19.1262 10.0169C17.9056 9.20191 17.2958 7.92583 17.2969 6.18865C17.2803 5.44246 17.432 4.70187 17.741 4.01942C18.0501 3.33696 18.509 2.72938 19.0851 2.23977C20.2795 1.19103 22.0343 0.666656 24.3495 0.666656C26.2798 0.666656 27.9249 1.161 29.2849 2.1497C30.6449 3.13839 31.3577 4.57264 31.4236 6.45244H27.7911C27.7253 5.38761 27.2389 4.63161 26.3319 4.18445C25.6267 3.86704 24.8556 3.71449 24.0797 3.7389C23.0806 3.7389 22.2832 3.93138 21.6877 4.31635C21.4068 4.48349 21.1762 4.72036 21.0193 5.00288C20.8624 5.2854 20.7848 5.6035 20.7944 5.92485C20.7851 6.21899 20.8635 6.50943 21.0201 6.76076C21.1766 7.01209 21.4046 7.21346 21.6762 7.34033C22.0524 7.5473 22.8535 7.79125 24.0797 8.0722L27.2548 8.80407C28.6466 9.12577 29.6885 9.5547 30.3805 10.0909C31.4597 10.9219 31.9993 12.1262 31.9993 13.7036C32.0118 14.4721 31.8457 15.2334 31.5134 15.93C31.1811 16.6265 30.6914 17.2403 30.0811 17.7248C28.8045 18.7972 26.9993 19.3333 24.6654 19.3333C22.2832 19.3333 20.41 18.8073 19.0456 17.7554C17.6813 16.7034 16.9991 15.2558 16.9991 13.4124L20.6101 13.414Z"
        fill={fill}
      />
      <Path d="M12.0045 1.18299L6.0228 18.9151H9.93327L15.9149 1.18299H12.0045Z" fill={fill} />
      <Path d="M6.75324 9.61154L3.91047 1.18299H0L4.79719 15.407L6.75324 9.61154Z" fill={fill} />
    </Svg>
  )
}

export default Logo