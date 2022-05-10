import React, { FC } from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'
import PlaylistItemBG from '@/assets/images/Playlist/PlaylistItemBG.png'
interface Props {
  styleProp?: object
  onPress: () => void
  activeBackground?: string
  imageStylesProp?: object
  childrenStyle?: object
}

const SmallCard: FC<Props> = ({ onPress, activeBackground, styleProp = {}, imageStylesProp = {}, childrenStyle = {}, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.SmallCardContainer, styleProp]}>
      <ImageBackground style={[styles.backgroundContainer, imageStylesProp]} resizeMode={'cover'} source={activeBackground || PlaylistItemBG}>
        <View style={[styles.SmallCardContainerItem, childrenStyle]}>
          {children}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default SmallCard
