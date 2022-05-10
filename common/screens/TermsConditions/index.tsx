import React, { FC, useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import { backgroundImages } from '@/assets/images'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import Data from '@/data'
import { useNavigation } from '@react-navigation/core'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from './styles'

const TermsConditions: FC = () => {
  const navigation = useNavigation()
  const [visibleIndex, setVisibleIndex] = useState(0)
  const sidebarRef = useRef()
  const contentRef = useRef()

  const handleChange = ({ viewableItems }) => {
    if (viewableItems.length) {
      setVisibleIndex((viewableItems[1] || viewableItems[0])?.index)
    }
  }

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: 500,
        itemVisiblePercentThreshold: 10,
      },
      onViewableItemsChanged: handleChange,
    },
  ])

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTintColor: '#000',
    })
  })

  useEffect(() => {
    sidebarRef.current.scrollToIndex({ animated: true, index: visibleIndex })
  }, [visibleIndex])

  function stylingText(text) {
    const arrTexts = text.split('^^')
    return arrTexts.map((value, index) => {
      if (value.trim()[0] === '*') {
        return (
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}> {String.fromCharCode('0x2022')} </Text>
            <Text style={styles.text}>{value.trim().substring(1).trim()}</Text>
          </View>
        )
      }
      else {
        return <Text style={styles.text}>{value}</Text>
      }
    })
  }

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={index ? styles.title : styles.contentTitle}>{item.title}</Text>
        <View>
          {stylingText(item.text)}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Background source={backgroundImages.bgTermsConditions} />
      <Foreground>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', paddingTop: 25, paddingBottom: 12 }}>
            <FlatList
              ref={sidebarRef}
              horizontal={true}
              data={Data.TermsConditions}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableWithoutFeedback onPress={() => {
                    sidebarRef.current.scrollToIndex({ animated: true, index: index })
                    contentRef.current.scrollToIndex({ animated: true, index: index })
                    setVisibleIndex(index)
                  }}>
                    <View style={styles.menuItem}>
                      <Text
                        style={[styles.label, { color: visibleIndex === index ? '#000' : 'rgba(136, 136, 136, 1)' }]}>
                        {item.label}
                      </Text>
                      {visibleIndex === index && <View style={styles.yellowLine} />}
                    </View>
                  </TouchableWithoutFeedback>
                )
              }}
            />
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 51, flex: 1 }}>
            <FlatList
              ref={contentRef}
              data={Data.TermsConditions}
              contentContainerStyle={{ paddingBottom: 61 }}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            />
          </View>
        </View>
      </Foreground>
    </View>
  )
}

export default TermsConditions
