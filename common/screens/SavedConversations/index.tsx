import React, { useLayoutEffect, useMemo, useState } from 'react'
import {
  ImageBackground, TouchableOpacity, View, Text, TextInput, FlatList,
} from 'react-native'
import styles from './styles'
import { backgroundImages } from '@/assets/images'
import { useNavigation } from '@react-navigation/core'
import { ArrowLeft, Close, Save } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import Shadow from '@/components/Shadow'

const messages = [
  {
    showIcon: true,
    data: [
      { name: 'Jennie', description: 'Hey, how are you doing today?' },
    ],
  },
  {
    showIcon: true,
    data: [
      { name: 'Rina', description: 'Hey Derek, I want to learn about how you developed an interest in baseball' },
      {
        name: 'Jennie',
        description: 'That’s a great question! It all started when I was around 5 years old. My dad used to play ball with me in the backyard.”',
      },
    ],
  },
  {
    showIcon: true,
    data: [
      { name: 'Rina', description: 'Hey Derek, I want to learn about how you developed an interest in baseball' },
      {
        name: 'Jennie',
        description: 'That’s a great question! It all started when I was around 5 years old. My dad used to play ball with me in the backyard.”',
      },
    ],
  },
]


const SavedConversations = () => {
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const [query, setQuery] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Albert\'s Saved',
      headerShown: true,
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft iconColor={'#000'} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const search = useMemo(() => (
    <View style={{
      paddingBottom: 20,
      paddingTop: 10,
      borderRadius: 8,
    }}>
      <Shadow>
        <View style={styles.searchBox}>
          <View style={{ paddingRight: 16, flex: 1 }}>
            <TextInput
              style={{
                width: '100%',
                fontSize: 16,
                fontFamily: 'Helvet_regular',
                textAlign: query ? 'left' : 'center',
              }}
              value={query}
              onChangeText={setQuery}
              placeholder="Search by Saved Answer"
              placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
            />
          </View>
          {query ? (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Close width={18} height={18} />
            </TouchableOpacity>
          ) : null}
        </View>
      </Shadow>
    </View>
  ), [query])

  return (
    <ImageBackground
      style={[styles.backgroundImage, { paddingTop: headerHeight }]}
      resizeMode={'cover'}
      source={backgroundImages.fgPassBg}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        style={{ overflow: 'hidden', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        showsVerticalScrollIndicator={false}
        data={messages}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={search}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <View style={styles.message}>
            {
              item.data.map((value) => (
                <>
                  <Text style={styles.name}>{value.name}</Text>
                  <Text style={styles.description}>{value.description}</Text>
                </>
              ))
            }
            {
              item.showIcon
                ? <View style={styles.icon}>
                  <Save width={12.5} height={15} color={'rgba(22,22,22, 1)'} />
                </View>
                : null
            }
          </View>
        )} />
    </ImageBackground>
  )
}

export default SavedConversations
