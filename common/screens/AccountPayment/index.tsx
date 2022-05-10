import React, { FC, useState, useRef, useEffect } from 'react'
import { View, ImageBackground, Text, ScrollView } from 'react-native'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from './styles'
import { BaseInput } from '@/components/inputs'
import { icons } from '@/components/inputs/assets/icons'
import VSButton from '@/views/general/Button'
import PaymentCard from '@/components/PaymentCard'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { SettingsRoutes } from '@/config/routes'
import { ratio } from '@/constants'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const AccountPayment: FC<Props> = ({ navigation }) => {
  const headerHeight = useHeaderHeight()
  const [email, setEmail] = useState('arina.troitskaia@company.com')
  const [password, setPassword] = useState('123456')

  return (
    <ImageBackground
      source={PlaylistScreenBG}
      resizeMode={'cover'}
      style={{
        width: '100%',
        flex: 1,
        paddingTop: headerHeight,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Account</Text>
          <BaseInput
            label="Email"
            placeholder="Email"
            autoCapitalize='none'
            value={email}
            rightIcon={icons.edit}
            rightIconPress={() => {
              navigation.navigate(SettingsRoutes.ChangeEmail.id)
            }}
            disabled={true}
            rightIconStyles={{
              width: 24,
              height: 24,
            }}
          />
          <BaseInput
            label="Password"
            placeholder="Password"
            value={password}
            rightIcon={icons.edit}
            rightIconPress={() => {
              navigation.navigate(SettingsRoutes.ChangePassword.id)
            }}
            disabled={true}
            secureTextEntry={true}
            rightIconStyles={{
              width: ratio.width*24,
              height: ratio.width*24,
            }}
          />
          <Text style={[styles.title, styles.paymentText]}>Payment Method</Text>

          <PaymentCard />

          <VSButton customStyles={styles.changePaymentMethod}>
            <Text>Change payment method</Text>
          </VSButton>
        </View>
      </ScrollView>

    </ImageBackground>
  )
}

export default AccountPayment
