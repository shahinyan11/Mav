import React, { FC, useState } from 'react'
import { View, ImageBackground, Image, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import Button from '@/views/general/Button'
import { Play } from '@/assets/svgs'

interface Props {
  data: any
}

const SessionCard: FC<Props> = ({ data }) => {
  const [hover, setHover] = useState(false)
  const [played, setPlayed] = useState(false)

  return (
    <View style={styles.card}>
      <Button
        status={'basic'}
        onPress={() => {
          setHover(!hover)
        }}
      >
        <View>
          <ImageBackground source={data.background} style={styles.cardBgImage} resizeMode='cover'>
            <View style={[styles.overlay, { backgroundColor: `rgba(0, 0, 0, ${hover ? 0.6 : 0} )` }]}>
              <Text style={styles.text}>
                {`Ep ${data.epNumber} • ${data.duration} ${hover ? '• ' + data.topic : ''}`}
              </Text>
              <Text style={styles.title}>
                {data.title}
              </Text>
              <Text style={styles.description}>
                {hover ? data.description : ''}
              </Text>
              <View style={styles.bottom}>
                {
                  hover
                    ? <>
                      <TouchableOpacity style={styles.bigButton} onPress={() => {
                        setPlayed(!played)
                      }}>
                        <View style={styles.playIcon}>
                          <Play/>
                        </View>
                        <Text style={styles.text}>{played ? 'Continue watching' : 'Watch episode'}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.smallButton}>
                        <Text style={styles.text}>+</Text>
                      </TouchableOpacity>
                    </>
                    : <Text style={styles.text}>{data.teacher}</Text>
                }

              </View>
            </View>
          </ImageBackground>
        </View>
      </Button>
      <View style={styles.statusBar}>
        <View style={{ flex: 1, backgroundColor: 'yellow', width: `${50}%` }} />
      </View>
    </View>
  )
}


export default SessionCard
