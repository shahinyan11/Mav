import React, { FC } from 'react'
import { View, ScrollView, ImageBackground } from 'react-native'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const ChangeEmail: FC<Props> = ({ navigation, options }) => {
  return (
    <View >
      <ImageBackground style={{ width: '100%', flex: 1 }} resizeMode={'cover'} source={PlaylistScreenBG}>
        <ScrollView>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default ChangeEmail
