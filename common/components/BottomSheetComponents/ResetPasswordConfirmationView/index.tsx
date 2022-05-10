import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import VSButton from '@/views/general/Button'
import { ratio } from '@/constants'

interface Props {
  data?: any
  onPressConfirm?: () => void
  onPressCancel?: () => void
  containerStylesProp?: object
}

const ResetPasswordConfirmationView = ({
  onPressConfirm,
  onPressCancel,
  containerStylesProp = {},
}: Props) => {
  return (
    <View style={[styles.container, containerStylesProp]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Are you sure you want to reset your password?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <VSButton onPress={onPressConfirm} customStyles={[styles.yellow, styles.btnStyle]}>
          <Text style={{ color: '#000000', fontWeight: '500' }}>Yes</Text>
        </VSButton>
        <VSButton onPress={onPressCancel} customStyles={[styles.grey, styles.btnStyle]}>
          <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>No</Text>
        </VSButton>
      </View>
    </View>
  )
}

export default ResetPasswordConfirmationView
