import React, { FC, useState } from 'react'
import { View, Text, ImageBackground, Platform } from 'react-native'

import { BaseInput } from '@/components/inputs'
import { backgroundImages } from '@/assets/images'
import styles from './styles'
import Button from '@/views/general/Button'
import { titles } from './data'
import { useHeaderHeight } from '@react-navigation/elements'
import { KeyboardAvoidingView, ScrollView } from 'native-base'
import { useDispatch } from 'react-redux'

const initState = {
  email: '',
  isValid: false,
  isSent: false,
}

// eslint-disable-next-line max-len
const emailPattern
  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const PasswordResetScreen: FC = () => {
  const dispatch = useDispatch()
  const headerHeight = useHeaderHeight()
  const [stateData, setStateData] = useState(initState)
  const { isSent, email, isValid } = stateData

  const validateEmail = (email: string) => {
    setStateData({
      ...stateData,
      isValid: !!email.match(emailPattern),
      email,
    })
  }

  const sendPasswordResetInstructions = () => {
    dispatch(initiatePasswordReset(email))
  }

  return (
    <ImageBackground
      style={[styles.backgroundImage, { paddingTop: headerHeight + 24 }]}
      resizeMode={'cover'}
      source={backgroundImages.fgPassBg}
    >
      <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <Text style={styles.title}>{isSent ? titles.second : titles.first}</Text>
            <Text style={styles.text}>Enter your Versus registered email below to receive password reset instructions.</Text>
            <BaseInput label="Email" placeholder="Email" autoCapitalize="none" value={email} onChange={validateEmail} />
          </View>
          <View>
            {isSent && (
              <Button
                status={'control'}
                disabled={!isValid}
                customStyles={styles.button}
                onPress={() => {
                  setStateData({
                    ...stateData,
                    isSent: true,
                  })
                }}
              >
                <Text style={styles.signInBtnStyle}>Go to Sign in</Text>
              </Button>
            )}
          </View>
        </ScrollView>
        <View style={[styles.content]}>
          <Button
            status={isSent ? 'primary' : 'control'}
            disabled={!isValid}
            customStyles={styles.button}
            onPress={sendPasswordResetInstructions}>
            <View>
              <Text style={styles.signInBtnStyle}>{isSent ? 'Resend link' : 'Submit'}</Text>
            </View>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
export default PasswordResetScreen
