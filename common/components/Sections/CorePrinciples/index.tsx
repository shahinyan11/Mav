import React, { FC, useState } from 'react'
import { View, Text, Image, FlatList, TouchableWithoutFeedback, Animated } from 'react-native'
import styles from './styles'
import { Props } from './types'
import { device } from '@/constants'
import GestureRecognizer from 'react-native-swipe-gestures'

const CorePrinciples: FC<Props> = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState(null)
  const [visibleIndex, setVisibleIndex] = useState(0)
  const flatlistRef = React.useRef()

  React.useEffect(() => {
    if (flatlistRef.current) {
      flatlistRef.current.scrollToOffset({
        offset: 1, animated: false,
      })
    }
  }, [flatlistRef])

  const handlePress = (data: any, index: number | string) => {
    if (activeItem?.index === index) {
      setActiveItem(null)
    }
    else {
      setActiveItem({
        index,
        data,
      })
    }
  }

  const renderItem = (data: any, index: number | string) => {
    return (
      <View style={styles.item}>
        <TouchableWithoutFeedback
          onPress={() => {
            handlePress(data, index)
          }}
        >
          <View style={[styles.card, (index === activeItem?.index && device.isTablet ? { marginTop: -50 } : {})]}>
            {data.img && <Image style={styles.itemBackground} source={data.img} />}

            <Text style={styles.number}>{index + 1}</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end', width: 212 }}>
              <Text style={styles.number}>{data.title}</Text>
              <Text style={styles.text}>{data.description}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  function leftSwipe() {
    if (visibleIndex < data.list.length - 1) {
      setVisibleIndex(visibleIndex + 1)
      flatlistRef?.current.scrollToIndex({
        animated: true,
        index: visibleIndex + 1,
        viewPosition: 0.5,
      })
    }
  }
  function rightSwipe() {
    if (visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1)
      flatlistRef?.current.scrollToIndex({
        animated: true,
        index: visibleIndex - 1,
        viewPosition: 0.5,
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <GestureRecognizer
        style={styles.content}
        onSwipeLeft={leftSwipe}
        onSwipeRight={rightSwipe}
      >
        <FlatList
          ref={flatlistRef}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          horizontal={true}
          scrollEnabled={false}
          data={data.list}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return index === activeItem?.index && !device.isTablet ? null : renderItem(item, index)
          }}
        />
        {
          activeItem && !device.isTablet
            ? <View style={{ position: 'absolute' }}>
              {renderItem(activeItem?.data, activeItem?.index)}
            </View>
            : null
        }

      </GestureRecognizer>
    </View>
  )
}

export default CorePrinciples
