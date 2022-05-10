import React, { FC, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import DownloadCircleProgress from '@/components/DownloadCircleProgress'

interface Props {
  data: any
  onPress?: () => void
  containerStylesProp?: object
}

const BottomSheetItem: FC<Props> = ({ data, onPress, containerStylesProp = {} }) => {
  const [downloading, setDownloading] = useState(false)
  const [percent, setPercent] = useState(70)

  const handlePress = (elem) => {
    onPress(elem)

    switch (elem.key) {
      case 'download':
        onDownload()
        break
      default:
        break
    }
  }

  const onDownload = () => {
    setDownloading(!downloading)
  }

  return (
    <View style={styles.BottomSheetGlobalContainer}>
      {
        data.map((elem) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={elem.key}
              onPress={() => {
                handlePress(elem)
              }}
              style={[styles.BottomSheetContainer, containerStylesProp]}
            >
              <View style={{ position: 'relative', height: 25, justifyContent: 'center' }}>
                {
                  elem.key === 'download' && downloading
                  && <View style={{ position: 'absolute', left: -35 }}>
                    <DownloadCircleProgress percent={percent} size={25} />
                  </View>
                }
                <Text style={styles.BottomSheetText}>{elem.label}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>

  )
}

export default BottomSheetItem
