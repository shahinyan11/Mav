import React, { FC, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import { toastMessageType } from '@/store/reducers/ToastMessage'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_TOAST, HIDE_TOAST_DELAY } from '@/ActionsTypes'
import { makeAction } from '@/makeActions'
interface Props {
  onPress?: () => void
  containerStylesProp?: object
}

const Toast: FC<Props> = ({ onPress, containerStylesProp = {} }) => {
  const toastMessage = useSelector((state: toastMessageType) => state.ToastMessage)
  const dispatch = useDispatch()

  const hideToastDelay = () => {
    dispatch(makeAction(HIDE_TOAST_DELAY))
  }

  const hideToast = () => {
    dispatch(makeAction(HIDE_TOAST))
  }

  useEffect(() => {
    hideToastDelay()
  }, [toastMessage])
  return (
    <Animatable.View style={[styles.toastContainer, styles.center, styles[toastMessage.type], containerStylesProp]} duration={300} animation={toastMessage.visible ? 'fadeInDown' : 'fadeOutUp'}>
      <TouchableOpacity style={[styles.animatableItem, styles.center]} activeOpacity={0.7} onPress={hideToast} >
        <Text style={styles.messageText}>{toastMessage.text}</Text>
      </TouchableOpacity>
    </Animatable.View>
  )
}

export default Toast
