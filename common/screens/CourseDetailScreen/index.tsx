/* eslint-disable max-len */
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Animated, Platform, TouchableWithoutFeedback, Easing } from 'react-native'
import styles from './styles'
import { FlatList } from 'native-base'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { ratio } from '@/constants'
import derekPic from '@/assets/images/CourseLanding/derekPic.png'
import { LinearGradient } from 'expo-linear-gradient'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SessionCard from '@/components/SessionCard'
import { ArrowDown } from '@/assets/svgs/ArrowDown'
import { useNavigation } from '@react-navigation/native'
import MaskedView from '@react-native-community/masked-view'
import { Leadership } from '@/assets/svgs/Leadership'
import { Conversation } from '@/assets/svgs/Conversation'
import { Notes } from '@/assets/svgs/Notes'
import { Tips } from '@/assets/svgs/Tips'
import menuIcon from '@/assets/icons/menuIcon.png'
import { sessions } from './data'
import MiniMenu from './MiniMenu'

const CourseDetailScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [y, setY] = useState(0)
  const initialHeight = 140
  const [height, setHeight] = useState(initialHeight)
  const animatedHeight = useRef(new Animated.Value(initialHeight)).current
  const [expanded, setExpanded] = useState(true)
  const [menuLess, setMenuLess] = useState(false)
  const [headerEx, setHeaderEx] = useState(false)
  const animatedWidth = 0
  const [width, setWidth] = useState(animatedWidth)
  const animatedWidHeader = useRef(new Animated.Value(animatedWidth)).current
  type topIcon = {
    id: number
    image: React.ReactElement
    component: string
  }
  const topIcons = [
    { id: 0, image: <Leadership />, component: 'ChallengesScreen' },
    { id: 1, image: <Conversation />, component: 'Conversations' },
    { id: 2, image: <Tips />, component: 'Conversations' },
    { id: 3, image: <Notes />, component: 'NoteFolders' },
  ]

  const [rotateAnimation] = useState(new Animated.Value(0))
  const showLess = () => {
    return <Text style={{ fontSize: 15, fontFamily: 'Helvet_bold', color: '#000', lineHeight: 28 }}>Show less</Text>
  }
  const description = `Being a top athlete is hard. But being in the spotlight 24/7 is something altogether more difficult. It\'s hard enough to hit a 100 mph fastball or fight off the. Being a top athlete is hard. But being in the spotlight 24 / 7 is something altogether more difficult. It\'s hard enough to hit a 100 mph fastball or fight off the.${'\n'}`

  const renderSessionTab = () => {
    return (
      <FlatList
        scrollEnabled={false}
        data={sessions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SessionCard data={item} />}
      />
    )
  }

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerEx ? '-405deg' : '0deg', '405deg'],
  })

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  }

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      rotateAnimation.setValue(0)
    })
    setHeaderEx(!headerEx)
  }

  const headerTopView = () => (
    <View
      onLayout={({ nativeEvent }) => {
        if (width > animatedWidth) {
          setWidth(nativeEvent.layout.width)
        }
      }}
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
          {topIcons.map((item: topIcon, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.topIconsStyle}
                onPress={() => navigation.navigate(item.component as never)}
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
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      gestureEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerLeft: () => (
        <TouchableOpacity style={styles.leftIconStyle} onPress={() => navigation.goBack()}>
          <ArrowDown />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.m_10}>
          <TouchableWithoutFeedback onPress={toggleHeader}>
            <Animated.View>
              <MaskedView maskElement={headerTopView()}>
                <LinearGradient
                  start={{ x: 0, y: 0.65 }}
                  end={{ x: 0, y: 1 }}
                  style={{ backgroundColor: '#000' }}
                  colors={['rgba(255, 255, 255, 0)', `rgba(255, 255, 255, ${headerEx ? 1 : 0})`]}
                >
                  {headerTopView()}
                </LinearGradient>
              </MaskedView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        // <View>
        //   <MiniMenu />
        // </View>
      ),
    })
  }, [navigation, menuLess, headerEx])

  useEffect(() => {
    Animated.spring(animatedHeight, {
      friction: 100,
      toValue: expanded ? 140 : 215,
      useNativeDriver: false,
    }).start()
  }, [expanded])

  useEffect(() => {
    Animated.timing(animatedWidHeader, {
      duration: 500,
      easing: Easing.ease,
      toValue: headerEx ? 160 : 0,
      useNativeDriver: false,
    }).start()
  }, [headerEx])

  const courseDescription = (opacity: number) => (
    <View
      onLayout={({ nativeEvent }) => {
        if (height > initialHeight) {
          setHeight(nativeEvent.layout.height)
        }
      }}
    >
      <Text style={[styles.descriptionText, { opacity: opacity }]}>
        {description}
        {showLess()}
      </Text>
    </View>
  )

  const animation = new Animated.Value(0)
  useEffect(() => {
    Animated.loop(Animated.timing(animation, { toValue: 1, duration: 2000, useNativeDriver: false })).start()
  }, [])

  const toggleDescription = () => {
    setExpanded(!expanded)
  }

  const toggleHeader = () => {
    setHeaderEx(!headerEx)
  }

  return (
    <View style={[styles.container, { backgroundColor: 'rgba(250, 250, 250, 1)' }]}>
      <View>
        <View
          style={[
            styles.headerTopStyle,
            {
              paddingTop: Platform.OS == 'ios' ? insets.top + 22 : insets.top + 42,
            },
          ]}
        ></View>
        <View style={styles.flatListContainer}></View>
        <View style={[styles.bottomContainer, { backgroundColor: 'rgba(250, 250, 250, 1)' }]}>
          <VideoPlayer
            style={{ videoBackgroundColor: 'black', width: 480, height: 200 }}
            videoProps={{
              shouldPlay: false,
              resizeMode: Video.RESIZE_MODE_COVER,
              source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              },
            }}
          />
          <ScrollView
            style={styles.mb_600}
            contentContainerStyle={{ paddingBottom: Platform.OS == 'ios' ? 70 : 0 }}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.startView, {}]}>
              <Text style={styles.startText}>Starting Out</Text>
            </View>
            <View style={styles.flex_1}>
              <View style={[styles.flex_1, {}]}>
                <TouchableWithoutFeedback onPress={toggleDescription}>
                  <Animated.View style={{ height: animatedHeight }}>
                    <MaskedView maskElement={courseDescription(1)}>
                      <LinearGradient
                        start={{ x: 0, y: 0.65 }}
                        end={{ x: 0, y: 1 }}
                        style={{ backgroundColor: '#000' }}
                        colors={['rgba(255, 255, 255, 0)', `rgba(255, 255, 255, ${expanded ? 1 : 0})`]}
                      >
                        {courseDescription(0)}
                      </LinearGradient>
                    </MaskedView>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.viewstyle}>
              <Text style={styles.txtStyle}>Conversations with Derek</Text>
            </View>
            <View
              style={{
                backgroundColor: '#342C35',
                marginHorizontal: ratio.width * 20,
                borderRadius: ratio.width * 16,
                height: Platform.OS == 'ios' ? ratio.height * 455 : ratio.height * 545,
              }}
            >
              <Text style={styles.bottomContainerText}>Talk to Derek</Text>
              <Text style={styles.lightText}>Ask more than 1000+ questions</Text>
              <View style={styles.width_100P}>
                <Image source={derekPic} style={styles.ConversationBigImage} resizeMode={'contain'} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <Text style={styles.txtStyle}>Next Sessions</Text>
            </View>
            {renderSessionTab()}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default CourseDetailScreen
