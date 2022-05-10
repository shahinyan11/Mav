import React, { FC, useEffect, useState } from 'react'
import { View, FlatList, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import styles from './styles'
import { Button, Text, useColorMode } from 'native-base'
import { StackNavigationHelpers, StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'

import background from '@/assets/placeholders/bg-arenas.png'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import SubNav from '@/views/navigation/SubNav'
import { icons } from '@/components/inputs/assets/icons'
// import { getFonts } from '@/helpers';
// import MasonryList from "react-native-masonry-list";
import { LinearGradient } from 'expo-linear-gradient'
import SessionsCardItem from '@/components/SearchCards/SessionsCard/SessionsCardItem'
import { sessionArray } from './detailedData'

interface Props {
  navigation: StackNavigationHelpers
  options: StackNavigationOptions
}

const DetailedSearch: FC<Props> = ({ navigation, options }) => {
  const [IsReady, SetIsReady] = useState(false)
  const { colorMode } = useColorMode()

  return (
    <View style={styles.container}>
      {/* <Background source={background} /> */}
      <Foreground>
        <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
          <SubNav title={'Detail Page'} notification={true} />
          <ScrollView style={styles.scrollViewStyle}>
            {/* <FlatList
            data={notificationArray}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginBottom: 100 }}
            renderItem={dataSportrenderItem}
          /> */}
            <View></View>

            <View style={{ backgroundColor: 'pink' }}>
              <LinearGradient
                colors={['#F1F1F1', '#F1F1F1']}
                //   start={{x: 0.0, y: 0.25}} end={{x: 1.5, y: 1.0}}
                style={{ width: 410, height: 700 }}
              >
                <ImageBackground
                  source={require('@/assets/images/session/bg_01.png')}
                  style={{
                    width: '100%',
                    height: 700,
                    paddingTop: 50,
                  }}
                  resizeMode={'contain'}
                >
                  <ImageBackground
                    source={require('@/assets/images/session/gettyimages1.png')}
                    style={{
                      width: 410,
                      height: 600,
                      justifyContent: 'flex-end',
                    }}
                    resizeMode={'cover'}
                  >
                    <ImageBackground
                      style={{
                        width: 410,
                        height: 600,
                        paddingHorizontal: 10,
                        justifyContent: 'flex-end',
                        paddingBottom: 100,
                      }}
                      source={require('@/assets/images/session/rect_blur.png')}
                    >
                      <Text
                        style={{
                          fontSize: 40,
                          color: 'white',
                          paddingTop: 10,
                          fontWeight: 'bold',
                          lineHeight: 38,
                          textAlign: 'center',
                          marginHorizontal: 20,
                        }}
                      >
                        Breaking Boundaries
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          marginVertical: 15,
                          fontSize: 16,
                          lineHeight: 24,
                        }}
                      >
                        Known as “The Captain”, Derek Jeters’ legacy is solidified as one of the greatest teammates and leaders in all of
                        sports.
                      </Text>
                    </ImageBackground>
                    <View style={{ marginBottom: 10 }}></View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        alignSelf: 'center',
                      }}
                    >
                      <View
                        style={{
                          position: 'absolute',
                          zIndex: 2,
                          width: '100%',
                          height: 100,
                          backgroundColor: 'black',
                          opacity: 0.9,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '90%',
                            alignSelf: 'center',
                            margin: 2,
                            marginVertical: 18,
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              width: '48%',
                              borderRadius: 8,
                              elevation: 2,
                              backgroundColor: '#FFF200',
                              alignItems: 'center',
                              padding: 15,
                            }}
                            onPress={() => alert('HIII')}
                          >
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Start course</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              width: '48%',
                              backgroundColor: '#ffffff',
                              borderRadius: 8,
                              elevation: 2,
                              alignItems: 'center',
                              padding: 15,
                            }}
                          >
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Talk to Derek</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </ImageBackground>
              </LinearGradient>
              <Text>BREAK</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              {sessionArray.map((item, index) => {
                return (
                  <View
                    style={{
                      height: 150,
                      borderRadius: 8,
                      marginVertical: 10,
                      elevation: 2,
                      borderWidth: 1,
                      borderColor: '#ffffff',
                      flexDirection: 'row',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <ImageBackground
                      // source={require('@/assets/images/session/image1.png')}
                      source={item.img}
                      style={{
                        width: 130,
                        height: 150,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image source={require('@/assets/icons/play_video.png')} style={{ width: 28, height: 28 }} />
                    </ImageBackground>
                    <View style={{ flex: 1, padding: 10 }}>
                      <Text style={{ fontSize: 12, color: '#C0C0C0' }}>S1 • 10 min</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000000',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 14, color: '#535353' }}>{item.subTitle}</Text>
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                        }}
                      >
                        <Image
                          source={icons.add}
                          style={{
                            tintColor: 'black',
                            width: 22,
                            height: 22,
                            alignSelf: 'flex-end',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  margin: 2,
                  marginVertical: 18,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: '48%',
                    borderRadius: 8,
                    elevation: 2,
                    backgroundColor: '#FFF200',
                    alignItems: 'center',
                    padding: 15,
                  }}
                  onPress={() => alert('HIII')}
                >
                  <Text style={{ fontSize: 16, fontWeight: '700' }}>Start course</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    elevation: 2,
                    alignItems: 'center',
                    padding: 15,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: '700' }}>Talk to Derek</Text>
                </TouchableOpacity>
              </View>
              {/* common\assets\images\session\Subtract.png */}
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  width: Dimensions.get('screen').width,
                }}
              >
                <Image
                  source={require('@/assets/images/session/Subtract.png')}
                  style={{
                    width: 30,
                    height: 30,
                    alignSelf: 'center',
                    marginVertical: 25,
                  }}
                />
                <ImageBackground
                  source={require('@/assets/images/session/bg_new.jpg')}
                  style={{
                    width: 380,
                    height: 500,
                    borderRadius: 15,
                    overflow: 'hidden',
                  }}
                >
                  <LinearGradient colors={['#1D0E314D', '#000000']} style={{ width: 380, height: 900 }}>
                    <View style={{ alignContent: 'center', paddingTop: 40 }}>
                      <Text
                        style={{
                          fontSize: 28,
                          color: 'white',
                          lineHeight: 30,
                          textAlign: 'center',
                          paddingHorizontal: 50,
                          fontWeight: 'bold',
                        }}
                      >
                        What’s Derek’s favourite play? Ask him.{' '}
                      </Text>
                      <Image
                        source={require('@/assets/images/session/gettyimages.png')}
                        style={{ width: 380, height: 370 }}
                        resizeMode={'cover'}
                      />
                    </View>
                  </LinearGradient>
                </ImageBackground>

                {/* <Image source={require('@/assets/images/session/bg_new.jpg')} style={{width:385,height:500,borderRadius:15}} /> */}
              </View>
            </View>
          </ScrollView>
        </BlurView>
      </Foreground>
    </View>
  )
}

export default DetailedSearch
