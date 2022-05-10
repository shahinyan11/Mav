import React, { FC, useState } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { Check, CircleCheck } from '@/assets/svgs'
import { ScrollView } from 'native-base'
import { BaseInput } from '@/components/inputs'
import { icons } from '@/components/inputs/assets/icons'
import styles from './styles'
import Button from '@/views/general/Button'
import { useHeaderHeight } from '@react-navigation/elements'
import { useDispatch, useSelector } from 'react-redux'
import { validateEmail } from '@/utils/email'
import { validatePasswordParts } from '@/utils/password'
import { backgroundImages } from '@/assets/images'
import { registerUser } from '@/store/registration/actions'
import { RootState } from '@/store'

const SignUpScreen: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [marketing, setMarketing] = useState(true)
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()
  const { errors } = useSelector((state: RootState) => state.registration)

  const submit = async () => {
    if (disabled) return

    dispatch(registerUser({ name, email, password, terms, marketing }))
  }

  const getColor = (checked: boolean) => {
    return checked ? '#63E788' : '#C0C0C0'
  }

  const validName = (() => {
    return name.trim().length >= 2
  })()

  const validEmail = ((): boolean => {
    return validateEmail(email)
  })()

  const check = (() => {
    return validatePasswordParts(password)
  })()

  const validPassword = ((): boolean => {
    return Object.values(check).every((value) => value)
  })()

  const disabled = ((): boolean => {
    return [validName, validEmail, validPassword, terms].some((check) => check === false)
  })()

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: headerHeight }}
      resizeMode="cover"
      source={backgroundImages.fgPassBg}>
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
        style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerStyle}>
          <Text style={styles.title}>Sign Up</Text>
          <BaseInput
            label='Full name'
            placeholder='Full name'
            autoCapitalize='words'
            value={name}
            onChange={setName}
          />
          <BaseInput
            label='Email'
            placeholder='Email'
            autoCapitalize='none'
            value={email}
            onChange={setEmail}
            errorMessage={errors?.email.fullMessage}
          />
          <BaseInput
            label='Password'
            placeholder='Password'
            value={password}
            onChange={setPassword}
            secureIcon={icons.eye}
          />
          <View style={{ marginVertical: 16 }}>
            <Text style={styles.requirements}>
              Password requirements
            </Text>
            <View style={styles.checkListItem}>
              <CircleCheck color={getColor(check.case)} />
              <Text style={[styles.text_14_20, styles.checkText]}>Uppercase and lowercase letter (A,z)</Text>
            </View>
            <View style={styles.checkListItem}>
              <CircleCheck color={getColor(check.numeric)} />
              <Text style={[styles.text_14_20, styles.checkText]}>Numeric character (0-9)</Text>
            </View>
            <View style={styles.checkListItem}>
              <CircleCheck color={getColor(check.special)} />
              <Text style={[styles.text_14_20, styles.checkText]}>Special character (!,%,#, etc)</Text>
            </View>
          </View>
          <View>
            <View style={styles.flex_row_align_center}>
              <TouchableWithoutFeedback onPress={() =>
                setTerms(!terms)
              }>
                <View style={[styles.checkBtn, (terms ? { backgroundColor: '#000' } : {})]}>
                  <Check />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.text}>
                By creating an account you agree to our Terms of Service Conditions and Privacy Policy.
              </Text>
            </View>
            <View style={styles.flex_row_align_center}>
              <TouchableWithoutFeedback onPress={() =>
                setMarketing(!marketing)
              }>
                <View style={[styles.checkBtn, (marketing ? { backgroundColor: '#000' } : {})]}>
                  <Check />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.text}>
                Sign me up to the Versus newsletter
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            disabled={disabled}
            onPress={submit}
            status="control"
            customStyles={styles.button}>
            <Text style={styles.signInBtnStyle}>
              Create account
            </Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
export default SignUpScreen
