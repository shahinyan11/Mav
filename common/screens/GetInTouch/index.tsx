import React, { FC } from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import styles from './styles'
import { useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import bg1 from '@/assets/images/getInTouchBg.png'
import bg2 from '@/assets/images/Rectangle8653.png'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import ContactUs from '@/components/ContactUs'
import { device } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const ArenasScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Background source={bg1} />
        <Foreground>
          <ScrollView contentContainerStyle={styles.content}>
            <ImageBackground source={bg2} style={{ flex: 0.6 }}>
              <View >
                <Text style={styles.title}>
                  Get in touch
                </Text>
                <ContactUs />
              </View>
            </ImageBackground>

          </ScrollView>
        </Foreground>
      </View>
    </SafeAreaView>

  )
}

export default ArenasScreen
