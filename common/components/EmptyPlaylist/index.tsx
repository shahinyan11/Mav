import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { EmptyPlaylistIcon } from '@/assets/svgs/Playlist/EmptyPlaylistIcon'

export default function EmptyPlaylist(props:any) {
  const { container, content, text } = styles
  return (
    <View style={container}>
      <View style={{ alignItems: 'center' }}>
        <EmptyPlaylistIcon iconColor={'silver'} />
        <Text style={text}>No sessions yet</Text>
      </View>
    </View>
  )
}
