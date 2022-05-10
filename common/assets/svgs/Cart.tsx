/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Cart: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1.71436 2.28564H5.88681L9.64717 19.0034L26.3883 19.0002C27.5121 18.9999 28.4232 19.9109 28.4232 21.0347V21.0347C28.4232 22.1583 27.5123 23.0692 26.3887 23.0692H6.86554" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M23.6069 29.7142C24.7448 29.7142 25.6673 28.7917 25.6673 27.6537C25.6673 26.5158 24.7448 25.5933 23.6069 25.5933C22.4689 25.5933 21.5464 26.5158 21.5464 27.6537C21.5464 28.7917 22.4689 29.7142 23.6069 29.7142Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M11.8813 29.7142C13.0192 29.7142 13.9417 28.7917 13.9417 27.6537C13.9417 26.5158 13.0192 25.5933 11.8813 25.5933C10.7433 25.5933 9.8208 26.5158 9.8208 27.6537C9.8208 28.7917 10.7433 29.7142 11.8813 29.7142Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M27.8843 9.34351H7.47412L9.64695 19.0034H22.4755L27.8843 9.34351Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export { Cart }
