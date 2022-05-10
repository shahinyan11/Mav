import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ConversationsRoutes } from '@/config/routes'
import TopNavbar from '@/components/Navigation/TopNavbar'
import { useRoute } from '@react-navigation/core'
import SavedConversations from '@/screens/SavedConversations'

const { Navigator, Screen } = createStackNavigator()

const ConversationsStack = () => {
  const route = useRoute()
  return (
    <Navigator
      initialRouteName={ConversationsRoutes.SavedConversations.id}
      screenOptions={{
        headerShown: true,
        header: (props) => <TopNavbar {...props} />,
      }}>
      <Screen name={ConversationsRoutes.SavedConversations.id} component={SavedConversations} initialParams={route.params} />
    </Navigator>
  )
}

export default ConversationsStack
