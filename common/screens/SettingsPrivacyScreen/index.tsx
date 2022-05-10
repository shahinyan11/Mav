import React, { FC } from 'react'
import { View, ImageBackground, FlatList } from 'react-native'
import styles from './styles'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import Tier1NavItem from '@/views/navigation/Tier1NavItem'
import { ratio } from '@/constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'

import { navigate } from '@/services/NavigationService'
import MenuLinksList from '@/components/MenuLinksList'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const links = [
  {
    label: 'Account & Payment',
    id: 'AccountPayment',
  },
  {
    label: 'Subscription Plan',
    id: 'SubscriptionPlan',
  },
  {
    label: 'Conversational AI',
    id: 'ConversationalAISettings',
  },
  {
    label: 'Notifications',
    id: 'NotificationsSettings',
  },
]

const SettingsPrivacyScreen: FC<Props> = ({ navigation }) => {
  const headerHeight = useHeaderHeight()

  return (
    <ImageBackground
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: headerHeight + 24,
      }}
      resizeMode={'cover'}
      source={PlaylistScreenBG}>
      <View style={styles.container}>
        <MenuLinksList
          data={links}
          onPress={(id) => {
            navigation.navigate(id)
          }} />
      </View>
    </ImageBackground>
  )
}
export default SettingsPrivacyScreen
