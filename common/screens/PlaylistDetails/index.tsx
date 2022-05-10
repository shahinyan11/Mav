import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { StackNavigationOptions } from '@react-navigation/stack'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import { Download } from '@/assets/svgs/Download'
import { Share } from '@/assets/svgs/Share'
import { ratio } from '@/constants'
import SessionCard from '@/components/SessionCard'
import RBSheet from 'react-native-raw-bottom-sheet'
import BottomSheetItem from '@/components/BottomSheetComponents/BottomSheetItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import { RemoveIcon } from '@/assets/svgs/Playlist/RemoveIcon'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import { useHeaderHeight } from '@react-navigation/elements'
import { playlists } from './data'
import { useNavigation } from '@react-navigation/native'

interface Props {
  options: StackNavigationOptions
  route: any
}

const PlaylistDetails: FC<Props> = ({ options, route }) => {
  const { descriptionStyles, dataStyles, content, title, subTitle } = styles
  const navigation = useNavigation()
  const modal = useRef<RBSheet>(null)
  const [dataLength, setDataLength] = useState<number>()
  const [modalOpened, setModalOpened] = useState(false)
  const [playlistData, setPlaylistData] = useState(playlists)

  const data = [
    {
      label: 'Download',
      key: 'download',
    },
    {
      label: 'Share',
      key: 'share',
    },
    {
      label: 'Save to Playlist',
      key: 'save_to_playlist',
    },
    {
      label: 'Remove',
      key: 'remove',
    }, {
      label: 'See full course',
      key: 'see_full_course',
    },
  ]

  useEffect(() => {
    if (route.params.data) {
      setDataLength(route.params.data.length)
    }
    else {
      setDataLength(playlistData.length)
    }
  }, [])


  const openModal = () => {
    setModalOpened(true)
    modal.current?.open()
  }
  const closeModal = () => {
    setModalOpened(false)
  }
  const changeBottomSheetItem = (evn) => {
    console.log(evn)
  }

  const closeSelect = (rowMap: any, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const onDelete = (rowMap: any, rowKey: number) => {
    closeSelect(rowMap, rowKey)
    const newArr = [...playlistData]
    const prevIndex = playlistData.findIndex((item) => item.id === rowKey)
    newArr.splice(prevIndex, 1)
    setPlaylistData(newArr)
  }

  const renderItem = (item: any) => {
    return (
      <SessionCard
        descriptionStyles={descriptionStyles}
        onPressMore={openModal}
        dataStyles={dataStyles}
        data={item.item}
        onPress={() => navigation.navigate('CourseDetailScreen')} />
    )
  }

  const renderHiddenItem = (data: any, rowMap: any) => {
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => onDelete(rowMap, data.item.id)}>
        <View style={{
          width: ratio.width * 330,
          height: ratio.height * 152,
          paddingHorizontal: ratio.width * 20,
          borderRadius: ratio.width * 8,
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'flex-end',

        }}>
          <RemoveIcon iconColor={'#FFFFFF'} />
        </View>
      </TouchableOpacity>
    )
  }
  const onRightActionStatusChange = (row: any) => {
    if (row.isActivated) {
      const newArr = [...playlistData]
      const prevIndex = playlistData.findIndex((item) => item.id == row.key)
      newArr.splice(prevIndex, 1)
      setPlaylistData(newArr)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerRight: () => (
        <>
          <TouchableOpacity style={{ marginHorizontal: ratio.width * 20 }} >
            <Share width={ratio.width * 28} height={ratio.height * 28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Download />
          </TouchableOpacity>
        </>
      ),
    })
  }, [navigation])

  const headerComponent = () => {
    return (
      <View style={content}>
        <Text style={title}>{route?.params?.title}</Text>
        {dataLength ? <Text style={subTitle}>{dataLength} sessions</Text> : null}
      </View>
    )
  }
  const headerHeight = useHeaderHeight()
  return (
    <ImageBackground
      style={{ width: '100%', flex: 1, paddingTop: headerHeight }}
      resizeMode={'cover'}
      source={PlaylistScreenBG}>
      <SwipeListView
        disableRightSwipe
        keyExtractor={(item: any) => item.id.toString()}
        data={route?.params?.data || playlistData}
        renderItem={renderItem}
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={() => <EmptyPlaylist title={route?.params.title} />}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        renderHiddenItem={renderHiddenItem}
        useNativeDriver={true}
        rightOpenValue={-75}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onRightActionStatusChange={onRightActionStatusChange}
      />
      <RBSheet
        ref={modal}
        height={ratio.height * 519}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: '#161616',
            borderTopRightRadius: ratio.width * 16,
            borderTopLeftRadius: ratio.width * 16,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(56)',
          },
          draggableIcon: {
            backgroundColor: '#535353',
            marginTop: ratio.height * 22,
          },
        }}
        onClose={closeModal}
      >
        <BottomSheetItem onPress={changeBottomSheetItem} data={data} />
      </RBSheet>
    </ ImageBackground >
  )
}

export default PlaylistDetails
