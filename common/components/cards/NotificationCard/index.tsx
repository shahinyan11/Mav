import React from 'react'
import { icons } from '@/components/inputs/assets/icons'
import { colors } from '@/helpers'
import { Button } from 'native-base'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { ratio } from '@/constants'
import { LinearGradient } from 'expo-linear-gradient'
import Notification from '@/models/Notification'

interface NotificationCardProps {
  notification: Notification
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const { unread, params, type } = notification

  const buttonLabel = () => {
    switch (type) {
      case 'feedback':
        return 'Share feedback'
      case 'trailer':
        return 'Watch trailer'
    }
  }

  return (
    <View style={[styles.maincardView, {
      elevation: unread ? 3 : 0.5,
      backgroundColor: unread ? colors.white : colors.lightBorder,
      borderColor: unread ? colors.white : colors.lightBorder,
    }]}>
      <View style={styles.flex_row}>
        <View>
          {unread && (
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={['#FFFA98', '#FFD600']}
              style={{
                width: ratio.width * 16,
                height: ratio.width * 16,
                borderRadius: ratio.width * 8,
                borderWidth: ratio.width * 3,
                borderColor: '#FFFFFF',
                position: 'absolute',
                zIndex: 999,
                top: -ratio.width * 5,
                left: -ratio.width * 5,
              }} />
          )}
          <Image
            source={icons.image1}
            style={styles.imageStyle}
          />
        </View >
        <Text
          numberOfLines={3}
          style={[styles.textStyle, {
            fontFamily: unread ? 'Helvet_bold' : 'Helvet_regular',
            color: unread ? colors.black : colors.unSelectedText,
          }]}>
          {params?.title}
        </Text>
      </View >
      <Button
        style={[styles.margin_30, { backgroundColor: unread ? '#fff200' : '#fff' }]}>
        <Text style={[styles.btnStyle]}>
          {buttonLabel()}
        </Text>
      </Button>
    </View>
  )
}
export default NotificationCard
