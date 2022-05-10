import React, { FC, useState } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import styles from './styles'
import Button from '@/views/general/Button'
import { AccountSettings } from '@/assets/svgs'

interface Props {
  data: any;
}

const FAQCard: FC<Props> = ({ data }) => {
  const [hover, setHover] = useState(false)

  return (
    <View style={[styles.card,
    ]}>
      <Button
        status={'basic'}
        onPress={() => {
          setHover(!hover)
        }}
      >
        <View>
          <View style={[styles.main,
            styles.mainHover,
            //  hover ? styles.mainHover : null
          ]}>
            <View style={{ flex: 1 }}>
              <AccountSettings/>
            </View>
          </View>
        </View>
      </Button>
    </View>

  )
}

export default FAQCard
