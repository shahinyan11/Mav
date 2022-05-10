import React, { useState, useRef, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ScrollView } from 'native-base'
import { SET_TOAST_MASSAGE } from '@/ActionsTypes'
import { useDispatch } from 'react-redux'
import RBSheet from 'react-native-raw-bottom-sheet'
import { colors, ratio } from '@/constants'
import BottomSheetItem from '@/components/BottomSheetComponents/BottomSheetItem'
import Share from '@/components/BottomSheetComponents/Share'
import { initiatePasswordReset } from '@/store/password/actions'
import { Bell } from '@/assets/svgs'
import { navigate } from '@/navigators/AppNavigator'
import topImg from '@/assets/images/2_402.png'
import { useConversationStarters, useStoryfile } from '@/hooks/useStoryfile'
import { mainRoutes, SettingsRoutes } from '@/config/routes'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  let rbsheet = useRef(null)
  const [modalOpened, setModalOpened] = useState(false)
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
    },
    {
      label: 'See full course',
      key: 'see_full_course',
    },
  ]
  const openModal = () => {
    // setModalOpened(true)
    rbsheet.open()
  }
  const closeModal = () => {
    setModalOpened(false)
    setActiveScreen('')
  }
  const [activeScreen, setActiveScreen] = useState()

  const changeBottomSheetItem = (evn) => {
    setActiveScreen(evn.key)
  }

  const isShare = () => {
    return activeScreen === 'share'
  }

  const resetPassword = () => {
    // dispatch(initiatePasswordReset('zack@unicorn.love'))
    navigation.navigate(SettingsRoutes.ChangePassword.id)
  }
  const _routeHandler = (id: string) => {
    navigate(id, {})
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home Screen',
      headerRight: () => (
        <TouchableOpacity
          style={{ position: 'relative' }}
          onPress={() => {
            navigation.navigate('Notifications', {})
          }}
        >
          <View style={{ position: 'relative' }}>
            <Bell color="#000" />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                top: -10,
                left: 8,
                backgroundColor: colors.yellow,
              }}
            >
              <Text>1</Text>
            </View>
          </View>
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <ScrollView>
      <View style={modalOpened ? { opacity: 0.1 } : null}>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => dispatch({ type: SET_TOAST_MASSAGE, payload: { type: 'success', text: 'Email sent', visible: true } })}
        >
          <Text>Hide Toas Success </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => dispatch({ type: SET_TOAST_MASSAGE, payload: { type: 'error', text: 'Article saved', visible: true } })}
        >
          <Text>Hide Toas Error </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={openModal}>
          <Text> Open Modal</Text>
        </TouchableOpacity>

        <RBSheet
          ref={(ref) => {
            rbsheet = ref
          }}
          height={ratio.height * 431}
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
            },
            draggableIcon: {
              backgroundColor: '#535353',
              marginTop: ratio.height * 22,
            },
          }}
          onClose={closeModal}
        >
          {isShare() ? <Share goBack={() => setActiveScreen('')} /> : <BottomSheetItem onPress={changeBottomSheetItem} data={data} />}
        </RBSheet>

        <TouchableOpacity onPress={resetPassword}>
          <Text>Password Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _routeHandler('CourseDetailScreen')} style={{ marginVertical: 20 }}>
          <Text>Course Detail Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('CelebrationScreen', { image: topImg, text: 'Completed 1st session!' })
        }}>
          <Text>Open Celebration Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => {
          navigation.navigate('Tips')
        }}>
          <Text> Open Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => {
          navigation.navigate('ResetPassword')
        }}>
          <Text>Reset Password Screen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  )
}

export default HomeScreen
