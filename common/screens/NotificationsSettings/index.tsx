import React, { FC, useLayoutEffect, useState } from 'react'
import { View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import styles from './styles'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import SettingsSwitch from '@/components/SettingsSwitch'
import { useNavigation } from '@react-navigation/core'
import { ArrowLeft } from '@/assets/svgs'
import { SettingsRoutes } from '@/config/routes'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const NotificationsSettings: FC<Props> = () => {
  const headerHeight = useHeaderHeight()
  const navigation = useNavigation()
  const [settingsList, setSettingsList] = useState(
      [
        {
          title: 'Email',
          value: false,
        },
        {
          title: 'Push',
          value: true,
        },
        {
          title: 'Announcements',
          value: false,
        },
        {
          title: 'New Content',
          value: true,
        },
      ],
  )

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: SettingsRoutes.Notifications.label,
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#000',
    })
  })

  const changeValue = (item, index) => {
    const mutationArr = [...settingsList]
    mutationArr[index] = {
      ...mutationArr[index],
      value: !item.value,
    }
    setSettingsList(mutationArr)
  }

  return (
    <ImageBackground
      style={[{ width: '100%', flex: 1 }, { paddingTop: headerHeight }]}
      resizeMode={'cover'}
      source={PlaylistScreenBG}>
      <View style={styles.container}>
        <FlatList
          data={settingsList}
          renderItem={({ item, index }) => {
            return (
              <SettingsSwitch
                title={item.title}
                falseColor={'#EDEDED'}
                trueColor={'#2C2C2C'}
                thumbColor={'#FFFFFF'}
                value={item.value}
                onValueChange={() => changeValue(item, index)}
                stylesProps={styles.switchStyle}
              />
            )
          }}
        />
      </View>
    </ImageBackground>

  )
}

export default NotificationsSettings
