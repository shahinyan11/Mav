import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { BaseInput } from '@/components/inputs'
import { backgroundImages } from '@/assets/images'
import Button from '@/views/general/Button'
import { icons } from '@/components/inputs/assets/icons'
import styles from './styles'
import { CircleCheck, Close } from '@/assets/svgs'
import User from '@/models/User'
import { useNavigation } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/elements'
import { ScrollView } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ratio } from '@/constants'
import RBSheet from 'react-native-raw-bottom-sheet'
import ResetPasswordConfirmationView from '@/components/BottomSheetComponents/ResetPasswordConfirmationView'
import { PasswordActionType } from '@/store/password/types'
import { SET_TOAST_MASSAGE } from '@/ActionsTypes'
import PasswordInput from '@/components/PasswordInput'
import { CardStyleInterpolators } from '@react-navigation/stack'

const ChangePasswordModal = () => {
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const rbsheet = useRef()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkList, setCheckList] = useState({
    upLowLetters: false,
    numericChars: false,
    specialChars: false,
  })
  const [isValid, setIsValid] = useState(false)

  const passwordValidate = (password: string) => {
    const upLowLetters = !!password.match(/(?=.*[a-z])(?=.*[A-Z])/)
    const numericChars = !!password.match(/(?=.*\d)/)
    const specialChars = !!password.match(/(?=.*[@$!%*#?&])/)
    const isValid = upLowLetters && numericChars && specialChars

    setNewPassword(password)
    setCheckList({
      upLowLetters,
      numericChars,
      specialChars,
    })
    setIsValid(isValid)

    const message = !isValid && password !== '' ? 'Invalid email' : ''

    // const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/
    // const isValid = !!password.match(pattern)
  }

  const getColor = (checked: boolean) => {
    return checked ? '#63E788' : '#C0C0C0'
  }

  const changePassword = async () => {
    closeModal()
    navigation.goBack()
    dispatch({ type: PasswordActionType.Reset, payload: { email: 'test@email.com' } })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Change Password',
      headerTintColor: '#000',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerLeft: () => <View />,
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <Close width={20} height={20} />
        </TouchableOpacity>
      ),
    })
  }, [])

  const openModal = () => {
    rbsheet.current.open()
  }
  const closeModal = () => {
    rbsheet.current.close()
  }

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: headerHeight, marginBottom: insets.bottom }}
      resizeMode='cover'
      source={backgroundImages.fgPassBg}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
        style={{ flex: 1, flexGrow: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.top}>
              <Text style={styles.text}>
                Please verify your current password to change to your password
              </Text>
              <PasswordInput
                setCurrentPassword={setCurrentPassword}
                currentPassword={currentPassword}
                setNewPassword={setNewPassword}
                newPassword={newPassword}
                setIsValid={setIsValid}
              />
              <Text style={styles.forgotText}>
                Forgot Your Password?
              </Text>
              <TouchableOpacity onPress={() => openModal()}>
                <Text style={[styles.text_14_20, { color: '#161616' }]}>
                  We can help you reset your password by sending you link to your email.
                  &nbsp;<Text style={{ color: '#016FD0' }}>Email me a link</Text>
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            status={currentPassword && isValid ? 'control' : 'primary'}
            disabled={!(currentPassword && isValid)}
            customStyles={styles.button}
            onPress={changePassword}>
            <View>
              <Text style={[styles.signInBtnStyle, { color: currentPassword && isValid ? '#000' : '#888888' }]}>
                Done
              </Text>
            </View>
          </Button>
        </View>
      </KeyboardAvoidingView>
      <RBSheet
        ref={rbsheet}
        height={274}
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
            marginTop: 16,
          },
        }}
        onClose={() => { }}>
        <ResetPasswordConfirmationView
          onPressConfirm={changePassword}
          onPressCancel={closeModal}
        />
      </RBSheet>
    </ImageBackground>
  )
}
export default ChangePasswordModal
