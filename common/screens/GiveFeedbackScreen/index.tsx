import React, { FC } from 'react'
import { View } from 'react-native'
import Foreground from '@/views/layout/Foreground'
import SubNav from '@/views/navigation/SubNav'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const GiveFeedbackScreen: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      </View>
    </SafeAreaView>
  )
}

export default GiveFeedbackScreen
