import React, { FC, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import { useHeaderHeight } from '@react-navigation/elements'
import ToggleSwitch from '@/components/ToggleSwitch'

const ConversationalAI: FC = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [subTitle, setSubTitle] = useState(false)
  const [resolution, setResolution] = useState('1080p')
  const headerHeight = useHeaderHeight()

  const _routeHandler = (id: string, selectedValue: string) => {
    navigation.navigate(id, { selectedValue: resolution, onGoBack: refresh })
  }

  const refresh = (resolution = '') => {
    setResolution(resolution)
  }

  return (
    <ImageBackground
      style={[styles.mainContainer, { paddingTop: headerHeight }]}
      resizeMode={'cover'}
      source={PlaylistScreenBG}>
      <View style={styles.conversationUI}>
        <ScrollView style={styles.content}>
          <TouchableOpacity
            onPress={() => _routeHandler('DefaultPlayer', 'selectedValue')}
            style={styles.row}
          >
            <Text style={styles.txtHeading}>Default player resolution</Text>
            <View style={styles.row_al_center}>
              <Text style={styles.resolutionTxt}>{resolution}</Text>
              <Image
                style={styles.arrowForward}
                resizeMode={'center'}
                source={require('@/assets/icons/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={{}}>

            <ToggleSwitch
              title={'Microphone Transcription'}
              isEnabled={isEnabled}
              togglePress={(value) => setIsEnabled(value)}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>
              Short description ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>
          </View>
          <View style={{}}>
            <ToggleSwitch
              title={'Subtitles'}
              isEnabled={subTitle}
              togglePress={(value) => setSubTitle(value)}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>
              Short description ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
export default ConversationalAI
