import React, { useLayoutEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Close } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import { BlurView } from 'expo-blur'
import styles from './styles'
import { CardStyleInterpolators } from '@react-navigation/stack'
import celebrationBg from '@/assets/images/celebrationBg.png'
import instagram from '@/assets/svgs/Social/instagram.png'
import facebook from '@/assets/svgs/Social/facebook.png'
import linkedin from '@/assets/svgs/Social/linkedin.png'
import twitter from '@/assets/svgs/Social/twitter.png'

const CelebrationScreen = ({ route }) => {
  const navigation = useNavigation()
  const { image, text } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      presentation: 'transparentModal',
    })
  }, [navigation])

  return (
    <BlurView intensity={125} tint={'dark'} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.top}>
            <Image source={celebrationBg} style={styles.topBg}/>
            <View style={styles.textsBox}>
              <Text style={styles.title}>Congratulations</Text>
              <Text style={styles.topText}>{text}</Text>
            </View>
            <Image source={image} style={styles.topImage}/>
          </View>
          <View style={styles.bottom}>
            <View style={styles.socialsBox}>
              <TouchableOpacity style={styles.iconBox}>
                <View style={styles.iconCircle}>
                  <Image source={facebook} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <View style={styles.iconCircle}>
                  <Image source={twitter} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <View style={styles.iconCircle}>
                  <Image source={linkedin} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <View style={styles.iconCircle}>
                  <Image source={instagram} style={styles.icon}/>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>{'Now brag about it.\nYou know you want to!'}</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Close width={24} height={24} color={'#fff'}/>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  )
}

export default CelebrationScreen
