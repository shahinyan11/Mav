import React, { FC, useLayoutEffect } from 'react'
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useColorMode } from 'native-base'
import Foreground from '@/views/layout/Foreground'
import Header from '@/components/Sections/Header'
import VideoView from '@/components/Sections/VideoView'
import { BlurTint, BlurView } from 'expo-blur'
import Post from '@/components/Sections/Post'
import Learning from '@/components/Sections/Learning'
import Partner from '@/components/Sections/Partner'
import Donate from '@/components/Sections/Donate'
import CorePrinciples from '@/components/Sections/CorePrinciples'
import Commitment from '@/components/Sections/Commitment'
import Team from '@/components/Sections/Team'
import GlobalFooter from '@/components/GlobalFooter'
import { device } from '@/constants'
import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/core'
import { ArrowLeft } from '@/assets/svgs'
import topBg from '@/assets/images/about/29612157.png'
import styles from './styles'

const AboutScreen: FC = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'About us',
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          style={{ width: 20, height: 20, alignContent: 'flex-end' }}
          onPress={() => {
            navigation.goBack()
          }}>
          <ArrowLeft iconColor={'#FFF'}/>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  const { colorMode } = useColorMode()
  const headerHeight = useHeaderHeight()

  return (
    <View style={styles.container}>
      <Foreground>
        <BlurView intensity={100} tint={colorMode as BlurTint} >
          <ImageBackground style={styles.background} source={topBg}>
            <View style={{ paddingTop: headerHeight }}>
              <ScrollView>
                <View>
                  <Header data={{
                    title: 'Versus is the future of learning, today.',
                    images: [
                      require('@/assets/images/image77.png'),
                      require('@/assets/images/image85.png'),
                      require('@/assets/images/image86.png'),
                      require('@/assets/images/image84.png'),
                    ],
                  }} />
                </View>
                <View style={{ backgroundColor: '#FAFAFA' }}>
                  <Post data={{
                    title: 'The Versus Mission',
                    description: 'A mission statement is an action-oriented statement, declaring the purpose an organization serves to its audience. It often includes a general description of the organization, its function, and its objectives.',
                    text: 'As a company grows, its objectives and goals may be reached, and in turn they\'ll change. Therefore, mission statements should be revised as needed to reflect the business\'s new culture as previous goals are met.',
                  }} />
                  <VideoView source={{ uri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4' }} />
                  <Learning data={{
                    title: 'We want to help making learning as accessible as possible, for everyone.',
                    images: [
                      require('@/assets/images/image61.png'),
                      require('@/assets/images/image62.png'),
                    ],
                    text: 'Throughout the world, the ability to gain access to learning varies from country to country. There are different cultural values that come into play and different legal aspects that change from region to region and more significantly, financial challenges that are difficult to overcome. \n\n At Versus, we donate a portion of all profits made directly back to the community, empowering people, especially the younger generation, to seek the knowledge they desire to attain in a much more accessible and easier manner. Every subscription, every renewal, every purchase of yours makes a huge impact across many lives. We want to take this time to thank you, sincerely.',
                  }} />
                  <Partner data={{
                    title: 'Our partners',
                    partners: [
                      require('@/assets/images/partner3.png'),
                      require('@/assets/images/partner2.png'),
                      require('@/assets/images/image16.png'),
                      require('@/assets/images/image17.png'),
                      require('@/assets/images/image18.png'),
                      require('@/assets/images/partner1.png'),
                      require('@/assets/images/partner4.png'),
                    ],
                  }} />
                  <Donate data={{
                    title: 'Want to donate to the cause directly?',
                  }} />
                  <CorePrinciples data={{
                    title: 'Core principles',
                    list: [
                      {
                        title: 'Build openness.',
                        description: 'Throughout the world, the ability to gain access to learning varies from country to country.',
                        img: require('@/assets/images/Group29611593.png'),
                      },
                      {
                        title: 'Build openness.',
                        description: 'Throughout the world, the ability to gain access to learning varies from country to country.',
                        img: require('@/assets/images/Group29611593.png'),
                      },
                      {
                        title: 'Build openness.',
                        description: 'Throughout the world, the ability to gain access to learning varies from country to country.',
                        img: require('@/assets/images/Group29611593.png'),
                      },
                      {
                        title: 'Build openness.',
                        description: 'Throughout the world, the ability to gain access to learning varies from country to country.',
                        img: require('@/assets/images/Group29611593.png'),
                      },
                    ],
                  }} />
                  <Commitment data={{
                    title: 'Our commitment to you',
                    list: [
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
                    ],
                  }} />
                  <Team data={{
                    title: 'Want to be a part of the team?',
                    text: 'We’re always on the lookout for great talent!\n\nCheck out our LinkedIn page to see the roles we currently have available.',
                    list: [
                      'Production Director',
                      'Research Analyst',
                      'Frontend Developer',
                    ],
                  }} />
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default AboutScreen
