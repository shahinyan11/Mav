import React, { useLayoutEffect } from 'react'
import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Close, Folder } from '@/assets/svgs'
import { useHeaderHeight } from '@react-navigation/elements'
import { challengesData } from '@/screens/ChallengesScreen/challengesData'
import styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'
import badges from '../../assets/images/Badges.png'
import { CardStyleInterpolators } from '@react-navigation/stack'

type Challenge = {
  id: string
  text: string
  image: string
}

interface ChallengeCardProps {
  challenge: Challenge
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const { text } = challenge
  return (
    <View style={styles.challengeCard}>
      <Image source={badges} style={styles.challengesBadge} />
      <View style={styles.bgTransparent}>
        <Text style={{ ...styles.title }}>{text}</Text>
      </View>
    </View>
  )
}

const ChallengesScreen = () => {
  const navigation = useNavigation()
  const headerHeight = useHeaderHeight()
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Challenges',
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Close color="#fff" width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <View style={[styles.container, { paddingTop: headerHeight + 22 }]}>
      <View style={styles.scroll}>
        <FlatList<Challenge>
          showsVerticalScrollIndicator={false}
          style={styles.srcollList}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          columnWrapperStyle={{ justifyContent: 'space-between', width: width - 40 }}
          contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom }]}
          data={challengesData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item: challenge, index }) => (
            <View
              key={index}
              style={[styles.challengesOuterCard, {
                width: (width - 56) / 2,
                height: ((width - 56) / 2) * 1.15,
              }]}>
              <ChallengeCard challenge={challenge} />
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default ChallengesScreen
