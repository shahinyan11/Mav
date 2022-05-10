import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { Props } from './types'
import styles from './styles'


const InputContainer: FC<Props> = ({ children, label }: Props) =>{
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContent}>
        {children}
      </View>
    </View>
  )
}

export default InputContainer
