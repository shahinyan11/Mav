import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
// import { Props } from './types'
import TickIcon from '../../assets/images/CourseLanding/TickIcon.png'
import PlayVideo from '../../assets/images/CourseLanding/PlayVideo.png'
import { AddIcon } from '@/assets/svgs'
import styles from './styles'
import { More } from '@/assets/svgs/More'

interface Props {
  // data?: object
  data?: sessionCard;
  dataStyles?: object
  descriptionStyles?: object
  onPressMore?: () =>void
  onPress?: ()=>void
}
type sessionCard={
  title:string;
  name:string;
  description:string;
}


const SessionCard: FC<Props> = ({ data, onPress, dataStyles, onPressMore, descriptionStyles }: Props) => {
  const [play, setPlay] = useState(true)
  const playButton = () => {
    return play ? (
      <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(!play)}>
        <Image source={TickIcon} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(!play)}>
        <Image source={PlayVideo} />
      </TouchableOpacity>
    )
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground style={styles.videoContainer} resizeMode={'cover'} source={data.video}>
        {playButton()}
        <View style={styles.progressContainer}></View>
        <View style={styles.progress}></View>
      </ImageBackground>
      <View style={styles.rigthContainer}>
        <View style={styles.dataContainer}>
          <Text style={[styles.dateText, dataStyles]}>{data.date}</Text>
          {onPressMore ? <TouchableOpacity activeOpacity={0.7} onPress={onPressMore}><More /></TouchableOpacity> : null}
        </View>

        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={[styles.descriptionText, descriptionStyles]}>{data.description}</Text>
        <View style={[styles.addIconContainer, data?.name ? styles.flexStart : styles.flexEnd]}>
          {data?.name
            ? <Text style={styles.nameStyle}>{data.name}</Text>
            : <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
              <AddIcon width={20} height={20} iconColor={'black'} />
            </TouchableOpacity>
          }
        </View>
      </View>
    </Pressable>
  )
}

export default SessionCard
