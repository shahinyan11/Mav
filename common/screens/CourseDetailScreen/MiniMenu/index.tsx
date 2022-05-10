import { Conversation } from '@/assets/svgs/Conversation'
import { Leadership } from '@/assets/svgs/LeaderShip'
import { Notes } from '@/assets/svgs/Notes'
import { Tips } from '@/assets/svgs/Tips'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Animated, View, TouchableOpacity } from 'react-native'
import MenuIcon from '@/assets/icons/menuIcon.png'
import { useNavigation } from '@react-navigation/native'


const buttons = [
  { icon: <Leadership />, component: 'ChallengesScreen' },
  { icon: <Conversation />, component: 'Conversations' },
  { icon: <Tips />, component: 'Conversations' },
  { icon: <Notes />, component: 'NoteFolders' },
]

const MiniMenu = () => {
  const navigation = useNavigation()
  // const animatedValues = useRef(new Animated.Value([])).current
  const animatedValues = useRef<Animated.Value[]>([]).current
  const [toggle, setToggle] = useState(false)
  const rotation = useRef(new Animated.Value(0)).current
  const animatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-135deg'],
  })

  useEffect(() => {
    spin()
  }, [toggle])

  useEffect(() => {
    buttons.forEach((_, index) => {
      animatedValues[index] = new Animated.Value(0)
    })
  }, [])

  useLayoutEffect(() => {
    animated(toggle ? 1 : 0)
  }, [toggle])

  const spin = () => {
    Animated.spring(rotation, {
      toValue: toggle ? 1 : 0,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start()
  }

  const animated = (toValue = 1) => {
    const animations = buttons.map((_, index) => (
      Animated.spring(animatedValues[index], {
        toValue,
        friction: 8,
        tension: 100,
        useNativeDriver: true,
      })
    ))

    Animated.stagger(10, animations.reverse()).start()
  }

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 47,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 23.2,
    }}>
      {buttons.map(({ icon, component }, index) => {
        return (
          <Animated.View
            key={index}
            style={{
              opacity: animatedValues[index],
              transform: [
                { scale: animatedValues[index] },
              ],
            }}>
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(component)
              }}
              style={{
                right: 0,
                width: 47,
                height: 47,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {icon}
            </TouchableOpacity>
          </Animated.View>
        )
      })}
      <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={{
          width: 47,
          height: 47,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          resizeMode="contain"
          style={{
            transform: [{ rotate: animatedRotation }],
            width: 20,
            height: 20,
          }} source={MenuIcon} />
      </TouchableOpacity>
    </View >
  )
}

export default MiniMenu
