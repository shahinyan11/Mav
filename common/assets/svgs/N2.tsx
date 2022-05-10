import React, { FC } from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const N2: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 76} height={height || 105} viewBox="0 0 76 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M22.36 88.584H75.208V105H0.616L1.048 97.368C1.432 89.496 3.064 82.44 5.944 76.2C9.496 68.424 16.84 61.992 27.976 56.904L38.056 51.72C44.008 48.84 48.232 45.912 50.728 42.936C53.224 39.96 54.472 36.264 54.472 31.848C54.472 27.144 52.984 23.448 50.008 20.76C47.032 17.976 42.904 16.584 37.624 16.584C25.816 16.584 19.912 22.824 19.912 35.304H1.192C1.096 24.264 4.216 15.672 10.552 9.52799C16.984 3.28799 26.2 0.167994 38.2 0.167994C49.24 0.167994 57.976 2.95199 64.408 8.52C70.84 14.088 74.056 21.384 74.056 30.408C74.056 38.184 71.896 44.808 67.576 50.28C63.256 55.656 56.392 60.696 46.984 65.4L37.48 70.44C32.104 73.32 28.312 76.056 26.104 78.648C23.992 81.144 22.744 84.456 22.36 88.584Z" fill="url(#paint0_linear_3_24502)"/>
      <Defs>
        <LinearGradient id="paint0_linear_3_24502" x1="21.8742" y1="-24.9837" x2="95.5042" y2="129.632" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD6D6"/>
          <Stop offset="1" stopColor="#DAEDFF"/>
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export { N2 }
