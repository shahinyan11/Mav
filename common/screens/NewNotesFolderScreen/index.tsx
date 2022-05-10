import React, { useLayoutEffect, useState } from 'react'
import { View, Text, Image, TextInput, Pressable, Platform, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Button from '@/views/general/Button'
import { CardStyleInterpolators } from '@react-navigation/stack'
import imgSrc from '@/assets/images/notes/29612557.png'
import styles from './styles'
import { customInterpolator } from '@/helpers'

const NewNotesFolderScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      cardStyleInterpolator: customInterpolator,
      presentation: 'transparentModal',

    })
  })

  function create() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'flex-end' }}
        {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}>
        <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }} />
        <View style={styles.content}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.line} />
            <View style={styles.inputContain}>
              <Image source={imgSrc} style={styles.image} />
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
            </View>
          </View>
          <View style={styles.bottom}>
            <Button
              onPress={create}
              status={'info'}
              disabled={name.length < 2}
              customStyles={styles.button}>
              <Text style={{ ...styles.btnStyle, color: name.length < 2 ? '#FFF' : '#000' }}>
                {'Create'}
              </Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>

  )
}

export default NewNotesFolderScreen
