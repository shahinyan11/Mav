import React, { FC } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'
import styles from './style'
interface Props extends TextInputProps {
  styleProp?: object
  onChangeText: (value: string) => void
}

const SearchInput = (props: Props): JSX.Element => {
  return (
    <View style={[styles.InputContainer]}>
      <TextInput
        {...props}
        style={[styles.InputContainerItem, props.styleProp]}
        placeholder="Search"
        placeholderTextColor={props.styleProp?.color}
      />
    </View>
  )
}

export default SearchInput
