import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Icon, IconProps } from '@ui-kitten/components'

import { theme } from '@/config/theme'

interface Props extends IconProps {
    size?: 'xs' | 'sm' | 'md' | 'lg',
    status?: 'basic' | 'primary' | 'warning'
}

const VSIcon: FC<Props> = ({ size = 'md', status = 'basic', ...props }) => {
  return (<Icon {...props} style={styles[size]} fill={theme[`color-${status}-default`]}/>)
}

const styles = StyleSheet.create({
  xs: { height: 12, width: 12 },
  sm: { height: 16, width: 16 },
  md: { height: 24, width: 24 },
  lg: { height: 56, width: 56 },
})

export default VSIcon
