import { Input, InputProps } from '@ui-kitten/components'
import React, { FC, useState } from 'react'
import { Image, ImageProps, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import { icons } from '@/components/inputs/assets/icons'
import styles from './styles'
import { ratio } from '@/constants'

interface Props extends Omit<InputProps, 'onChange'> {
  name?: string
  onChange?: (name: string, value: string) => void
  label?: string
  labelStyles?: TextStyle
  errorMessage?: string
  errorMessageStyles?: TextStyle
  placeholder?: string
  secureIcon?: ImageProps
  rightIcon?: ImageProps
  rightIconPress?: () => void
  secureTextEntry?: boolean
  inputRef?: any
  rightIconStyles?: object
  wrapperStyle?: ViewStyle
}

export const BaseInput: FC<Props> = ({
  value,
  name,
  onChange,
  label,
  labelStyles,
  errorMessage,
  errorMessageStyles,
  secureTextEntry,
  placeholder,
  secureIcon,
  rightIcon,
  rightIconPress,
  inputRef,
  rightIconStyles = {},
  textStyle,
  wrapperStyle,
  ...props
}) => {
  const [secureText, setSecureText] = useState(!!secureIcon || secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)
  const handleChange = (text: string) => {
    if (onChange && name) {
      return onChange(name, text)
    }
    if (onChange) {
      onChange(text, '')
    }
    if (props.onChangeText) {
      props.onChangeText(text)
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputWrapper, ...wrapperStyle }}>
        {isFocused ? (
          <Text style={[styles.defaultLabelStyles, labelStyles]}>{label}</Text>
        ) : value ? (
          <Text style={[styles.defaultLabelStyles, labelStyles]}>{label}</Text>
        ) : null}
        <Input
          style={[
            styles.input,
            // !isFocused ? styles.inputWithoutLabel : undefined,
            styles.inputWithoutLabel,
            secureTextEntry ? styles.secureTextEntryInput : undefined,
          ]}
          onChangeText={handleChange}
          secureTextEntry={secureText}
          // textStyle={{ color: '#000' }}
          textStyle={textStyle || { color: '#000000', fontSize: 16 }}
          // label={undefined}
          // label={label}
          // label={evaProps => <Text {...evaProps}>Label</Text>}
          placeholderTextColor={'#888888'}
          size="small"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? '' : placeholder}
          ref={(ref) => inputRef && inputRef(ref)}
          {...props}
        />
        {value?.length ? secureIcon && (
          <TouchableWithoutFeedback
            onPress={() => {
              setSecureText(!secureText)
            }}
          >
            <Image
              source={secureText ? icons.eye : icons.openEye}
              // style={[styles.icon, styles.eyeIcon]}
              resizeMode={'contain'}
              style={{ position: 'absolute', right: 20, width: 17, height: 18, top: 25 }}
            // width={10}
            // height={10}
            // icon: {
            //   position: 'absolute',
            //   left: -8,
            //   top: '42%',
            //   transform: [{ translateY: -18 }],
            // },
            // // icon: {  zIndex:100
            // //  },
            // eyeIcon: { left: 'auto', right: 16, transform: [{ translateY: -4 }] },
            />
          </TouchableWithoutFeedback>
        ) : null}
        {rightIcon && (
          <TouchableWithoutFeedback
            onPress={() => {
              rightIconPress && rightIconPress()
            }}
          >
            <Image source={rightIcon} style={[styles.icon, styles.eyeIcon]} width={ratio.width*24} height={ratio.height*24} />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={{ width: '100%' }}>
        <Text style={[styles.defaultErrorMessageStyles, errorMessageStyles]}>{errorMessage}</Text>
      </View>

      {/* {*/}
      {/*  errorMessage*/}
      {/*    ? <Image*/}
      {/*      source={icons.error}*/}
      {/*      style={styles.icon}*/}
      {/*      width={16}*/}
      {/*      height={16}*/}
      {/*    />*/}
      {/*    : null*/}
      {/* }*/}
    </View>
  )
}
