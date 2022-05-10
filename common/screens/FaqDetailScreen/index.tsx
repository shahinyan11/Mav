import React, { FC, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  ListRenderItem,
} from 'react-native'
import styles from './styles'
import { FlatList, useColorMode } from 'native-base'
import {
  StackNavigationHelpers,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import FAQCard from '@/components/cards/FAQCard'
import FaqCardItem from '@/components/cards/FaqQuestions/FaqCardItem'
import FaqExpandedItem from '@/components/cards/FaqQuestions/FaqExpandedItem'
import FaqEditTextCard from '@/components/cards/FaqEditTextCard'
import {
  dummyBlock,
  dummyData,
} from './faqData'
import FaqTopcard from '@/components/cards/FaqTopcard'
import FaqBottomView from '@/components/cards/FaqBottomView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { mainRoutes } from '@/config/routes'

type ListItem = { id: number, title: string, icon: any, detail: string }

const FaqDetailScreen = () => {
  const navigation = useNavigation()
  const { colorMode } = useColorMode()
  const [selectedItem, setSelectItem] = useState(-1)
  const renderItem: ListRenderItem<ListItem> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate(mainRoutes.FaqDetail.id)
      }}>
        <FAQCard
          data={{
            icon: item.icon,
            title: item.title,
            description: item.detail,
          }}
        />
      </TouchableOpacity>
    )
  }
  const renderFaqQuestion: ListRenderItem<ListItem> = ({ item }) => {
    if (item.id === selectedItem) {
      return (
        <FaqExpandedItem
          data={item}
          onItemPress={(id) => {
            id === selectedItem ? setSelectItem(-1) : setSelectItem(id)
          }}
        />
      )
    }
    else {
      return (
        <FaqCardItem
          data={item}
          onItemPress={(id) => {
            setSelectItem(id)
          }}
        />
      )
    }
  }
  return (
    <View style={styles.container}>
      <Foreground>
        <BlurView
          intensity={100}
          tint={colorMode as BlurTint}
          style={styles.blur}
        >
          <ScrollView
            contentContainerStyle={styles.mainScrollStyle}
          >
            <FaqTopcard />
            <Text style={styles.commonHeadingStyle}>Popular Questions</Text>
            <FlatList
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              ListFooterComponent={() => <View style={{ height: 45 }} />}
              data={dummyData}
              renderItem={renderFaqQuestion}
            />
            <Text style={styles.commonHeadingStyle}>Popular Questions</Text>
            <FlatList
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              data={dummyBlock as ListItem[]}
              renderItem={renderItem}
            />
            <FaqEditTextCard />
            <FaqBottomView />
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default FaqDetailScreen
