import React, { FC, useEffect, useState, useRef } from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { Leadership } from '@/assets/svgs/Leadership'
import { Conversation } from '@/assets/svgs/Conversation'
import { Notes } from '@/assets/svgs/Notes'
import { Tips } from '@/assets/svgs/Tips'
import menuIcon from '@/assets/icons/menuIcon.png'
const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0))
interface Props {
  item: any
}
const CourseDetailHeader: FC<Props> = ({ item, navigation }) => {
  const animatedWidth = 0
  const animatedWidHeader = useRef(new Animated.Value(animatedWidth)).current

  const [headerEx, setHeaderEx] = useState(false)
  const [width, setWidth] = useState(animatedWidth)
  const topIcons = [
    { id: 0, image: <Leadership />, component: 'Conversations' },
    { id: 1, image: <Conversation />, component: 'Conversations' },
    { id: 2, image: <Tips />, component: 'Conversations' },
    { id: 3, image: <Notes />, component: 'NoteFolders' },
  ]
  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerEx ? '-405deg' : '0deg', '225deg', '405deg'],
  })

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  }
  useEffect(() => {
    Animated.timing(animatedWidHeader, {
      duration: 500,
      easing: Easing.ease,
      toValue: headerEx ? 160 : 0,
      useNativeDriver: false,
    }).start()
  }, [headerEx])
  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
    }).start(() => {
      rotateAnimation.setValue(0)
    })
    setHeaderEx(!headerEx)
  }
  return (
    <View
    //   onLayout={({ nativeEvent }) => {
    //     if (width > animatedWidth) {
    //       setWidth(nativeEvent.layout.width)
    //     }
    //   }}
    >
      <View
        style={[
          styles.headerTopRightStyle,
          {
            backgroundColor: headerEx ? '#191919' : 'transparent',
          },
        ]}
      >
        <Animated.View
          style={{
            width: animatedWidHeader,
            flexDirection: 'row',
            // opacity: headerEx ? 1 : 0,
            opacity: headerEx ? animatedWidHeader : 0,
            overflow: 'hidden',
          }}
        >
          {topIcons.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginHorizontal: 9, backgroundColor: 'transparent' }}
                onPress={() => navigation.navigate(item.component)}
              >
                {item.image}
              </TouchableOpacity>
            )
          })}
        </Animated.View>

        <TouchableOpacity
          onPress={async () => handleAnimation()}
          style={[
            styles.menuIconView,
            {
              backgroundColor: headerEx ? 'transparent' : 'black',
            },
          ]}
        >
          <Animated.Image
            style={[
              animatedStyle,
              styles.menuIcon,
              {
                resizeMode: 'contain',
                tintColor: headerEx ? 'grey' : 'white',
              },
            ]}
            source={menuIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CourseDetailHeader
