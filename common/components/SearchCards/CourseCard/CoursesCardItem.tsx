import { icons } from '@/components/inputs/assets/icons'
import React from 'react'
import {
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Course from '@/models/course'
interface CourseCardProps {
  course: Course
}

const CourseCard = ({ course }: CourseCardProps): JSX.Element => {
  const { title, name } = course
  return (
    <LinearGradient
      colors={['#F1F1F1', '#F1F1F1']}
      style={styles.mainViewLG}>
      <ImageBackground
        source={require('@/assets/images/courseBg.png')}
        style={[styles.mainViewLG, styles.fullViewBg]}>
        <View
          style={[{ width: 240, height: 290, borderRadius: 10 }, styles.opacity1_2]}>
          <View style={styles.elevation_one}>
            <View style={styles.alignContentStyle}>
              <Text style={styles.nameStyle}>{name}</Text>
              <Text style={styles.representationStyle}>
                {title}
              </Text>
              <Image
                source={require('@/assets/images/gettyimages.png')}
                resizeMode={'cover'}
                style={styles.imageStyle}
              />
            </View>
            <Image style={styles.plusIconStyle} source={icons.add} />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}

export default CourseCard
