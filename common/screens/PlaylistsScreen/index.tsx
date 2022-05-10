import React, { FC, useRef, useState } from 'react'
import { View, ScrollView, ImageBackground, Text } from 'react-native'
import styles from './styles'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import ActiveBackground from '@/assets/images/Playlist/ActiveBackground.png'
import playListBg1 from '@/assets/images/Playlist/playList_bg1.png'
import playListBg2 from '@/assets/images/Playlist/playList_bg2.png'

import SearchInput from '@/components/SearchInput'
import SmallCard from '@/components/PlayListItems/SmallCard'
import { AddIcon } from '@/assets/svgs'
import { Watch } from '@/assets/svgs/Watch'
import LargeCard from '@/components/PlayListItems/LargeCard'
import RBSheet from 'react-native-raw-bottom-sheet'
import CreatePlaylistModal from '@/components/CreatePlaylistModal'
import GradientBG from '@/assets/images/Playlist/GradientBG.png'
import { ratio } from '@/constants'
import { useHeaderHeight } from '@react-navigation/elements'
import Shadow from '@/components/Shadow'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const PlaylistsScreen: FC<Props> = ({ navigation, options }) => {
  const height = useHeaderHeight()
  let rbsheet = useRef(null)
  const [modalOpened, setModalOpened] = useState(false)
  const { paddingNone, gradientImageStyle, toplargeCard, gray, smallCardSmallText, smallCardBoldText, topCardsContainer, header, container, black, white, largeCardContainer } = styles
  const [data, setData] = useState([{ image: ActiveBackground }, { image: ActiveBackground }])
  const isEmpty = () => {
    return data?.length
  }
  const playListDataTop = [{ image: playListBg2 }, { image: playListBg1 }, { image: playListBg2 }]
  const playListDataBottom = [{ image: playListBg1 }, { image: playListBg2 }, { image: playListBg1 }]
  const openModal = () => {
    setModalOpened(true)
    rbsheet?.open()
  }
  const closeModal = () => {
    setModalOpened(false)
    rbsheet?.close()
  }

  return (
    <ImageBackground
      source={PlaylistScreenBG}
      resizeMode={'cover'}
      style={{
        width: '100%',
        flex: 1,
        paddingTop: height,
      }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 18 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, marginBottom: ratio.height * 12 }}>
          <Shadow>
            <SearchInput onChangeText={() => {
              console.log('Change SearchInput')
            }} />
          </Shadow>
        </View>
        <View style={topCardsContainer}>
          <SmallCard onPress={openModal}>
            <AddIcon width={32} height={32} iconColor={'black'} />
            <Text style={smallCardBoldText}>Create a playlist</Text>
          </SmallCard>

          <SmallCard
            childrenStyle={paddingNone}
            activeBackground={isEmpty() ? data[0].image : ''}
            onPress={() => navigation.navigate('PlaylistDetails', { title: 'Watch later' })} >
            <ImageBackground
              style={[gradientImageStyle, { paddingVertical: ratio.height * 27 }]}
              resizeMode="cover"
              source={isEmpty() ? GradientBG : ''}>
              <Watch width={32} height={32} color={isEmpty() ? 'white' : 'black'} />
              <Text style={[smallCardBoldText, isEmpty() ? white : black]}>Watch later</Text>
              <Text style={[smallCardSmallText, isEmpty() ? white : gray]}>{isEmpty() ? `${data.length} sessions` : 'No sessions yet'}</Text>
            </ImageBackground>
          </SmallCard>
        </View>

        <View style={largeCardContainer}>
          <LargeCard type='Tennis' onPress={() => navigation.navigate('PlaylistDetails', { title: 'Tennis' })} styleProp={toplargeCard} data={playListDataTop} />
          <LargeCard type='Baseball' onPress={() => navigation.navigate('PlaylistDetails', { title: 'Baseball', data: [] })} styleProp={toplargeCard} data={[]} />
          <LargeCard type='Leadership' onPress={() => navigation.navigate('PlaylistDetails', { title: 'Leadership' })} data={playListDataBottom} />
        </View>
      </ScrollView>

      <RBSheet
        ref={(ref) => {
          rbsheet = ref
        }}
        height={ratio.height * 323}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: ratio.width * 16,
            borderTopLeftRadius: ratio.width * 16,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#EDEDED',
            marginTop: ratio.height * 22,
            marginBottom: ratio.height * 35,
          },
        }}
        onClose={closeModal}>
        <CreatePlaylistModal onPress={closeModal} />
      </RBSheet>
    </ImageBackground>
  )
}

export default PlaylistsScreen
