import React, { FC, useState } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import { useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import img from '@/assets/images/talent.png'
import sessionBackground from '@/assets/images/sessionImage.png'
import Foreground from '@/views/layout/Foreground'
import CourseCard from '@/components/cards/CourseCard'
import { BlurTint, BlurView } from 'expo-blur'
import SessionCard from '@/components/cards/SessionCard'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}


const NewScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Foreground>
          <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
            <ScrollView>
              <CourseCard data={{
                title: 'Breaking Boundaries',
                subTitle: 'Lebron James',
                img: img,
              }}/>
              <SessionCard data={{
                epNumber: 1,
                duration: '30 mins',
                topic: 'Breaking Boundaries',
                title: 'Breaking boundaries',
                description: 'How do you tune our your critics, your doubts, and your fears? How do you tune our your critics, your doubts, and your fears?',
                background: sessionBackground,
                teacher: 'Jessica Mendoza',

              }} />
            </ScrollView>

          </BlurView>
        </Foreground>
      </View>
    </SafeAreaView>
  )
}

export default NewScreen
