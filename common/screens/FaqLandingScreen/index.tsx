import React, { FC, useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import { Cart } from '@/assets/svgs'
import ContactsForm from '@/components/ContactsForm'
import SideBar from '@/components/SideBar'
import styles from './styles'
import AccordionExpandedItem from '@/components/cards/AccordionCard/AccordionExpandedItem'
import AccordianItem from '@/components/cards/AccordionCard/AccordionCardItem'

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

const FaqsLandingScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()
  const [selectedItem, setSelectItem] = useState(null)


  return (
    <View style={styles.container}>
      <Foreground>
        <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
          <ScrollView contentContainerStyle={{ position: 'relative', backgroundColor: '#E5E5E5' }}>
            <SideBar data={[
              'Account', 'Membership', 'Platform', 'Courses', 'Other',
            ]} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Billing</Text>
              <Cart />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Billing Questions</Text>
              {
                dummyData.map((item) => {
                  return (
                    <View key={item.id} style={styles.accardionContainer}>
                      {
                        item.id === selectedItem
                          ? <AccordionExpandedItem
                            data={item}
                            onItemPress={(id) => {
                              id === selectedItem ? setSelectItem(null) : setSelectItem(id)
                            }}
                          />
                          : <AccordianItem
                            data={item}
                            onItemPress={(id) => {
                              setSelectItem(id)
                            }}
                          />
                      }
                    </View>
                  )
                })
              }
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Billing Questions</Text>
              {
                dummyData.map((item) => {
                  return (
                    <View key={item.id} style={styles.accardionContainer}>
                      {
                        item.id === selectedItem
                          ? <AccordionExpandedItem
                            data={item}
                            onItemPress={(id) => {
                              id === selectedItem ? setSelectItem(null) : setSelectItem(id)
                            }}
                          />
                          : <AccordianItem
                            data={item}
                            onItemPress={(id) => {
                              setSelectItem(id)
                            }}
                          />
                      }
                    </View>
                  )
                })
              }
            </View>
            <ContactsForm data={{
              title: 'Can’t find the answer to your question? Ask us directly!',
            }}
            />
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default FaqsLandingScreen
