import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import VSButton from '@/views/general/Button'
import { ratio } from '@/constants'

interface Props {
  data?: any
  onPressSuccess?: () => void
  onPressCancle?: () => void
  containerStylesProp?: object
}

const SubscriptionPlanSheet: FC<Props> = ({ onPressSuccess, onPressCancle, containerStylesProp = {} }) => {
  const { container, topContainer, titleContainer, title, description, buttonContainer, grey, yellow, btnStyle }= styles
  return (
    <View style={[container, containerStylesProp]}>
      <View style={topContainer}>
        <View style={titleContainer}>
          <Text style={title}>Are you sure you want to change your plan?</Text>
        </View>

        <Text style={description}>
            Your new plan will take effect after your next billing cycle on September 17 2021.
        </Text>

        <View style={buttonContainer}>
          <VSButton onPress={onPressSuccess} customStyles={[yellow, btnStyle, { marginRight: ratio.width * 7.5 }]}>
            <Text style={ { color: '#000000', fontWeight: '500' } }>Yes</Text>
          </VSButton>
          <VSButton onPress={onPressCancle} customStyles={[grey, btnStyle, { marginLeft: ratio.width * 7.5 }]}>
            <Text style={ { color: '#FFFFFF', fontWeight: '500' }}>No</Text>
          </VSButton>
        </View>
      </View>
    </View>
  )
}

export default SubscriptionPlanSheet
