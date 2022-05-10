import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native'
import Button from '@/views/general/Button'
import styles from './styles'
import { backgroundImages } from '@/assets/images'
import Tabs from '@/components/tabs'
import { tabs, cards } from './screenData'
import PlanCard from '@/components/cards/PlanCard'
import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

const ChoosePlanScreen = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Annual')
  const contentRef = useRef()

  const handleChange = ({ viewableItems }) => {
    if (viewableItems.length) {
      setActiveTab(tabs[viewableItems[0].index].key)
    }
  }

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: handleChange,
    },
  ])

  const _onPress = (data: object) => {
    setActiveTab(data.active)
    contentRef.current.scrollToIndex({ animated: true, index: data.index, viewPosition: 0.5 })
  }

  const renderItem = (item: object, index: number) => {
    return (
      <PlanCard data={{ ...item, index }} />
    )
  }

  const height = useHeaderHeight()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Choose Payment',
    })
  }, [navigation])

  return (
    <ImageBackground
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: height + 24,
      }}
      resizeMode={'cover'}
      source={backgroundImages.fgPassBg}
    >
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 335 }}>
            <Tabs
              activetab={activeTab}
              onPress={(data) => _onPress(data)}
              tabs={tabs}
              colors={{
                active: 'rgba(0, 0, 0, 1)',
                inActive: 'rgba(192, 192, 192, 1)',
              }}
            />
          </View>
          <FlatList
            data={cards}
            ref={contentRef}
            contentContainerStyle={styles.flatlistContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderItem(item, index)}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          />

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Have a promo code? </Text>
            <Text style={[styles.text, { color: 'rgba(136, 136, 136, 1)' }]}>You can enter it at checkout.</Text>
          </View>
          <View style={{ width: 335, marginVertical: 35 }}>
            <Button
              status={'control'}
              customStyles={styles.button}
            // onPress={signIn}
            >
              <View>
                <Text style={styles.buttonText}>
                  Continue to payment
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
export default ChoosePlanScreen
