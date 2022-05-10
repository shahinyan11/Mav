import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { View, TouchableOpacity, ScrollView, Text, Animated, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { PenCircle, Search } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import headerImage from '@/assets/images/folder-header.jpg'
import styles from './styles'
import GradientText from '@/components/GradientText'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { notes } from './data'
import { SectionList } from 'native-base'

const NotesFolderScreen = () => {
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const swipeAnim = useRef(new Animated.Value(270)).current
  const swipeLeftAnim = useRef(new Animated.Value(0)).current
  const [swipeable, setSwipeable] = useState(true)
  const [deleteIndex, setDeleteIndex] = useState(null)
  const [searchVisible, setSearchVisible] = useState(false)
  const [inputText, setInputText] = useState('')
  const scrollView = useRef<ScrollView>(null)
  const insets = useSafeAreaInsets()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      gestureEnabled: false,
      headerRight: () => (
        <TouchableOpacity
          style={{ position: 'relative' }}
          onPress={() => setSearchVisible(true)}>
          <Search color={'#fff'} />
        </TouchableOpacity>
      ),
    })
  }, [navigation, searchVisible])

  const swipeUp = () => {
    Animated.timing(
      swipeAnim, {
      toValue: headerHeight,
      duration: 500,
    }).start()
  }
  const swipeDown = () => {
    Animated.timing(
      swipeAnim,
      {
        toValue: 270,
        duration: 500,
      },
    ).start()
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  const onSwipeUp = () => {
    swipeUp()
    setSwipeable(false)
  }

  const onSwipeDown = () => {
    // scrollY === 0 ? swipeDown() : null
  }

  const _onSwipeLeft = (index) => {
    setDeleteIndex(index)
    Animated.timing(
      swipeLeftAnim,
      {
        toValue: 64,
        duration: 500,
      },
    ).start()
  }

  const _onSwipeRight = (index) => {
    Animated.timing(
      swipeLeftAnim,
      {
        toValue: 0,
        duration: 500,
      },
    ).start()
    setTimeout(() => {
      setDeleteIndex(null)
    }, 500)
  }

  const hideSearch = () => {
    setInputText('')
    setSearchVisible(false)
  }

  const scrollPosition = useRef(new Animated.Value(0)).current
  const [height, setHeight] = useState(300)

  const opacity = scrollPosition.interpolate({
    inputRange: [0, 20, 200],
    outputRange: [1, 1, 0],
  })

  const offset = useCallback(() => scrollPosition.interpolate({
    inputRange: [0, height + headerHeight],
    outputRange: [0, 200],
  }), [height, headerHeight])()

  return (
    <View style={{
      position: 'relative',
      flex: 1,
      backgroundColor: '#000',
      paddingTop: headerHeight,
    }}>
      <Animated.Image
        resizeMode="cover"
        resizeMethod="scale"
        source={headerImage}
        style={[styles.topImg, {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          width: '100%',
          opacity: opacity,
        }]} />
      <Animated.View
        onLayout={({ nativeEvent }) => {
          setHeight(nativeEvent.layout.height)
        }}
        style={{
          width: '100%',
          opacity: opacity,
          flexDirection: 'column',
          alignItems: 'center',
          paddingVertical: headerHeight,
          marginTop: headerHeight,
          position: 'absolute',
          transform: [{ translateY: Animated.subtract(new Animated.Value(0), offset) }],
        }}>
        <Text style={styles.title}>Owning your outcome</Text>
        <Text style={styles.subtitle}>27 notes</Text>
      </Animated.View>
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          scrollPosition.setValue(event.nativeEvent.contentOffset.y)
        }}
        contentContainerStyle={{ paddingTop: height }}
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        showsVerticalScrollIndicator={false}>
        <SectionList
          style={{
            padding: 20,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            backgroundColor: '#fff',
          }}
          sections={notes}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => {
            const { title } = section
            return (
              <View style={{ paddingBottom: 16 }}>
                <Text style={{ color: '#000', fontSize: 14, fontFamily: 'Helvet_regular' }}>{title}</Text>
              </View>
            )
          }}
          renderItem={({ item, index }) => {
            const { title, description } = item
            return (
              <View style={{ borderRadius: 8, backgroundColor: '#fafafa', padding: 16 }}>
                <Text style={styles.itemTitle}>
                  {title}
                </Text>

                <GradientText style={styles.itemDesc}>
                  {description}
                </GradientText>
              </View>
            )
          }} />
      </ScrollView>
      <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <PenCircle />
      </TouchableOpacity>
    </View>
  )
}

export default NotesFolderScreen
