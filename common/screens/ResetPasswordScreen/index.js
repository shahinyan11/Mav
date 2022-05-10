import React, { useLayoutEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { backgroundImages } from '@/assets/images'
import Button from '@/views/general/Button'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { PasswordActionType } from '@/store/password/types'
import PasswordInput from '@/components/PasswordInput'
import { Close } from '@/assets/svgs'

const ResetPassword = () => {
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const [newPassword, setNewPassword] = useState('')
  const [isValid, setIsValid] = useState(false)


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Reset Password',
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

  const resetPassword = async () => {
    await dispatch({ type: PasswordActionType.ResetSuccess })
    await navigation.goBack()
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <ImageBackground
        style={{ flex: 1, paddingTop: headerHeight, marginBottom: insets.bottom }}
        resizeMode='cover'
        source={backgroundImages.fgPassBg}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={headerHeight}
          {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
          style={{ flex: 1, flexGrow: 1 }}>
          <View style={styles.content}>
            <View style={styles.top}>
              <Text style={styles.text}>
              Please create a new secure password
              </Text>
              <PasswordInput
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                passwordReset={true}
                setIsValid={setIsValid}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Button
              status={newPassword && isValid ? 'control' : 'primary'}
              disabled={!(newPassword && isValid)}
              customStyles={[styles.button, { backgroundColor: newPassword && isValid ? '#FFF200' : '#EDEDED' }]}
              onPress={resetPassword}>
              <View>
                <Text style={[styles.signInBtnStyle, { color: newPassword && isValid ? '#000' : '#888888' }]}>
                Done
                </Text>
              </View>
            </Button>
          </View>
        </KeyboardAvoidingView>

      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}
export default ResetPassword
