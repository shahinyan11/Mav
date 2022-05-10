import React, { FC } from 'react'
import { View, ImageBackground, Animated, TouchableWithoutFeedback, Text } from 'react-native'
import styles from './styles'
interface Props {
  item: any
}


const NavCard: FC<Props> = ({ item }) => {
  // const animated = new Animated.Value(1)


  // const fadeOut = () => {
  //   Animated.timing(animated, {
  //     toValue: 0,
  //     duration: 500,
  //   }).start()
  // }

  return (
    <TouchableWithoutFeedback
      // onPress={fadeOut}
    >
      <View style={styles.card}>
        <ImageBackground source={item.img} style={styles.cardImage} resizeMode='cover'>
          {/* <Animated.View style={[styles.blurView, {*/}
          {/*  width: animated.interpolate({*/}
          {/*    inputRange: [0, 1],*/}
          {/*    outputRange: ['0%', '100%'],*/}
          {/*  }),*/}
          {/* }]} />*/}
          <Text style={styles.cardTitle}> {item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}


export default NavCard
