import React, { FC } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import styles from './styles'
import { Text, useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import background from '@/assets/placeholders/bg-arenas.png'
import cardImage from '@/assets/images/image.png'
import cardImage1 from '@/assets/images/image1.png'
import cardImage2 from '@/assets/images/image2.png'
import cardImage3 from '@/assets/images/image3.png'
import cardImage4 from '@/assets/images/image4.png'
import cardImage5 from '@/assets/images/image5.png'
import cardImage6 from '@/assets/images/image6.png'
import cardImage7 from '@/assets/images/image7.png'
import cardImage8 from '@/assets/images/image8.png'
import cardImage9 from '@/assets/images/image9.png'
import cardImage10 from '@/assets/images/image10.png'
import cardImage11 from '@/assets/images/image11.png'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import SubNav from '@/views/navigation/SubNav'
import NavCard from '../../components/cards/NavCard'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const dataSports = [
  {
    id: '1',
    title: 'Music',
    img: cardImage,
  },
  {
    id: '2',
    title: 'Football',
    img: cardImage1,
  },
  {
    id: '3',
    title: 'Womens\n Soccer',
    img: cardImage2,
  },
  {
    id: '4',
    title: 'Mens \n Soccer',
    img: cardImage3,
  },
  {
    id: '5',
    title: 'Basketball',
    img: cardImage4,
  },
  {
    id: '6',
    title: 'Football',
    img: cardImage5,
  },
]
const dataArts = [
  {
    id: '1',
    title: 'Singers',
    img: cardImage6,
  },
  {
    id: '2',
    title: 'Songwriters',
    img: cardImage7,
  },
  {
    id: '3',
    title: 'Bands',
    img: cardImage8,
  },
  {
    id: '4',
    title: 'Instruments',
    img: cardImage9,
  },
  {
    id: '5',
    title: 'Entertainment',
    img: cardImage10,
  },
  {
    id: '6',
    title: 'Comedy',
    img: cardImage11,
  },
]

const ArenasScreen: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()

  // const fadeOut = (current: any) => {
  //   data.forEach((value, index)=>{
  //     Animated.timing(value.animated, {
  //       toValue: current === index ? 0 : 1,
  //       duration: 500,
  //     }).start()
  //   })
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Background source={background} />
        <Foreground>
          <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
            <SubNav title={'Arenas'} />
            <ScrollView style={{ paddingTop: 40 }}>
              <View style={{ marginBottom: 85 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.slash}>/</Text>
                  <Text style={styles.title}> Sports</Text>
                </View>
                <FlatList
                  horizontal={true}
                  data={dataSports}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item })=><NavCard item={item}/>}
                />
              </View>
              <View style={{ marginBottom: 85 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.slash}>/</Text>
                  <Text style={styles.title}> Arts & Entertainment</Text>
                </View>
                <FlatList
                  horizontal={true}
                  data={dataArts}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item })=><NavCard item={item}/>}
                />
              </View>
            </ScrollView>
          </BlurView>
        </Foreground>

      </View>
    </SafeAreaView>
  )
}


export default ArenasScreen
