import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './styles'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import { useHeaderHeight } from '@react-navigation/elements'
import { useDispatch } from 'react-redux'

const DefaultPlayer = () => {
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(0)

  const resolutions = ['1080p', '720p', '360p']

  useEffect(() => {
    dispatch({ type: 'SET_RESOLUTION', payload: resolutions[selected] })
  }, [selected])

  return (
    <ImageBackground style={[styles.mainContainer, { paddingTop: headerHeight }]} resizeMode={'cover'} source={PlaylistScreenBG}>
      <View style={styles.defaultPlayerUi}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          {resolutions.map((resolution, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelected(index)
                }}
                style={styles.row}
              >
                <Text style={styles.defaultTxtStyle}>{resolution}</Text>
                <View style={styles.row_al_center}>
                  {index == selected ? (
                    <Image style={styles.tickStyle} resizeMode={'center'} source={require('@/assets/icons/tick.png')} />
                  ) : null}
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default DefaultPlayer
