import React, { FC, useState } from 'react'
import { Image, View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Platform } from 'react-native'
import { ScrollView, KeyboardAvoidingView } from 'native-base'
import Button from '@/views/general/Button'
import { BaseInput } from '@/components/inputs'
import { icons } from '@/components/inputs/assets/icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { backgroundImages } from '@/assets/images'
import { useHeaderHeight } from '@react-navigation/elements'
import { useDispatch, useSelector } from 'react-redux'
import { createSession, createSessionValidationErrors } from '@/store/session/actions'
import { emailRegex } from '@/utils/email'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootState } from '@/store'
import { makeAction } from '@/makeActions'
import { SessionActionType } from '@/store/session/types'
import { formatError } from '@/utils/mixins/FormatError'
import { ValidationErrors } from 'spraypaint/lib-esm/validation-errors'

const initState = {
  email: '',
  isValid: false,
  isSent: false,
  password: '',
}

const SignInScreen: FC = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const [rememberMe, setRememberMe] = useState(false)
  const [stateData, setStateData] = useState(initState)
  const { isSent } = stateData
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const errors = useSelector((state: RootState) => state.session.errors)
  const submit = async () => {
    // dispatch(createSession({ email, password }))
    // alert('CLICK')
    navigation.navigate('Home')
    // mainRoutes.BottomTabNavigator.id
  }

  const resetValidationErrors = () => {
    dispatch(createSessionValidationErrors(null))
  }

  const validateEmail = ((): boolean => {
    return emailRegex.test(email)
  })()

  const validatePassword = ((): boolean => {
    return password.length > 7
  })()

  const valid = ((): boolean => {
    return validateEmail && validatePassword
  })()

  const disabled = !valid

  return (
    <ImageBackground style={{ flex: 1, paddingTop: headerHeight }} resizeMode="cover" source={backgroundImages.fgPassBg}>
      <KeyboardAvoidingView style={styles.container} {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.height_35} />
          <BaseInput
            label="Email"
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onFocus={resetValidationErrors}
            onChange={setEmail}
          />

          <View style={styles.mrminus_5}>
            <BaseInput
              label="Password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              onFocus={resetValidationErrors}
              errorMessage={errors && formatError(errors)}
              secureIcon={icons.eye}
            />
          </View>

          <View style={styles.row_ai_justify_sb}>
            <View style={styles.flex_row_align_center}>
              <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                <Image resizeMode={'contain'} source={rememberMe ? icons.checkBox : icons.unCheck} style={styles.unCheckBtnStyle} />
              </TouchableOpacity>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <TouchableWithoutFeedback
              style={styles.flex_row_align_center}
              onPress={() => {
                navigation.navigate('PasswordReset')
              }}
            >
              <Text style={styles.forgotPasswordText}>Forgotten password?</Text>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20, paddingBottom: insets.bottom, paddingTop: 8 }}>
          <Button status={isSent ? 'primary' : 'control'} disabled={disabled} customStyles={styles.button} onPress={submit}>
            <Text style={styles.signInBtnStyle}>Sign In</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
export default SignInScreen
