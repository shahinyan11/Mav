import React, { FC, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  ListRenderItem,
} from 'react-native'
import styles from './styles'
import { FlatList, useColorMode } from 'native-base'
import {
  StackNavigationHelpers,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import img from '@/assets/images/talent.png'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import FAQCard from '@/components/cards/FAQCard'
import FaqCardItem from '@/components/cards/FaqQuestions/FaqCardItem'
import FaqExpandedItem from '@/components/cards/FaqQuestions/FaqExpandedItem'
import { icons } from '@/components/inputs/assets/icons'
import FaqEditTextCard from '@/components/cards/FaqEditTextCard'
import {
  dummyBlock,
  dummyData,
  socialMedia,
  discoverArray,
  aboutArray,
  talentArray,
  topicsArray,
} from './faqData'
import FaqFooterCard from '@/components/cards/FaqFooterCard'
import FaqInnerCard from '@/components/cards/FaqInnerCard'
import FaqTopcard from '@/components/cards/FaqTopcard'
import FaqBottomView from '@/components/cards/FaqBottomView'
import { SafeAreaView } from 'react-native-safe-area-context'
interface Props {
  navigation: StackNavigationHelpers;
  options: StackNavigationOptions;
}
type ListItem= {id: number, title: string, icon: any, detail : string}
interface Props {
  item: ListItem;
}
const Faq: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()
  const [selectedItem, setSelectItem] = useState(-1)
  const renderItem : ListRenderItem<ListItem>= ({ item }) => {
    return (
      <View>
        <FAQCard
          data={{
            icon: item.icon,
            title: item.title,
            description: item.detail,
          }}
        />
      </View>
    )
  }
  const renderFaqQuestion : ListRenderItem<ListItem> = ({ item }) => {
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
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>

  )
}
export default Faq
