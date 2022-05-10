import React, { FC, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { mainRoutes, NotesRoutes, SettingsRoutes } from '@/config/routes'
import SignInScreen from '@/screens/SignInScreen'
import SignUpScreen from '@/screens/SignUpScreen'
import * as NavigationService from '@/services/NavigationService'
import PasswordResetScreen from '@/screens/PasswordResetScreen'
import BottomTabNavigator from '@/navigators/BottomTabNavigator'
import { View } from 'react-native'
import SubNav from '@/views/navigation/SubNav'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChangeEmailScreen from '@/screens/ChangeEmailScreen'
import { Close, Profile } from '@/assets/svgs'
import TopNavbar from '@/components/Navigation/TopNavbar'
import NotificationsScreen from '@/screens/NotificationsScreen'
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal'
import NotesScreen from '@/screens/NoteFoldersScreen'
import CheckoutScreen from '@/screens/CheckoutScreen'
import ChoosePlanScreen from '@/screens/ChoosePlanScreen'
import FilterScreen from '@/screens/FilterScreen'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import NotesStack from './StackNavigators/notes'
import NoteFoldersScreen from '@/screens/NoteFoldersScreen'
import ConversationsScreen from '@/screens/ConversationsScreen'
import CelebrationScreen from '@/screens/CelebrationScreen'
import ChallengesScreen from '@/screens/ChallengesScreen'
import TipsScreen from '@/screens/TipsScreen'
import ConversationScreen from '@/screens/ConversationScreen'
import ResetPassword from '@/screens/ResetPasswordScreen'
import SavedConversations from '@/screens/SavedConversations'

const { Navigator, Screen, Group } = createStackNavigator()

export const navigate = (name: string[] = [], params: any) => {
  NavigationService.navigate(name, params)
}

const AppNavigator: FC = ({ initialRouteName }) => {
  const { user } = useSelector((state: RootState) => state.session)
  const [color, setColor] = useState('rgba(255, 255, 255, 1)')
  const insets = useSafeAreaInsets()

  const navigationStateChange = (state) => {
    let currentRouteName = ''
    const firstRoute = state.routes[state.index]
    switch (firstRoute?.name) {
      case 'BottomTabNavigator':
        currentRouteName = firstRoute.state.routes[firstRoute.state.index]?.name
        break
      default:
        break
    }

    const bgColor = mainRoutes[currentRouteName]?.tabbarBackground
    setColor(bgColor || 'rgba(255, 255, 255, 1)')
  }

  return (
    <NavigationContainer ref={NavigationService.navigationRef} onStateChange={navigationStateChange}>
      <Navigator
        // initialRouteName={initialRouteName}
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          header: (props) => <TopNavbar {...props} />,
        }}>

        <Screen name="Conversation" component={ConversationScreen} />

        <Screen
          name={mainRoutes.BottomTabNavigator.id}
          component={BottomTabNavigator}
          initialParams={{ bgColor: color }}
          options={{
            headerShown: false,
          }} />

        <Screen
          name={mainRoutes.SignInScreen.id}
          component={SignInScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
          }} />

        <Screen
          name={mainRoutes.SignUpScreen.id}
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
          }} />
        <Screen
          name={mainRoutes.PasswordReset.id}
          component={PasswordResetScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
          }} />

        <Screen
          name={mainRoutes.Notifications.id}
          component={NotificationsScreen}
          options={{
            headerShown: true,
            title: 'Notifications',
          }} />

        <Screen
          name={'changeEmail'}
          component={ChangeEmailScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            header: () => (
              <View style={{ paddingTop: insets.top + 12 }}>
                <SubNav title={'Change email'} hideBackButton={true} rightIcons={[<Close width={20} height={20} />]} />
              </View>
            ),
          }} />

        <Screen
          name={mainRoutes.ChoosePlan.id}
          component={ChoosePlanScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
          }} />

        <Screen
          name={NotesRoutes.Notes.id}
          component={NotesStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }} />

        <Screen
          name={mainRoutes.Conversations.id}
          component={ConversationsScreen} />
        <Screen
          name={mainRoutes.ChallengesScreen.id}
          component={ChallengesScreen} />
        <Screen
          name={NotesRoutes.NoteFolders.id}
          component={NoteFoldersScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }} />
        <Screen
          name={mainRoutes.SavedConversations.id}
          component={SavedConversations}
        />

        <Group screenOptions={{
          presentation: 'modal',
          headerShown: true,
          headerTransparent: true,
        }}>
          <Screen
            name={SettingsRoutes.ChangePassword.id}
            component={ChangePasswordModal} />
          <Screen
            name={SettingsRoutes.ChangeEmail.id}
            component={ChangeEmailScreen} />
          <Screen
            name={SettingsRoutes.ResetPassword.id}
            component={ResetPassword} />
          <Screen
            name={mainRoutes.Checkout.id}
            component={CheckoutScreen} />
          <Screen
            name={SettingsRoutes.FilterScreen.id}
            component={FilterScreen} />

          <Screen
            name={SettingsRoutes.Notes.id}
            component={NotesScreen} />
          <Screen
            name={mainRoutes.CelebrationScreen.id}
            component={CelebrationScreen} />
          <Screen
            name={mainRoutes.Tips.id}
            component={TipsScreen} />
        </Group>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
