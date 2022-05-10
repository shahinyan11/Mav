import React, { FC, useState } from 'react'
import { View, ImageBackground, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { FlatList, useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { BlurTint, BlurView } from 'expo-blur'
import { ratio } from '@/constants'
import Foreground from '@/views/layout/Foreground'
import CourseLandingHeader from '@/components/Sections/CourseLandingHeader'
import Tabs from '@/components/tabs'
import RoutinesItem from '@/components/RoutinesItem'
import AboutItem from '@/components/AboutItem'
import routines_1 from '@/assets/images/Routines/routines_1.png'
import routines_2 from '@/assets/images/Routines/routines_2.png'
import routines_3 from '@/assets/images/Routines/routines_3.png'
import routines_4 from '@/assets/images/Routines/routines_4.png'
import bottomLogo from '@/assets/images/CourseLanding/bottomLogo.png'
import bottomImage from '@/assets/images/CourseLanding/bottomImage.png'
import topBg from '@/assets/images/CourseLanding/topBg.jpg'
import topTextRGBA from '@/assets/images/CourseLanding/topTextRGBA.png'
import fixedHeaderBG from '@/assets/images/CourseLanding/fixedHeaderBG.png'
import * as Animatable from 'react-native-animatable'

import { ArrowLeft } from '@/assets/svgs'
import VSButton from '@/views/general/Button'
import SessionCard from '@/components/SessionCard'
import { sessions } from './data'
interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const CourseLanding: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()
  const [activetab, setActiveTab] = useState('sessions')
  const [showFixedHeader, setShowFixedHeader] = useState(false)
  const [y, setY] = useState(null)
  const fixedHeader = () => {
    return (
      <Animatable.View style={styles.fixedHeader} duration={300} animation="fadeInDown">
        <ImageBackground resizeMode={'cover'} source={fixedHeaderBG} style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
          <View style={styles.fixedHeaderContent}>
            <TouchableOpacity style={styles.goBack}>
              <ArrowLeft iconColor={'#888888'} />
            </TouchableOpacity>
            <Tabs
              containerStylesProp={{ justifyContent: 'flex-start' }}
              activeTextStyle={{ color: 'black' }}
              activetab={activetab}
              onPress={(active) => setActiveTab(active)}
              tabs={[
                {
                  title: 'Sessions',
                  key: 'sessions',
                },
                {
                  title: 'Routines',
                  key: 'routines',
                },
                {
                  title: 'About',
                  key: 'about',
                },
              ]}
            />
          </View>
        </ImageBackground>
      </Animatable.View>
    )
  }

  const defaultHeader = () => {
    return (
      <Tabs
        activetab={activetab}
        onPress={(active) => setActiveTab(active)}
        tabs={[
          {
            title: 'Sessions',
            key: 'sessions',
          },
          {
            title: 'Routines',
            key: 'routines',
          },
          {
            title: 'About',
            key: 'about',
          },
        ]}
      />
    )
  }

  const renderSessionTab = () => {
    return (
      <FlatList
        data={sessions}
        renderItem={({ item }) => <SessionCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    )
  }

  const renderAboutItem = () => {
    return (
      <AboutItem
        data={`
    A five-time World Series champion, Jeter is regarded as one of the primary contributors to the Yankees' success of the late 1990s and early 2000s for his hitting, base-running, fielding, and leadership. He is the Yankees' all-time career leader in hits, doubles, games played, stolen bases, times on base, plate appearances and at bats.

A five-time World Series champion, Jeter is regarded as one of the primary contributors to the Yankees' success of the late 1990s and early 2000s for his hitting, base-running, fielding, and leadership. He is the Yankees' all-time career leader in hits, doubles, games played, stolen bases, times on base, plate appearances and at bats.
    `}
      />
    )
  }

  const renderRoutines = () => {
    const datas = [
      {
        badgeText: 'Beginner',
        title: 'Morning routine',
        description: 'Set mini goals and milestones throughout',
        image: routines_3,
        heigth: ratio.height * 210,
        id: 1,
      },
      {
        badgeText: 'Advanced',
        title: 'Deep stretching',
        description: 'Set mini goals and milestones throughou',
        image: routines_2,
        heigth: ratio.height * 374,
        id: 2,
      },
      {
        badgeText: 'Beginner',
        title: 'Healthy nutrition',
        description: 'Set mini goals and milestones throughout',
        image: routines_1,
        heigth: ratio.height * 363,
        id: 3,
      },

      {
        badgeText: 'Advanced',
        title: 'Power of meditation',
        description: 'Set mini goals and milestones throughou',
        image: routines_4,
        heigth: ratio.height * 306,
        id: 4,
      },
    ]
    const leftBlock = []
    const rigthBlock = []
    datas.forEach((item, index) => {
      if (index % 2 === 0) {
        leftBlock.push(<RoutinesItem data={item} />)
      }
      else {
        rigthBlock.push(<RoutinesItem data={item} />)
      }
    })
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
        }}
      >
        <View style={{ flex: 1 }}>{leftBlock}</View>
        <View style={{ flex: 1 }}>{rigthBlock}</View>
      </View>
    )
  }

  const renderList = () => {
    console.log('activeTab', activetab)
    switch (activetab.active) {
      case 'sessions':
        return renderSessionTab()
      case 'routines':
        return renderRoutines()
      case 'about':
        return renderAboutItem()
      default:
        return renderSessionTab()
    }
  }

  return (
    <View style={styles.container}>
      {/* { fixedHeader() }*/}
      <Foreground>
        <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
          <ScrollView
          // onScroll={e => {
          //   if (e.nativeEvent.contentOffset.y >= y) {
          //     setShowFixedHeader(true)
          //   } else {
          //     setShowFixedHeader(false)
          //   }
          // }}
          >
            <ImageBackground style={{ width: '100%', flex: 1 }} resizeMode={'cover'} source={topBg}>
              <CourseLandingHeader data="Derek Jeter" />
              <ImageBackground resizeMode={'stretch'} source={topTextRGBA} style={styles.topContent}>
                <Text style={styles.topTitle}>Breaking Boundaries</Text>
                <Text style={styles.subTitle}>
                  Known as “The Captain”, Derek Jeters’ legacy is solidified as one of the greatest teammates and leaders in all of sports.
                </Text>
                <View style={styles.buttonContainer}>
                  <VSButton customStyles={[styles.yellowBTN, { marginRight: 8 }]}>Start Course</VSButton>
                  <VSButton customStyles={[styles.grayBTN, { marginLeft: 8 }]}>
                    <Text style={{ color: 'white' }}>Play trailer</Text>
                  </VSButton>
                </View>
                {/* {!showFixedHeader ? defaultHeader() : null}*/}
                {defaultHeader()}
              </ImageBackground>
            </ImageBackground>
            <View onLayout={({ nativeEvent }) => setY(nativeEvent?.layout?.y)} style={styles.flatListContainer}>
              {renderList()}

              <View style={styles.buttonContainerBottom}>
                <VSButton customStyles={[styles.yellowBTN, { marginRight: 8 }]}>Start Course</VSButton>
                <VSButton customStyles={[styles.grayBTN, { marginLeft: 8, backgroundColor: 'white' }]}>Talk to Derek</VSButton>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.bottomLogoContainer}>
                <Image source={bottomLogo} />
              </View>
              <ImageBackground style={styles.bottomImageContainer} source={bottomImage}>
                <Text style={styles.bottomContainerText}>What’s Derek’s favourite play? Ask him.</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default CourseLanding
