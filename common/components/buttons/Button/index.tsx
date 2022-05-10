import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'
interface Props {
  data: string
  onPress: () => void
  type?: string
  styleProp?: object
}

const Button: FC<Props> = ({ data, onPress, type, styleProp = {} }) => {
  let colorBtn = null
  let colorText = null
  switch (type) {
    case 'yellow':
      colorBtn = styles.yellowBG
      colorText = styles.grayText
      break
    case 'gray':
      colorBtn = styles.grayBG
      colorText = styles.whiteText
      break
    case 'white':
      colorBtn = styles.whiteBG
      colorText = styles.grayText
      break
    default:
      colorBtn = styles.yellowBG
      colorText = styles.grayText
      break
  }
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.btnStyle, colorBtn, styleProp]} onPress={onPress}>
      <Text style={[styles.btnText, colorText]}>{data}</Text>
    </TouchableOpacity>
  )
}

export default Button
