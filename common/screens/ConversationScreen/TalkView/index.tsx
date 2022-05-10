import React, { FC, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { BlurView } from 'expo-blur'
import { useHeaderHeight } from '@react-navigation/elements'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import { deg } from 'react-native-linear-gradient-degree'
import { Record, Save } from '@/assets/svgs'

const TalkView: FC = () => {
  const [CCOpened, setCCOpened] = useState(false)
  const headerHeight = useHeaderHeight()
  return (
    <View style={{ ...styles.mainContainer, paddingTop: headerHeight }}>
      <LinearGradient
        style={{ height: 478, justifyContent: 'flex-end' }}
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.56)',
          'rgba(0, 0, 0, 1)',
        ]}
        {...deg(180)}>
        <View style={styles.questionsContainer}>
          <View style={styles.scrollContainer}>
            <BlurView
              style={{ marginBottom: 16, borderRadius: 8, overflow: 'hidden' }}
              intensity={56} tint='dark'>
              <TouchableOpacity onPress={() => setCCOpened(!CCOpened)}>
                <BlurView
                  intensity={100}
                  tint="dark"
                  style={{ ...styles.message, height: CCOpened ? 180 : 80 }}>
                  {CCOpened && (
                    <View style={{ position: 'absolute', right: 13, top: 13 }}>
                      <Save color={'#fff'} width={12.5} height={15} />
                    </View>
                  )}
                  <Text style={styles.name}>Jennie</Text>
                  <Text style={styles.text}>Hey, how are you doing today?</Text>
                </BlurView>
              </TouchableOpacity>
            </BlurView>
          </View>
          <TouchableOpacity
            onLongPress={() => console.log('long press')}
            onPressOut={() => console.log('press out ')}
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#fff',
              borderRadius: 64,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Record />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}
export default TalkView
