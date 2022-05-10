import React, { FC, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'

import background from '@/assets/placeholders/bg-justin.png'
import Foreground from '@/views/layout/Foreground'
import SubNav from '@/views/navigation/SubNav'
import Background from '@/views/layout/Background'
import { BlurTint, BlurView } from 'expo-blur'
import AccordianItem from '@/components/cards/AccordionCard/AccordionCardItem'
import AccordionExpandedItem from '@/components/cards/AccordionCard/AccordionExpandedItem'
const dummyData = [
  {
    id: 1,
    title: 'What is the cancellation policy?',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 2,
    title: 'What is the cancellation policy?',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 3,
    title: 'What is the cancellation policy?',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]
interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const TalentScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()
  const [selectedItem, setSelectItem] = useState(null)
  const renderItem = ({ item }) => {
    if (item.id === selectedItem) {
      return (
        <AccordionExpandedItem
          data={item}
          onItemPress={(id) => {
            id === selectedItem ? setSelectItem(null) : setSelectItem(id)
          }}
        />
      )
    }
    else {
      return (
        <AccordianItem
          data={item}
          onItemPress={(id) => {
            setSelectItem(id)
          }}
        />
      )
    }
  }
  return (
    <View>
      <Background source={background} />

      <Foreground>
        {/* <BlurView intensity={100} tint={colorMode as BlurTint} style={style.blur}>
          <SubNav title={'Talent'}/>
          <Text p="6">DETAILS</Text>
        </BlurView> */}
        <FlatList ItemSeparatorComponent={() => <View style={{ height: 10 }} />} renderItem={renderItem} data={dummyData} />
      </Foreground>
    </View>
  )
}

const style = StyleSheet.create({
  blur: {
    height: '100%',
  },
  header: {
    marginTop: 20,
  },
})

export default TalentScreen
