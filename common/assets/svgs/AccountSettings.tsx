import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const AccountSettings: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 48} height={height || 48} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M45.2966 33.591C44.9912 34.5216 44.6277 35.4232 44.1769 36.2811L46.9688 42.97L42.97 46.9688L36.2811 44.1769C35.4232 44.6277 34.5071 45.0058 33.5765 45.3112L30.8282 52H25.1718L22.4235 45.3112C21.4784 45.0058 20.5768 44.6277 19.7189 44.1769L13.03 46.9688L9.03123 42.97L11.8231 36.2811C11.3723 35.4232 11.0088 34.5216 10.7034 33.591L4 30.8282V25.1863L10.7034 22.4235C11.0088 21.4929 11.3723 20.5914 11.8231 19.7334L9.03123 13.03L13.03 9.04579L19.7189 11.8376C20.5768 11.3869 21.4784 11.0088 22.4235 10.7034L25.1718 4L30.8282 4.01456L33.5765 10.7034C34.5071 11.0088 35.4232 11.3869 36.2811 11.8376L42.97 9.04579L46.9688 13.03L44.1769 19.7334C44.6277 20.5914 44.9912 21.4929 45.2966 22.4235L52 25.1863V30.8282L45.2966 33.591Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M28.0001 39.5847C34.3981 39.5847 39.5847 34.3981 39.5847 28.0001C39.5847 21.6021 34.3981 16.4155 28.0001 16.4155C21.6021 16.4155 16.4155 21.6021 16.4155 28.0001C16.4155 34.3981 21.6021 39.5847 28.0001 39.5847Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M20.0059 36.3771C21.0056 32.9166 24.2024 30.3789 28.0035 30.3789C31.7936 30.3789 34.9905 32.9056 36.0011 36.3662" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M28.0034 26.9832C29.6603 26.9832 31.0034 25.64 31.0034 23.9832C31.0034 22.3263 29.6603 20.9832 28.0034 20.9832C26.3466 20.9832 25.0034 22.3263 25.0034 23.9832C25.0034 25.64 26.3466 26.9832 28.0034 26.9832Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export { AccountSettings }