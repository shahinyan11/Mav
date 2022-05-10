import React, { useLayoutEffect } from 'react'
import {
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native'
import styles from './styles'
import NotificationCard from '@/components/cards/NotificationCard'
import { useNavigation } from '@react-navigation/native'
import { icons } from '@/components/inputs/assets/icons'
import Notification from '@/models/Notification'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { notifications } from './notificationData'

const NotificationsScreen = () => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity>
          <Image source={icons.notification} style={{ width: 20, height: 20 }} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const renderNotification = ({ item }: ListRenderItemInfo<Notification>) => {
    return (
      <NotificationCard notification={item} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList<Notification>
        data={notifications}
        contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={renderNotification}
      />
    </View >
  )
}

export default NotificationsScreen
