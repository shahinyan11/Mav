import React, { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { Box } from 'native-base'

interface Props {
  children: ReactNode
}

const Foreground: FC<Props> = ({ children }) => {
  return <Box style={style.container}>{children}</Box>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 2,
  },
})

export default Foreground
