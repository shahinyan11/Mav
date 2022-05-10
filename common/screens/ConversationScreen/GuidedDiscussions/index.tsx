import React, { FC, useState } from 'react'
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { BlurView } from 'expo-blur'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { deg } from 'react-native-linear-gradient-degree'
import DiscussionTopicCard from '@/components/DiscussionTopicCard'

const GuidedDiscussions: FC = ({ data }) => {
  const headerHeight = useHeaderHeight()
  const [activeTab, setActiveTab] = useState(1)
  return (
    <BlurView style={{ ...styles.mainContainer, paddingTop: headerHeight }}
      intensity={95} tint='dark'>
      <View style={styles.questionsContainer}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={{ overflow: 'hidden', marginBottom: 16 }}>
            <TouchableOpacity>
              <DiscussionTopicCard/>
            </TouchableOpacity>
            <TouchableOpacity>
              <DiscussionTopicCard/>
            </TouchableOpacity>
            <TouchableOpacity>
              <DiscussionTopicCard/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <LinearGradient
        style={{ height: 90, width: '100%', position: 'absolute', bottom: 0 }}
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.56)',
          'rgba(0, 0, 0, 1)',
        ]}
        {...deg(180)}
      >
      </LinearGradient>
    </BlurView>
  )
}
export default GuidedDiscussions
