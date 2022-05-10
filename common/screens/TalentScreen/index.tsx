import React, { FC } from 'react'
import { View, FlatList, ScrollView, Image } from 'react-native'
import styles from './style'
import { Text, useColorMode } from 'native-base'
import {
  StackNavigationHelpers,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import background from '@/assets/placeholders/bg-arenas.png'
import cardImage from '@/assets/images/image.png'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import SubNav from '@/views/navigation/SubNav'
import NavCard from '../../components/cards/NavCard'
import { talentArray } from './talentData'
import TalentCard from '@/components/cards/TalentCard'
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const TalentScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()

  // const fadeOut = (current: any) => {
  //   data.forEach((value, index)=>{
  //     Animated.timing(value.animated, {
  //       toValue: current === index ? 0 : 1,
  //       duration: 500,
  //     }).start()
  //   })
  // }

  return (
    <View style={styles.container}>
      <Background source={background} />
      <Foreground>
        <BlurView
          intensity={100}
          tint={colorMode as BlurTint}
          style={styles.blur}
        >
          <SubNav title={'Talent'} />
          <ScrollView
            style={{
              paddingLeft: 0, paddingTop: 0,
              // backgroundColor:"green"
            }}
            contentContainerStyle={styles.minHeight_100P}
            showsVerticalScrollIndicator={true}
          >
            <LinearGradient
              colors={['#00000099', '#00000099']}
              // colors={['#00000099', '#3D3635','#00000099']}
              start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
              style={styles.mainStyle}
            >
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={talentArray}
                showsVerticalScrollIndicator={true}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      //  backgroundColor: '#5C5959'
                    }}
                  >
                    <TalentCard item={item} index={index} />
                  </View>
                )}
              />
            </LinearGradient>
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default TalentScreen
