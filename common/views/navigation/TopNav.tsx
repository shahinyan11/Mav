import React, { FC, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { CloseIcon, HamburgerIcon, HStack, Pressable, SearchIcon, useColorMode } from 'native-base'
import Logo from './Logo'
import { Bell } from '@/assets/svgs'
import { colors } from '@/constants'
import { mainRoutes } from '@/config/routes'
import { navigate } from '@/navigators/AppNavigator'

interface Props {
  menuOpen: boolean
  menuHandler: () => void
}

const TopNav: FC<Props> = ({ menuOpen, menuHandler }) => {
  // const navigation = useNavigation()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack backgroundColor="white" alignItems="center" justifyContent="space-between" px="8" py="6" w="100%">
      <Pressable onPress={toggleColorMode}>
        <Logo />
      </Pressable>

      <HStack space="md" alignItems="center" justifyContent="space-between">
        <Pressable style={style.icon}>
          <SearchIcon size="5" />
        </Pressable>

        <Pressable style={style.icon} onPress={menuHandler}>
          {menuOpen ? <CloseIcon size="4" /> : <HamburgerIcon size="6" />}
        </Pressable>
      </HStack>
    </HStack>
  )
}

const style = StyleSheet.create({
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    width: 26,
  },
  badge: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: -10,
    right: -5,
    backgroundColor: colors.yellow,
  },
})

export default TopNav
