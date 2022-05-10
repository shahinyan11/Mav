import React from 'react'
import { Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackHeaderProps } from '@react-navigation/stack'
import { ArrowLeft } from '@/assets/svgs'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ratio } from '@/constants'

const TopNavbar = (props: StackHeaderProps) => {
  const { options, back, navigation } = props
  const { title, headerRight, headerLeft, headerTransparent, headerTintColor } = options
  const insets = useSafeAreaInsets()
  const leftBarItems = headerLeft ? headerLeft({}) : null
  const rightBarButtonItems = headerRight ? headerRight({}) : null

  const backButton = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeft iconColor={headerTintColor || '#000'} />
    </TouchableOpacity>
  )

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS == 'ios' ? insets.top : 20,
          paddingBottom: 6,
          backgroundColor: headerTransparent ? 'transparent' : '#F5F5F5',
        },
      ]}>
      <View style={{
        flex: 1,
        alignItems: 'flex-start',
      }}>{leftBarItems ? leftBarItems : back ? backButton() : null}</View>
      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.title, { color: headerTintColor }]}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>{rightBarButtonItems}</View>
    </View>
  )
}

export default TopNavbar
