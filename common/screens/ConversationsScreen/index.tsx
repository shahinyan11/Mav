import React, { useLayoutEffect } from 'react'
import styles from './styles'
import ConversionItem from '@/components/ConversionItem'
import { FlatList, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import { Close } from '@/assets/svgs'
import { conversationArray } from './conversationData'
import { useNavigation } from '@react-navigation/native'
import { CardStyleInterpolators } from '@react-navigation/stack'

export interface Conversation {
  id: number
  img: ImageSourcePropType
  name: string
  storyfileID: number
}

const ConversationsScreen = () => {
  const headerHeight = useHeaderHeight()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Conversations',
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      headerTitle: 'Conversations',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerLeft: () => <></>,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close color="#fff" width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const renderItem = ({ item: conversation }: { item: Conversation }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Conversation', {
          storyfileID: conversation.storyfileID,
        })
      }}
    >
      <ConversionItem item={conversation} />
    </TouchableOpacity>
  )

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: headerHeight + 18,
        },
      ]}
    >
      <View style={styles.content}>
        <FlatList<Conversation>
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.pb_20}
          data={conversationArray}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  )
}

export default ConversationsScreen
