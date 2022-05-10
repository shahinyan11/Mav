import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Close, Folder } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import { NotesRoutes } from '@/config/routes'
import Button from '@/views/general/Button'
import styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const NoteComposerScreen = () => {
  const insets = useSafeAreaInsets()
  const route = useRoute()
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const { sessionId } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'New note',
      headerTintColor: '#fff',
      headerShown: true,
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NotesRoutes.NoteFolders.id)
          }}
        >
          <Folder color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Close color={'#fff'} width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <View style={[styles.container, { paddingTop: headerHeight + 24 }]}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#fff', borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
        {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      >
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <TextInput
            multiline={true}
            placeholder={'New note title'}
            placeholderTextColor={'rgba(22, 22, 22, 0.1)'}
            style={styles.title}
            onChangeText={setTitle}
            value={title}
          />
          <TextInput
            placeholder={'Share your thoughts'}
            placeholderTextColor={'rgba(22, 22, 22, 0.2)'}
            style={styles.text}
            multiline={true}
            onChangeText={setText}
            value={text}
          />
        </ScrollView>
        <View style={[styles.bottom, { paddingBottom: insets.bottom }]}>
          <Button
            status={'primary'}
            customStyles={styles.button}
            onPress={() => {
              console.log('Saving note...')
            }}
          >
            <Text style={{ ...styles.btnStyle, color: '#000' }}>Save draft</Text>
          </Button>
          <Button
            status={'control'}
            customStyles={styles.button}
            onPress={() => {
              AsyncStorage.getItem('notes').then((res) => {
                const arr = JSON.parse(res) || []
                arr.push({
                  id: sessionId,
                  title,
                  text,
                })
                AsyncStorage.setItem('notes', JSON.stringify(arr))
              })
            }}
          >
            <Text style={styles.btnStyle}>{'Save Note'}</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default NoteComposerScreen
