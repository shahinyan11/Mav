import React, { FC } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ArrowLeft } from '@/assets/svgs'
import { colors } from '@/constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowDown } from '@/assets/svgs/ArrowDown'

interface Props {
  title?: string
  color?: string
  rightIcons?: any
  hideBackButton?: boolean
  hideRightIcons?: boolean
  defaultKey?: string
  onClick?: () => {}
  closeIcon?: () => {}
  hideLeft?: boolean
  downArrow?: boolean
}

// const SubNav: FC<Props> = ({ title, color, rightIcons, defaultKey, onClick, hideBackButton, hideLeft, downArrow }) => {
const SubNav: FC<Props> = ({ title, color, rightIcons, defaultKey, onClick, closeIcon, hideBackButton, hideLeft, downArrow }) => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <View style={[style.container, { paddingTop: Platform.OS == 'ios' ? insets.top : 20 }]}>
      <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          {!hideLeft ? (
            <Pressable onPress={() => (defaultKey ? onClick() : navigation.goBack())}>
              <ArrowLeft iconColor={color || '#000'} />
            </Pressable>
          ) : null}
          {downArrow ? (
            <Pressable onPress={() => onClick()}>
              <ArrowDown width={20} height={20} iconColor={color || '#000'} />
            </Pressable>
          ) : null}
        </View>

        <View style={{ flex: 6 }}>
          <Text style={[style.title, { color: color || '#000' }]}>{title || null}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          {rightIcons ? rightIcons.map((value) => <Pressable onPress={() => closeIcon()}>{value}</Pressable>) : null}
          {/* <Pressable*/}
          {/*  style={{ position: 'relative' }}*/}
          {/*  onPress={() => {*/}
          {/*    navigation.navigate(mainRoutes.Notifications.id)*/}
          {/*  }}*/}
          {/* >*/}
          {/*  <Bell color={color} />*/}
          {/*  <View style={style.badge}>*/}
          {/*    <Text>{unreadCount}</Text>*/}
          {/*  </View>*/}
          {/* </Pressable>*/}
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Helvet_regular',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    right: -5,
    backgroundColor: colors.yellow,
  },
})

export default SubNav
