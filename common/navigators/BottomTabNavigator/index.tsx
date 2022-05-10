import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ConversationsRoutes, mainRoutes } from '@/config/routes'
import { View, TouchableOpacity, Text } from 'react-native'
import { Move, Playlist as PlaylistIcon, Home, Search, Profile } from '@/assets/svgs'
import { useNavigation } from '@react-navigation/core'
import SearchScreen from '@/screens/SearchScreen'
import MenuNavigator from '@/navigators/MenuNavigator'
import PlaylistStack from '@/navigators/StackNavigators/playlist'
import HomeStack from '@/navigators/StackNavigators/home'
import styles from './styles'
import ConversationsStack from '@/navigators/StackNavigators/conversations'

const { Navigator, Screen } = createBottomTabNavigator()

function MyTabBar({ bgColor, state, descriptors, navigation }) {
  const [isMenuSelected, setIsMenuSelected] = useState(false)
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true })
            }
            setIsMenuSelected(false)
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View
                style={[styles.iconBox]}>{options['tabBarIcon']({ color: isFocused && !isMenuSelected ? 'black' : '#bbbbbb' })}</View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

function BottomTabNavigator({ route }) {
  const navigation = useNavigation()
  return (
    <Navigator
      initialRouteName={mainRoutes.Home.id}
      tabBar={(props) => {
        return (
          <MyTabBar bgColor={route?.params?.bgColor} {...props} />
        )
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={mainRoutes.Home.id}
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Home width={28} height={28} color={color} />,
        }}
      />
      <Screen
        name={mainRoutes.Search.id}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <Search width={28} height={28} color={color} />,
        }}
      />
      <Screen
        name={mainRoutes.Playlists.id}
        component={PlaylistStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <PlaylistIcon width={28} height={28} color={color} />,
          tabBarStyle: { display: 'none' },

        }}
      />
      <Screen
        name={ConversationsRoutes.Conversations.id}
        component={ConversationsStack}
        options={{
          tabBarIcon: ({ color }) => <Profile width={28} height={28} color={color} />,
        }}
      />
      <Screen
        name={mainRoutes.MenuNavigator.id}
        component={MenuNavigator}
        // component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Move width={28} height={28} color={color} />,
          headerShown: false,
        }}
      />
    </Navigator>
  )
}

export default BottomTabNavigator
