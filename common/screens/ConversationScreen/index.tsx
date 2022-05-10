import React, { useRef, useLayoutEffect, useState } from 'react'
import { View, Text, FlatList, ImageBackground, TextInput, Switch, Platform } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAvoidingView } from 'native-base'
import { CardStyleInterpolators } from '@react-navigation/stack'
import backgroundImage from '@/assets/images/ConversationalAI/conversational_ai_jennie.jpg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Send } from '@/assets/svgs'
import { BlurView } from 'expo-blur'
import { Close } from '@/assets/svgs'
import { uniqueId } from 'lodash'
import { useStoryfile } from '@/hooks/useStoryfile'
import PagerView from 'react-native-pager-view'
import styles from './styles'
import TalkView from '@/screens/ConversationScreen/TalkView'
import GuidedDiscussions from './GuidedDiscussions'
import TopicsView from '@/screens/ConversationScreen/TopicsView'

interface Message {
  id: string
  name: string
  content: string
}

type ParamList = {
  Conversation: {
    storyfileID: number
  }
}

const ConversationScreen = () => {
  const route = useRoute<RouteProp<ParamList>>()
  const headerHeight = useHeaderHeight()
  const pagerView = useRef<PagerView>(null)
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [messages, setMessages] = useState<Message[]>([])
  const [activeTab, setActiveTab] = useState<number>()
  const [message, setMessage] = useState('')
  const [on, setOn] = useState(false)
  const disabled = message.length === 0
  const {
    config,
    conversationStarters,
    dialogue,
    interact,
  } = useStoryfile(route.params.storyfileID.toString())

  useLayoutEffect(() => {
    navigation.setOptions({
      title: on ? 'Guided discussions' : 'Talk to Jennie',
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerLeft: () => (
        <View style={{ width: 42, height: 24, justifyContent: 'center', alignItems: 'center' }}>
          <Switch
            value={on}
            onValueChange={(value) => setOn(value)}
            thumbColor={on ? '#000' : '#fff'}
            trackColor={{
              false: 'rgba(237, 237, 237, 1)',
              true: 'rgba(255, 255, 255, 1)',
            }} />
        </View>

      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close color='#fff' height={24} width={24} />
        </TouchableOpacity>
      ),
    })
  }, [on, navigation])

  const send = async () => {
    if (disabled) return

    setMessages((previous) => [{
      id: uniqueId(),
      name: 'Zack',
      content: message,
    }, ...previous])

    interact(message)

    setMessage('')
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ImageBackground
        resizeMode='cover'
        style={{ flex: 1 }}
        source={backgroundImage}>
        {
          on
            ? <GuidedDiscussions />
            : <KeyboardAvoidingView
              {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
              style={{ flex: 1 }}>
              <PagerView
                ref={pagerView}
                style={{ flex: 1 }}
                initialPage={1}
                onPageSelected={({ nativeEvent }) => {
                  setActiveTab(nativeEvent.position)
                }}>
                <TalkView key={1} />
                <View key={2}>
                  <FlatList<Message>
                    inverted
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    contentContainerStyle={{ padding: 20 }}
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: message }) => {
                      const { name, content } = message
                      return (
                        <View style={{ flex: 1 }}>
                          <BlurView
                            style={{
                              padding: 16,
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                              borderWidth: 1,
                              borderRadius: 8,
                              overflow: 'hidden',
                            }}
                            intensity={100} tint='dark'>
                            <View style={{ paddingBottom: 4 }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  opacity: 0.6,
                                  fontFamily: 'Helvet_medium',
                                  fontSize: 16,
                                }}>{name}</Text>
                            </View>
                            <Text style={{ color: '#fff' }}>{content}</Text>
                          </BlurView>
                        </View>
                      )
                    }} />
                  <View style={{ paddingBottom: insets.bottom, paddingHorizontal: 20 }}>
                    <View style={{
                      backgroundColor: '#fff', padding: 16, borderRadius: 24,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <View style={{ flex: 8 }}>
                        <TextInput
                          value={message}
                          onChangeText={(text) => setMessage(text)}
                          multiline
                          placeholder='Type your question' />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                          disabled={disabled}
                          onPress={send}>
                          <Send width={26} height={26} color={disabled ? '#ccc' : '#000'} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View key={3}>
                  <Text>Topics</Text>
                </View>
                <View key={4}>
                  <Text>Log</Text>
                </View>
              </PagerView>
            </KeyboardAvoidingView>
        }
      </ImageBackground>
      {
        !on && <View style={{
          width: '100%',
          marginBottom: insets.bottom,
          flexDirection: 'row',
          height: 38,
          justifyContent: 'space-around',
        }}>
          {
            ['Talk', 'Type', 'Topics', 'Log'].map((tabName, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  height: '100%',
                  minWidth: 52,
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor: index === activeTab ? '#FFF200' : 'transparent',
                }}
                onPress={() => pagerView.current?.setPage(index)}>
                <Text style={{ ...styles.tab, color: `rgba(255,255,255, ${index === activeTab ? 1 : 0.5})` }}>
                  {tabName}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
      }
    </View>
  )
}

export default ConversationScreen
