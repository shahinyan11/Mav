import React from 'react'
import { mainRoutes } from '@/config/routes'
import HomeScreen from '@/screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import TopNavbar from '@/components/Navigation/TopNavbar'
import CourseDetailScreen from '@/screens/CourseDetailScreen'

const { Navigator, Screen } = createStackNavigator()

const HomeStack = () => (
  <Navigator
    initialRouteName={mainRoutes.Home.id}
    screenOptions={{
      headerShown: true,
      headerTransparent: false,
      header: (props) => <TopNavbar {...props} />,
    }}
  >
    <Screen
      name={mainRoutes.Home.id}
      component={HomeScreen}
      options={{
        title: 'Home',
        headerShown: true,
        headerTransparent: false,
      }}
    />

    <Screen
      name={mainRoutes.CourseDetailScreen.id}
      component={CourseDetailScreen}
      options={{
        title: '',
        headerShown: false,
        headerTransparent: false,
      }}
    />
  </Navigator>
)

export default HomeStack
