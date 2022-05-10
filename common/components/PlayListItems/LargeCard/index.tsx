import React, { FC, useState } from 'react'
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import GradientBG from '@/assets/images/Playlist/GradientBG.png'
import sessionBg_3 from '@/assets/images/Playlist/sessionBg_3.png'
import sessionBg_2 from '@/assets/images/Playlist/sessionBg_2.png'
import PlaylistItemBG from '@/assets/images/Playlist/PlaylistItemBG.png'
import { isEmpty } from 'lodash'

interface Props {
  styleProp?: object
  onPress: ()=>void
  data?: string
  type?: string
}

const LargeCard: FC<Props> = ({ onPress, data, styleProp = {}, type }) => {
  const [list, setList] = useState(data?.slice(0, 3))

  const { subTitle, title, gradienItem, gradienBackground, LargeCardContainerAhead, LargeBlockContainer, backgroundContainer, LargeCardContainerTheMiddle, LargeCardContainerEnd }= styles
  return (
    <View style={[LargeBlockContainer, styleProp]}>
      {!isEmpty(list) ? list.map((card, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.98}
            onPress={onPress}
            style={index ===0 ? LargeCardContainerAhead : index === 1 ? LargeCardContainerTheMiddle : LargeCardContainerEnd}
          >
            <ImageBackground style={backgroundContainer} resizeMode={'cover'}
              source={index === 0 ? card.image : index === 1 ? sessionBg_2 : sessionBg_3 }>
              <ImageBackground style={gradienBackground} resizeMode={'cover'} source={GradientBG}>
                <View style={gradienItem}>
                  <Text style={title}>{type}</Text>
                  <Text style={subTitle}>{data?.length} sessions</Text>
                </View>
              </ImageBackground>
            </ImageBackground>
          </TouchableOpacity>
        )
      })
        : <TouchableOpacity
          activeOpacity={0.98}
          onPress={onPress}
          style={ LargeCardContainerAhead }
        >
          <ImageBackground style={backgroundContainer} resizeMode={'cover'}
            source={PlaylistItemBG}>
            <View style={gradienItem}>
              <Text style={[title, { color: '#000000' }]}>{type}</Text>
              <Text style={[subTitle, { color: '#000000', opacity: 0.3 }]}>{data?.length} sessions</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      }
    </View>
  )
}

export default LargeCard


