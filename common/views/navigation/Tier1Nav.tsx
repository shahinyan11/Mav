import React, { FC, useEffect, useState } from 'react'
import { Dimensions, Animated, StyleSheet } from 'react-native'
import { IndexPath } from '@ui-kitten/components/devsupport'
import { ScrollView, VStack, Flex, Button, useColorMode } from 'native-base'
import { BlurTint, BlurView } from 'expo-blur'
import Tier1NavItem from './Tier1NavItem'
import TopNav from './TopNav'
import { mainRoutes } from '@/config/routes'
import { navigate } from '@/navigators/AppNavigator'
import { globalStyle } from '@/config/theme'
import { useDispatch } from 'react-redux'

interface Props {
  routeHandler: () => void
}

const { height, width } = Dimensions.get('window')

const Tier1Nav: FC = () => {
  const { colorMode } = useColorMode()
  const [_drawerVisible, _setDrawerVisible] = useState(false)
  const [_selectedIndex, _setSelectedIndex] = useState(new IndexPath(0))

  const [_overlayHeight, _setOverlayHeight] = useState(
      new Animated.Value(globalStyle.topNavigationHeight),
  )
  const [_contentsOpacity, _setContentsOpacity] = useState(
      new Animated.Value(0),
  )

  const _toggleMenu = () => {
    _drawerVisible ? _animateOut() : _animateIn()
    _setDrawerVisible(!_drawerVisible)
  }

  const _animateIn = () => {
    Animated.timing(_overlayHeight, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start(() =>
      Animated.timing(_contentsOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(),
    )
  }

  const _animateOut = () => {
    Animated.timing(_contentsOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(_overlayHeight, {
        toValue: globalStyle.topNavigationHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(),
    )
  }

  const _routeHandler = (id: string) => {
    _toggleMenu()
    navigate(id, {})
  }


  // Leaving this in as a demo of how to dispatch actions
  // remove this for final release
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: '@@INIT' })
  }, [])

  return (
    <Animated.View style={[style.overlay, { height: _overlayHeight }]}>
      <BlurView
        style={style.blur}
        intensity={100}
        tint={colorMode as BlurTint}
      />
      <Flex style={style.contents} h="100%" _web={{ style: style.contentsWeb }}>
        <TopNav menuHandler={_toggleMenu} menuOpen={_drawerVisible} />

        <ScrollView p="4">
          <Animated.View style={[style.menu, { opacity: _contentsOpacity }]}>
            {Object.keys(mainRoutes).map((k) => (
              <Tier1NavItem
                key={k}
                route={mainRoutes[k]}
                // handler={
                //   k !== 'experts'
                //   //  && k !== 'plans'
                //    ? _routeHandler : () => {alert('HIII')}
                // }
                handler={
                  _routeHandler
                }
              />
            ))}
          </Animated.View>
        </ScrollView>

        <Animated.View style={[style.menu, { opacity: _contentsOpacity }]}>
          <VStack
            space={4}
            justifyContent="space-between"
            style={style.account}
            p={8}
          >
            <Button bg="yellow.500" py={3}
            //  onPress={()=>{_toggleMenu(),navigate('NewStack',{})}}
            >
              Create account
            </Button>
            <Button bg="black" py={3} onPress={() => {_toggleMenu(), navigate('signIn', {})}}>
              Sign in
            </Button>
          </VStack>
        </Animated.View>
      </Flex>
    </Animated.View>
  )
}

const style = StyleSheet.create({
  overlay: {
    backgroundColor: 'transparent',
    height: globalStyle.topNavigationHeight,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    width: '100%',
    zIndex: 900,
  },
  contents: {},
  contentsWeb: {
    alignItems: 'flex-end',
  },
  blur: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  menu: {
    opacity: 0,
  },
  account: {
    backgroundColor: '#fff4',
  },
})

export default Tier1Nav
