import React, { FC } from 'react'
import { Text, ImageBackground, Image, View } from 'react-native'
import styles from './style'
import CardBgLogo from '../../assets/PaymentCard/CardBgLogo.png'
import Visa from '../../assets/PaymentCard/Visa.png'
import { LinearGradient } from 'expo-linear-gradient'

const PaymentCard = (): JSX.Element => {
  return (
    <LinearGradient
      colors={['#535353', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 0.7 }}
      style={styles.paymentCardContainer}>
      <ImageBackground
        style={styles.paymentCardItem}
        resizeMode="cover" source={CardBgLogo}>
        <View style={styles.cardContainer}>
          <Image source={Visa} style={styles.cardType} />
          <View style={styles.paymentCardNumbersContainer}>
            <Text style={styles.paymentCardNumbersText}>****</Text>
            <Text style={styles.paymentCardNumbersText}>****</Text>
            <Text style={styles.paymentCardNumbersText}>****</Text>
            <Text style={styles.paymentCardNumbersText}>0023</Text>
          </View>
          <Text style={styles.paymentCardMonth}>06 / 24</Text>
          <Text style={styles.paymentCardOwner}>ARINA TROITSKAIA</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  )
}

export default PaymentCard
