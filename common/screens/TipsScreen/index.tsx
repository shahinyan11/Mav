import React, { useLayoutEffect, useState } from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Close, Remove } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from './srtyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { Share, Save } from '@/assets/svgs'
import PagerView from 'react-native-pager-view'
import TipText from '@/components/tips/TipText'
import TipImage from '@/components/tips/TipImage'
import TipVideo from '@/components/tips/TipVideo'

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView)

const TipsScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const [activePage, setActivePage] = useState(0)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Tips',
      headerTintColor: '#fff',
      headerShown: true,
      headerTransparent: true,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerLeft: () => (
        <>
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Save />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 28 }}>
            <Share iconColor={'#fff'} />
          </TouchableOpacity>
        </>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ position: 'relative' }}
          onPress={() => {
            navigation.goBack()
          }}>
          <Close color={'#fff'} width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <View style={[styles.container, { paddingTop: headerHeight + 22 }]}>
      <View style={{
        flex: 1,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'black',
      }}>
        <AnimatedPagerView
          style={{ flex: 1 }}
          initialPage={activePage}
          onPageSelected={(e) => {
            setActivePage(e.nativeEvent.position)
          }}>
          <TipText />
          <TipImage />
          <TipVideo />
        </AnimatedPagerView>
        <View style={{
          width: '100%',
          position: 'absolute',
          bottom: insets.bottom + 20,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
          {[0, 1, 2].map((value, index) => (
            <View
              key={index}
              style={{
                ...styles.indicatorItem,
                backgroundColor: index === +activePage ? '#FFF200' : 'rgba(0, 0, 0, 0.1)',
              }} />
          ))}
        </View>
      </View>
    </View>
  )
}

export default TipsScreen
