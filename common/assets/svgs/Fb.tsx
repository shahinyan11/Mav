/* eslint-disable max-len */
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const Fb: FC<Props> = ({ width, height }) =>{
  return (
    <Svg width={width || 23} height={height || 23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M22.167 11.0835C22.167 4.9616 17.2054 0 11.0835 0C4.9616 0 0 4.9616 0 11.0835C0 16.6166 4.0524 21.2015 9.3517 22.0328V14.2873H6.53753V11.0835H9.3517V8.64167C9.3517 5.8643 11.0056 4.32949 13.5383 4.32949C14.7506 4.32949 16.0191 4.54597 16.0191 4.54597V7.27355H14.6207C13.2439 7.27355 12.8153 8.12862 12.8153 9.00534V11.0835H15.8892L15.3978 14.2873H12.8153V22.0328C18.1146 21.2015 22.167 16.6166 22.167 11.0835Z" fill="#016FD0"/>
    </Svg>
  )
}

export { Fb }
