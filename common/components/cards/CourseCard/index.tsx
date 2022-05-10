import React, { FC, useState } from 'react'
import { View, ImageBackground, Image, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import whiteBg from '@/assets/images/whiteBg.png'
import styles from './styles'
import Button from '@/views/general/Button'

interface Props {
  data: any
}


const CourseCard: FC<Props> = ({ data }) => {
  const [hover, setHover] = useState(false)

  return (
    <View style={styles.card}>
      <Button
        status={'basic'}
        onPress={() => {
          setHover(!hover)
        }}
      >
        <View>
          <ImageBackground source={whiteBg} style={styles.cardBgImage} resizeMode='cover'>
            <View style={{ backgroundColor: hover ? 'rgba(255, 255, 0, 0.6)' : null }}>
              <View style={styles.titlesBox}>
                <Text style={[styles.subTitle, (hover ? { color: 'black' } : {})]}> {data.subTitle}</Text>
                <Text style={styles.title}> {data.title}</Text>
              </View>
              <ImageBackground source={data.img} style={styles.cardImage}>
                {hover
                  ? <>
                    <TouchableOpacity style={styles.bigButton}>
                      <Text>Discover course</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </>
                  : null
                }
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
      </Button>
    </View>
  )
}


export default CourseCard
