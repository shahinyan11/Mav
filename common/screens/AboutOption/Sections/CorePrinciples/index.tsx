import React, { FC, useState, useRef } from 'react'
import { View, Text, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { Props } from './types'
import { ArrowRight } from '@/assets/svgs'
import Button from '@/views/general/Button'
import { device } from '@/constants'

const CorePrinciples: FC<Props> = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | string>(0)
  const flatListRef = useRef()

  const handlePress = (index: number | string) => {
    setActiveIndex(index)
  }

  const renderItem = (item: any, index: number | string) => {
    return (
      <View style={styles.item}>
        <TouchableWithoutFeedback
          onPress={() => {
            handlePress(index)
          }}
        >
          <View style={styles.card}>
            {item.img && <Image style={styles.itemBackground} source={item.img} />}

            <Text style={styles.number}>{index + 1}</Text>
            <View style={{ flex: 1, justifyContent: 'flex-end', width: 212 }}>
              <Text style={styles.number}>{item.title}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {
          index === activeIndex && <Button
            status={'basic'}
            customStyles={styles.button}
            onPress={() => {
              if (activeIndex < data?.list.length - 1) {
                setActiveIndex(+activeIndex + 1)
                flatListRef?.current.scrollToIndex({ animated: true, index: +activeIndex + 1 })
              }
            }}
          >
            <View>
              <ArrowRight />
            </View>
          </Button>
        }
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          horizontal={true}
          data={data.list}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => renderItem(item, index) }
        />
      </View>
    </View>
  )
}

export default CorePrinciples
