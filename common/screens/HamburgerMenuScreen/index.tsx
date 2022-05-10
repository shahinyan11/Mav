import React, { FC } from 'react'
import { Text } from '@ui-kitten/components'
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import SavedItem from '@/components/SavedItem'
import { menu } from '@/assets/images'
import { HamburgerMenuRoutes, mainRoutes, NotesRoutes } from '@/config/routes'
import Button from '@/views/general/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { backgroundImages } from '@/assets/images'
import { useNavigation } from '@react-navigation/native'
import { ratio } from '@/constants'
import MenuLinksList from '@/components/MenuLinksList'

const HamburgerMenuScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    navigation.navigate(mainRoutes.SignInScreen.id)
  }

  return (
    <ImageBackground
      source={backgroundImages.fgPassBg}
      resizeMode="cover"
      style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingTop: insets.top }]}>
        <View style={{ marginBottom: ratio.height * 15 }}>
          <Text style={styles.title}>Saved Items</Text>
          <View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Conversations')
                }}
                style={{ width: '100%' }}>
                <SavedItem
                  style={{ width: '100%' }}
                  item={{ title: 'Conversations', number: 2, img: menu.img2 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => {
                navigation.navigate(NotesRoutes.NoteFolders.id)
              }}>
                <SavedItem item={{ title: 'Notes & Tips', number: 4, img: menu.img3 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { }}>
                <SavedItem item={{ title: 'Articles', number: 8, img: menu.img4 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <MenuLinksList
          data={HamburgerMenuRoutes}
          onPress={(id: string) => {
            navigation.navigate(id)
          }} />

        <Button
          status={'basic'}
          customStyles={styles.button}
          onPress={logout}>
          <Text style={styles.buttonText}>Log out</Text>
        </Button>
      </ScrollView>
    </ImageBackground>
  )
}

export default HamburgerMenuScreen
