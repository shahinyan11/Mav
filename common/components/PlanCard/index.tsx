import React, { FC } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import styles from './style'
import VSButton from '@/views/general/Button'
import { BlurTint, BlurView } from 'expo-blur'
import { useColorMode } from 'native-base'
import Shadow from '../Shadow'


interface Props {
  styleProp?: object
  data?: object
  onPress?: () => void
}

const PlanCard: FC<Props> = ({ data, styleProp = {}, onPress }) => {
  const {
    container, topContainer, topContentBlock, priceStyles, typeStyles, discountContainer, discountText, bottomContainer, description,
    grey, yellow, btnStyle, globalContainer,
  } = styles

  return (
    <Shadow>
      <View style={globalContainer}>
        <View style={[container, styleProp]}>
          <ImageBackground source={data.image} style={topContainer} resizeMode='cover'>
            <View style={topContentBlock}>
              <Text style={priceStyles}>{data?.price}</Text>
              <Text style={typeStyles}>{data?.type}</Text>
              <View style={discountContainer}>
                <BlurView intensity={80} tint="light">
                  <Text style={discountText}>{data.discountText}</Text>
                </BlurView>
              </View>
            </View>
          </ImageBackground>
          <View style={bottomContainer}>
            <Text style={description}>{data.description}</Text>
          </View>

          <VSButton onPress={onPress} disabled={!data.isActive} customStyles={[data.isActive ? yellow : grey, btnStyle]}>
            <Text style={data.isActive ? { color: '#000000' } : { color: '#888888' }}>{data.isActive ? 'Choose this plan' : 'Current plan'}</Text>
          </VSButton>
        </View>
      </View>
    </Shadow>
  )
}

export default PlanCard
