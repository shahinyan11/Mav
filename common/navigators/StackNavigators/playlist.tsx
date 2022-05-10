import { createStackNavigator } from '@react-navigation/stack'
import { mainRoutes } from '@/config/routes'
import PlaylistsScreen from '@/screens/PlaylistsScreen'
import PlaylistDetails from '@/screens/PlaylistDetails'
import React from 'react'
import TopNavbar from '@/components/Navigation/TopNavbar'

const { Navigator, Screen } = createStackNavigator()

function PlaylistStack() {
  return (
    <Navigator
      initialRouteName={mainRoutes.Playlists.id}
      screenOptions={{
        headerShown: true,
        header: (props) => <TopNavbar {...props} />,
      }}>
      <Screen
        name={mainRoutes.Playlists.id}
        component={PlaylistsScreen}
        options={{
          title: 'Playlist',
          headerShown: true,
          headerTransparent: true,
        }} />
      <Screen
        name={mainRoutes.PlaylistDetails.id}
        component={PlaylistDetails}
        options={{
          headerShown: false,
          headerTransparent: true,
        }} />
    </Navigator>
  )
}

export default PlaylistStack
