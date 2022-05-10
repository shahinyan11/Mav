import React, { FC, useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import { ArrowLeft } from '@/assets/svgs'
interface Props {
  styleProp?: object
  goBack?: () => void
  title?: string
}

const Header: FC<Props> = ({ styleProp = {}, goBack, title, children }) => {
  return (
    <View style={[styles.container, styleProp]}>

      <TouchableOpacity onPress={goBack} activeOpacity={0.7} >
        <ArrowLeft iconColor={'black'} />
      </TouchableOpacity>
      <Text style={styles.title}> {title || ''}</Text>
      <View>
        {children}
      </View>

    </View>
  )
}

export default Header
