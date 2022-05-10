import React, { FC, useLayoutEffect, useState } from 'react'
import VSButton from '@/views/general/Button'
import styles from './styles'
import { View, Text, ImageBackground, Platform, TouchableOpacity } from 'react-native'
import { BaseInput } from '@/components/inputs'
import { backgroundImages } from '@/assets/images'
import { useHeaderHeight } from '@react-navigation/elements'
import { KeyboardAvoidingView, ScrollView } from 'native-base'
import { CheckRequireIcon } from '@/assets/svgs/CheckRequireIcon'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { Close } from '@/assets/svgs'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const NewPassword: FC<Props> = ({ navigation }) => {
  const headerHeight = useHeaderHeight()
  const [password, setPassword] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Change password',
      headerRight: () => (
        <TouchableOpacity
          style={{ position: 'relative' }}
          onPress={() => {
            navigation.goBack()
          }}>
          <View style={{ position: 'relative' }}>
            {headerRight()}
          </View>
        </TouchableOpacity>
      ),
      headerLeft: () => (<View></View>),
    })
  }, [navigation])

  const disabled = () => {
    return !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,}$/gi)
  }

  const latinoOnly = () => {
    return !/[A-Z,a-z]/g.test(password)
  }

  const onlyNumber = () => {
    return !/[0-9]/g.test(password)
  }

  const onlySymbol = () => {
    return !/[@$!%*?&]/g.test(password)
  }

  const onSubmit = () => {
    navigation.navigate('AccountPayment')
  }

  const headerRight = () => {
    return <Close width={24} height={24} />
  }

  return (
    <ImageBackground
      style={[styles.backgroundImage, { paddingTop: headerHeight }]}
      resizeMode={'cover'}
      source={backgroundImages.fgPassBg}>
      <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <Text style={styles.text}>
              Please create a new secure password
            </Text>
            <BaseInput
              label='New password'
              placeholder='New password'
              autoCapitalize='none'
              value={password}
              onChange={setPassword}
              secureIcon={password.length ? true : null}
            />

            <Text style={styles.requirements}>
              Password requirements
            </Text>

            <View style={styles.requiredTextContainer}>
              <CheckRequireIcon color={latinoOnly() ? '#888888' : null} />
              <Text style={styles.requiredText}>Uppercase and lowercase letter (A,z)</Text>
            </View>
            <View style={styles.requiredTextContainer}>
              <CheckRequireIcon color={onlyNumber() ? '#888' : null} />
              <Text style={styles.requiredText}>Numeric character (0-9)</Text>
            </View>
            <View style={styles.requiredTextContainer}>
              <CheckRequireIcon color={onlySymbol() ? '#888' : null} />
              <Text style={styles.requiredText}>Special character (!,%,#, etc)</Text>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.content]}>
          <VSButton onPress={onSubmit} disabled={disabled()} customStyles={[disabled() ? styles.grey : styles.yellow, styles.btnStyle]}>
            <Text style={disabled() ? { color: '#888888' } : { color: '#000000' }}>Reset</Text>
          </VSButton>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground >
  )
}
export default NewPassword
