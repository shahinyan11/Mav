import React, { FC, useLayoutEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView, FlatList, TouchableOpacity,
} from 'react-native'
import { BlurView } from 'expo-blur'
import { useHeaderHeight } from '@react-navigation/elements'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { deg } from 'react-native-linear-gradient-degree'


const tabs = [
  'Mentality',
  'Leadership',
  'Technique',
]

const TopicsView: FC = ({ data }) => {
  const headerHeight = useHeaderHeight()
  const [activeTab, setActiveTab] = useState(1)
  return (
    <BlurView style={{ ...styles.mainContainer, paddingTop: headerHeight }}
      intensity={95} tint='dark'>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.56)',
          'rgba(0, 0, 0, 1)',
        ]}
        {...deg(180)}>
        <View style={{ width: '100%', marginTop: 32 }}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tabs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setActiveTab(index)}>
                {activeTab === index
                  ? <LinearGradient
                    style={styles.tabBox}
                    colors={['rgba(255, 255, 255,  0.16 )', 'rgba(255, 255, 255, 0.17)']}
                    {...deg(125.25)}>
                    <Text style={{ ...styles.tab, color: 'rgba(255, 255, 255,  1)' }}>
                      {item}
                    </Text>
                  </LinearGradient>
                  : <View style={styles.tabBox}>
                    <Text style={styles.tab}>
                      {item}
                    </Text>
                  </View>
                }

              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.questionsContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <Text style={{ color: '#FFF', marginBottom: 12 }}>{data.length} questions</Text>
            {data.map((question, index) => (
              <View
                key={index}
                style={{ paddingVertical: 4, overflow: 'hidden', marginBottom: 12 }}>
                <LinearGradient
                  style={styles.message}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  colors={['rgba(255, 255, 255, 0.16)', 'rgba(255, 255, 255, 0)']}>
                  <Text style={styles.description}>{question.text}</Text>
                </LinearGradient>
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </BlurView>
  )
}
export default TopicsView
