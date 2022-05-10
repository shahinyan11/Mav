import React, { FC, useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { Props } from './types'
import { device } from '@/constants'
import { N2 } from '@/assets/svgs'

const Commitment: FC<Props> = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      {
        device.isTablet
          ? data.list.map((value, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setActiveIndex(index)
              }}
            >
              <View style={[styles.card, (activeIndex === index ? styles.cardActive : {})]}>
                <View>
                  {activeIndex === index && <Text style={styles.number}>{index + 1}</Text>}
                </View>
                <View>
                  {activeIndex !== index && <Text style={styles.smallNumber}>{index + 1}</Text>}
                  <Text
                    style={[styles.text, (activeIndex === index ? styles.textActive : {})]}>{data.list[activeIndex]}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))
          : <View style={[styles.card, styles.cardActive]}>
            {
              data.type === 2
                ? < N2 / >
                  :<Text style={styles.number}>
                    {activeIndex + 1}
                  </Text>
            }

            <Text style={styles.text}>{data.list[activeIndex]}</Text>
          </View>
      }
      <View style={{ flexDirection: 'row', marginTop: 32 }}>
        {
          data.list.map((value, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => {
              setActiveIndex(index)
            }}>
              <View style={index === activeIndex ? styles.activeDote : styles.dote} />
            </TouchableWithoutFeedback>
          ))
        }
      </View>
    </View>
  )
}

export default Commitment
