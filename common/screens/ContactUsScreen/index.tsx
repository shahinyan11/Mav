import React, { useCallback, useRef, useState } from 'react'
import { View, Image, Text, ScrollView, useWindowDimensions } from 'react-native'
import Foreground from '@/views/layout/Foreground'
import { backgroundImages } from '@/assets/images'
import { device, ratio } from '@/constants'
import Button from '@/views/general/Button'
import { Input } from '@ui-kitten/components'
import { Chevron, Close } from '@/assets/svgs'
import styles from './styles'
import { Pressable } from 'native-base'
import { useHeaderHeight } from '@react-navigation/elements'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useDispatch } from 'react-redux'
import { makeAction } from '@/makeActions'
import { ContactActionType } from '@/store/contact/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppSelector } from '@/app/hooks'

const ContactUsScreen = () => {
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()
  const { height } = useWindowDimensions()
  const dispatch = useDispatch()
  const {
    topics,
    selectedTopic,
    message,
  } = useAppSelector((state) => state.contact)

  const [submited, setSubmited] = useState<boolean>(false)
  const modal = useRef<RBSheet>(null)
  const disabled = (useCallback(() => {
    return selectedTopic === null || message?.length < 10
  }, [selectedTopic, message]))()

  const modalToggle = (visible: boolean) => {
    visible ? modal.current?.open() : modal.current?.close()
  }

  const changeText = (value: string) => {
    dispatch(makeAction(ContactActionType.SetMessage, value))
  }

  const selectTopic = (value: string) => {
    dispatch(makeAction(ContactActionType.SetActiveTopic, value))
    modalToggle(false)
  }

  const sendContactUs = () => {
    dispatch(makeAction(ContactActionType.Send))
    setSubmited(true)
  }

  return (
    <View style={[styles.container, { paddingTop: headerHeight + 24 }]}>
      <Foreground>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Image
            source={backgroundImages.bgContactUs}
            style={{
              position: 'absolute',
              bottom: 0,
              width: device.screenWidth,
              height: 470,
              resizeMode: 'stretch',
            }} />
          {!submited ? (
            <View>
              <Pressable
                style={styles.select}
                onPress={() => modalToggle(true)}>
                <Text style={[styles.selectPlaceholder, { color: !selectedTopic ? 'rgba(136, 136, 136, 1)' : '#000' }]}>
                  {selectedTopic || 'What is your query related to?'}
                </Text>
                <Chevron />
              </Pressable>

              <View
                style={{
                  height: ratio.height * 297,
                  backgroundColor: '#FFF',
                  borderRadius: 8,
                  justifyContent: 'space-between',
                }}>
                <Input
                  multiline={true}
                  textStyle={{ minHeight: 50 }}
                  blurOnSubmit={true}
                  placeholder={'Please tell us what you are \nenquiring about'}
                  value={message}
                  onChangeText={changeText}
                />
                <Button
                  disabled={disabled}
                  customStyles={styles.button}
                  status={'control'}
                  onPress={sendContactUs}>
                  <Text style={styles.buttonText}>Submit</Text>
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.title}>Thank you for getting in touch.</Text>
              <Text style={styles.text}>We&apos;ll get back to you as soon as we can.</Text>
              <Button
                customStyles={[styles.button, { backgroundColor: '#FFF', marginTop: 0, margin: 0 }]}
                status={'basic'}
                onPress={() => {
                  setSubmited(false)
                }}>
                <View>
                  <Text style={styles.buttonText}>Ask another question</Text>
                </View>
              </Button>
            </View>
          )}
        </View>
        <RBSheet
          ref={modal}
          height={height - insets.top - 24}
          openDuration={250}
          closeOnDragDown={true}
          animationType="fade"
          customStyles={{
            container: {
              backgroundColor: '#FFFFFF',
              borderTopRightRadius: ratio.width * 16,
              borderTopLeftRadius: ratio.width * 16,
              paddingHorizontal: ratio.width * 20,
            },
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            draggableIcon: {
              backgroundColor: '#FFFFFF',
            },
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 28, paddingBottom: 100 }}>
            <View style={{ marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.modalTitle}>What is your query related to?</Text>
              <Pressable onPress={() => modalToggle(false)}>
                <Close width={ratio.height * 20} height={ratio.height * 20} color={'black'} />
              </Pressable>
            </View>

            {topics.map((value: string, index: number) => (
              <Pressable
                key={index}
                onPress={() => selectTopic(value)}>
                <View style={styles.selectItem}>
                  <Text style={styles.selectItemText}>{value}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </RBSheet>
      </Foreground>
    </View>
  )
}

export default ContactUsScreen
