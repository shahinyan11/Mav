import React, { useLayoutEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, Text, FlatList, ImageBackground, ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Close, FolderAdd } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import { notesData } from '@/screens/NoteFoldersScreen/notesData'
import styles from './styles'
import { NotesRoutes } from '@/config/routes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import NotesFolderForm from '@/components/NotesFolderForm'
import { ratio } from '@/constants'

interface NoteFolderProps {
  id: string
  name?: string
  title: string
  count: number
  img: ImageSourcePropType
  special?: boolean
}

const NoteFolderCard = ({ name, title, count, img, special }: NoteFolderProps) => {
  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 21,
        paddingHorizontal: 16,
      }}>
        <View>
          {name && (<Text style={styles.name}>{name}</Text>)}
          <Text style={{ ...styles.title, color: special ? '#000' : '#fff' }}>{title}</Text>
        </View>
        <View>
          <Text style={[styles.count, special && { color: '#888888' }]}>{`${count} notes`}</Text>
        </View>
      </View>
    </ImageBackground >
  )
}

const NoteFoldersScreen = () => {
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()
  const modal = useRef<RBSheet>(null)

  // NotesFolderForm height
  // calculate this onLayout to size the modal properly
  const [height, setHeight] = useState<number>(302)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'notes & Tips',
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            modal.current?.open()
          }}>
          <FolderAdd />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Close color={'#fff'} width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <View style={[styles.container, { paddingTop: headerHeight + 22 }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ ...styles.scroll, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        ItemSeparatorComponent={() => <View style={{ width: 16, height: 16 }} />}
        columnWrapperStyle={{ justifyContent: 'space-between', width: width - 40 }}
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: 20, paddingBottom: insets.bottom, paddingTop: 25 }]}
        data={notesData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              width: (width - 56) / 2,
              height: ((width - 56) / 2) * 1.25,
              borderRadius: 8,
              overflow: 'hidden',
            }}
            onPress={() => {
              navigation.navigate(NotesRoutes.Notes.id, { screen: NotesRoutes.NotesFolder.id })
            }}>
            <NoteFolderCard {...item} special={index === 0} />
          </TouchableOpacity>
        )} />

      <RBSheet
        ref={modal}
        openDuration={250}
        height={height + insets.bottom}
        closeOnDragDown={true}
        animationType="fade"
        customStyles={{
          container: {
            backgroundColor: '#161616',
            borderTopRightRadius: ratio.width * 16,
            borderTopLeftRadius: ratio.width * 16,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#535353',
            marginTop: 13,
            height: 4,
            width: 38,
          },
        }}>
        <View onLayout={({ nativeEvent }) => {
          setHeight(nativeEvent.layout.height)
        }}>
          <NotesFolderForm
            onSubmit={(data) => {
              console.log(data)
            }} />
        </View>
      </RBSheet>
    </View>
  )
}

export default NoteFoldersScreen
