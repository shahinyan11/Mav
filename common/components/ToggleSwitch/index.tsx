import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, Switch } from 'react-native'
import styles from './styles'
import SwitchToggle from 'react-native-switch-toggle'

interface Props {
  value?:any
  onValueChange?:()=>void
  disabled?:boolean
  stylesProps?: object
  isEnabled?:boolean
  togglePress?:()=>void
  title?:string
}

const ToggleSwitch : FC<Props> = (props, { stylesProps={}, title, togglePress, titleColor, falseColor, trueColor, thumbColor, value, onValueChange, disabled }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const { toggleContainerSty, txtHeading, toggleCircleStyle, textContainer } = styles
  console.log('title', title, isEnabled)
  const onToggleChange=()=>{
    console.log(isEnabled)
    setIsEnabled(!isEnabled)
    togglePress&&togglePress(!isEnabled)
  }

  return (
    <View style={styles.container}>
      <Text style={txtHeading}>{props.title}</Text>
      <SwitchToggle
        disabled
        switchOn={isEnabled}
        onPress={()=>onToggleChange()}
        circleColorOff="#ffffff"
        circleColorOn="#ffffff"
        backgroundColorOff={'#EDEDED'}
        backgroundColorOn="#2C2C2C"
        containerStyle={toggleContainerSty}
        circleStyle={toggleCircleStyle}
      />
    </View>
  )
}

export default ToggleSwitch
