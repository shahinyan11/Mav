import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native'
import style from './style'

const FaqTopcard = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/curry.png')}
      resizeMode="contain"
      style={style.imagebg}
      blurRadius={0.1} >
      <Text style={style.heading} >
                Frequently Asked Questions
      </Text>
      <View style={style.topView } >
        <Text style={style.headText}>
                    What we can assist you with?
        </Text>
        <TouchableOpacity style={ style.touchable} >
          <Image resizeMode="contain" style={style.touchablelogo} source={require('@/assets/icons/arrow.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
export default FaqTopcard
