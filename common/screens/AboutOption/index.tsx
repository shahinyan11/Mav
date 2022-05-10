import React, { FC } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import { useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'
import Foreground from '@/views/layout/Foreground'
import { imagesAboutOption2 as images } from '@/assets/images'
import Header from './Sections/Header'
import VideoView from '@/components/Sections/VideoView'
import { BlurTint, BlurView } from 'expo-blur'
import Post from './Sections/Post'
import quoteIcon from '@/assets/images/quoteGradient.png'
import Learning from '@/components/Sections/Learning'
import Partner from '@/components/Sections/Partner'
import Donate from '@/components/Sections/Donate'
import CorePrinciples from './Sections/CorePrinciples'
import Commitment from '@/components/Sections/Commitment'
import Team from './Sections/Team'
import Footer from './Sections/Footer'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const AboutOption: FC<Props> = ({ navigation, options }) => {
  const { colorMode } = useColorMode()

  return (
    <View style={styles.container}>
      <Foreground>
        <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
          <ScrollView style={{ backgroundColor: '#E5E5E5' }}>
            <Header data={{
              title: 'Versus is the future of learning, today.',
              images: [
                images.img1,
                images.img2,
                images.img3,
                images.img4,
              ],
            }} />
            <Post data={{
              title: 'The Versus Mission',
              description: 'A mission statement is an action-oriented statement, declaring the purpose an organization serves to its audience. It often includes a general description of the organization, its function, and its objectives.',
              text: 'As a company grows, its objectives and goals may be reached, and in turn they\'ll change. Therefore, mission statements should be revised as needed to reflect the business\'s new culture as previous goals are met.',
              bottomText: 'Every vision starts with a motive',
            }} />
            <VideoView
              iconColor={'rgba(255, 242, 0, 1)'}
              source={{ uri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4' }}
            />
            <Learning data={{
              title: 'We want to help making learning as accessible as possible, for everyone.',
              topIcon: quoteIcon,
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
              type: 2,
              list: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus.',
              ],
            }} />
            <Team data={{
              title: 'We’re always on the lookout for great talent!',
              text: 'Check out our careers page to see the roles we currently have available. If theres a role you think you’d be perfect for but it isn’t listed, we’d love to hear from you!',
              list: [
                'Production Director',
                'Research Analyst',
                'Frontend Developer',
              ],
            }} />
            <Footer data={[
              {
                title: 'Discover',
                links: ['Versus Platform', 'Expert Advice', 'Feedback', 'Price Plans', 'Newsletter'],
              },
              { title: 'About', links: ['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Support'] },
              {
                title: 'Talent',
                links: ['Bruno Mars', 'Justin Timberlake', 'Drew Brees', 'Tom Brady', 'Michael Jordan'],
              },
              {
                title: 'Topics',
                links: ['Nutrition', 'Mental Strength', 'Agility Training', 'Money Management', 'Building Confidence'],
              },
            ]} />
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default AboutOption
