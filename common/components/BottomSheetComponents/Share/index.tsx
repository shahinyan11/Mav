import React, { FC } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './style'
import VSButton from '@/views/general/Button'
import instagram from '../../../assets/svgs/Social/instagram.png'
import facebook from '../../../assets/svgs/Social/facebook.png'
import linkedin from '../../../assets/svgs/Social/linkedin.png'
import twitter from '../../../assets/svgs/Social/twitter.png'
import { ArrowLeft } from '@/assets/svgs'

interface Props {
  data?: any
  onPress?: () => void
  containerStylesProp?: object
  goBack?: ()=>void
}

const Share: FC<Props> = ({ onPress, containerStylesProp = {}, goBack }) => {
  const { grayBG, bottomButtons, lightBG, mb16, container, circleButton, circleButtonContainer, socialIconsStyles }= styles
  return (
    <View style={container}>
      <View style={[styles.containerHeader]}>
        <TouchableOpacity style={{ position: 'absolute', left: 0 }} onPress={goBack} activeOpacity={0.7} >
          <ArrowLeft iconColor={'white'} />
        </TouchableOpacity>
        <Text style={styles.title}>Share</Text>
      </View>
      <View style={circleButtonContainer}>

        <TouchableOpacity activeOpacity={0.7} style={circleButton}>
          <Image style={socialIconsStyles} source={facebook}/>

        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={circleButton}>
          <Image style={socialIconsStyles} source={twitter}/>

        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={circleButton}>
          <Image style={socialIconsStyles} source={linkedin}/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={circleButton}>
          <Image style={socialIconsStyles} source={instagram}/>
        </TouchableOpacity>

      </View>


      <VSButton customStyles={[bottomButtons, grayBG, mb16]}>
        <Text style={{ color: 'white', fontWeight: '500' }}>Send to email</Text>
      </VSButton>
      <VSButton customStyles={[bottomButtons, lightBG]}>
        <Text style={{ color: 'black', fontWeight: '500' }}>Copy link</Text>
      </VSButton>
    </View>

  )
}

export default Share
