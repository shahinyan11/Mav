import React, { FC } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import { PlayVideo } from '@/assets/svgs'
import styles from './styles'
import { Props } from './types'

const VideoView: FC<Props> = ({ source, iconColor }: Props) => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={source}
        style={styles.video}
        resizeMode='stretch'
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {
        !status.isPlaying
          ? <View style={styles.overlay}>
            <TouchableOpacity onPress={() => {
              video.current.playAsync()
            }}>
              <PlayVideo fill={iconColor} />
            </TouchableOpacity>
          </View>
          : null
      }
    </View>
  )
}

export default VideoView
