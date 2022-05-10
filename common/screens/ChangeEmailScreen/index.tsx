import React, { useLayoutEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { BaseInput } from '@/components/inputs'
import { backgroundImages } from '@/assets/images'
import styles from './styles'
import Button from '@/views/general/Button'
import { useHeaderHeight } from '@react-navigation/elements'
import { icons } from '@/components/inputs/assets/icons'
import { useNavigation } from '@react-navigation/native'
import { Close } from '@/assets/svgs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { initiatePasswordReset } from '@/store/password/actions'
import { CardStyleInterpolators } from '@react-navigation/stack'

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ChangeEmailScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const headerHeight = useHeaderHeight()
  const [emailData, setEmailData] = useState({
    email: '',
    isValid: false,
    errorMessage: '',
  })
  const [password, setPassword] = useState('')

  const emailValidate = (email: string) => {
    const isValid = !!email.match(pattern)
    setEmailData({
      isValid,
      email,
      errorMessage: !isValid && email !== '' ? 'Invalid email' : '',
    })
  }
  const { email, isValid, errorMessage } = emailData

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Change email',
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

  const submit = () => {
    // Dispatch the change email action
    dispatch({ type: 'to be determined', payload: { email } })
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
          // style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.top}>
              <Text style={styles.text}>
                Enter your Versus registered email below to receive password reset instructions.
              </Text>
              <View>
                <BaseInput
                  label='Email'
                  placeholder='Email'
                  autoCapitalize='none'
                  value={email}
                  onChange={emailValidate}
                  errorMessage={errorMessage}
                />
                <BaseInput
                  label='Current password'
                  placeholder='Current password'
                  autoCapitalize='none'
                  value={password}
                  onChange={(value) => {
                    setPassword(value)
                  }}
                  secureIcon={icons.eye}

                />
              </View>

              <Text style={styles.forgotText}>
                Forgot Your Password?
              </Text>
              <TouchableOpacity onPress={() => {
                dispatch(initiatePasswordReset(''))
              }}>
                <Text style={styles.lastText}>
                  We can help you reset your password by sending you link to your email.
                  &nbsp;<Text style={{ color: '#016FD0' }}>Email me a link</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            status={1 ? 'primary' : 'control'}
            disabled={!isValid}
            customStyles={styles.button}
            onPress={submit}>
            <View>
              <Text style={styles.signInBtnStyle}>
                Done
              </Text>
            </View>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground >
  )
}
export default ChangeEmailScreen
