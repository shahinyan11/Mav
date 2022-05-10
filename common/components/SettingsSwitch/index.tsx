import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, Switch } from 'react-native'
import styles from './styles'

interface Props {
  title?:string
  titleColor?: string
  falseColor?:string
  trueColor?:string
  thumbColor?:string
  value?:any
  onValueChange?:()=>void
  disabled?:boolean
  stylesProps?: object
}

const SettingsSwitch : FC<Props> = ({ stylesProps={}, title, titleColor, falseColor, trueColor, thumbColor, value, onValueChange, disabled }) => {
  const { text, container, linkRightContainer, textContainer } = styles
  return (
    <View style={[container, stylesProps]}>
      <View style={textContainer}>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={[text, { color: titleColor ? titleColor : '#181A1C' }]}>
          {title}
        </Text>
      </View>
      <View style={linkRightContainer}>
        <Switch
          style={{ opacity: disabled ? 0.5 : 1 }}
          disabled={disabled}
          trackColor={{ false: falseColor, true: trueColor }}
          thumbColor={thumbColor}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  )
}

export default SettingsSwitch
