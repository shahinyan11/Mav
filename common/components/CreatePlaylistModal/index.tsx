import React, { FC, useRef, useState, useEffect } from 'react'
import { View, Text, TextInput, ImageBackground } from 'react-native'
import styles from './style'
import VSButton from '@/views/general/Button'
import inputBG from '../../assets/images/Playlist/inputBG.png'
interface Props {
  onPress?: () => void
  containerStylesProp?: object
}

const CreatePlaylistModal: FC<Props> = ({ onPress }) => {
  const input = useRef<TextInput>(null)
  const [text, setText] = useState('')

  const disabled = () => {
    return text.length < 2
  }
  useEffect(() => {
    input?.current?.focus()
  }, [])

  return (
    <View style={styles.BottomSheetGlobalContainer}>
      <ImageBackground source={inputBG} style={styles.textInputContainer}>
        <TextInput
          ref={input}
          value={text}
          onChangeText={setText}
          maxLength={120}
          multiline
          placeholder="Name"
          style={styles.textInput} />
      </ImageBackground>

      <VSButton onPress={onPress} disabled={disabled()} customStyles={[disabled() ? styles.grey : styles.yellow, styles.btnStyle]}>
        <Text style={disabled() ? { color: '#888888' } : { color: '#000000' }}>Create</Text>
      </VSButton>
    </View>

  )
}

export default CreatePlaylistModal
