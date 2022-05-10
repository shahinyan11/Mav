import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, ViewProps } from 'react-native'
import Button from '@/views/general/Button'
import inputBG from '@/assets/images/notes/29612557.png'
import styles from './styles'

type NoteFolderData = {
  name: string
}

interface NotesFolderFormProps extends ViewProps {
  onSubmit: (folder: NoteFolderData) => void
}

const NotesFolderForm = ({ onSubmit, onLayout }: NotesFolderFormProps) => {
  const [name, setName] = useState<string>('')
  const disabled = name.length < 2

  const submit = () => {
    onSubmit({
      name: name,
    })
  }

  return (
    <View style={{ paddingHorizontal: 22 }} onLayout={onLayout}>
      <View style={styles.inputContain}>
        <ImageBackground
          source={inputBG}
          style={styles.image}>
          <TextInput
            multiline={true}
            autoFocus={true}
            blurOnSubmit={false}
            placeholder={'New notes folder name'}
            placeholderTextColor={'rgba(136, 136, 136, 1)'}
            style={styles.title}
            onChangeText={setName}
            value={name}
          />
        </ImageBackground>
      </View>
      <View style={{ paddingBottom: 24 }}>
        <Button
          onPress={submit}
          status={'info'}
          disabled={disabled}
          customStyles={styles.button}>
          <Text style={{ ...styles.btnStyle, color: disabled ? '#FFF' : '#000' }}>
            Create
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default NotesFolderForm
