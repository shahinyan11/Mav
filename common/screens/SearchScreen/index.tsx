import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Platform,
} from 'react-native'
import styles from './styles'
import { Text } from 'native-base'
import SessionsCardItem from '@/components/SearchCards/SessionsCard/SessionsCardItem'
import SearchInput from '@/components/SearchInput'
import { Close, Filter, Search } from '@/assets/svgs'
import { baseballData } from '@/screens/SearchScreen/searchData'
import { backgroundImages } from '@/assets/images'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'
import { SettingsRoutes } from '@/config/routes'
import { ratio } from '@/constants'
import { Play } from '@/assets/svgs/Search/Play'
import { AI } from '@/assets/svgs/Search/AI'
import { LinearGradient } from 'expo-linear-gradient'
import Shadow from '@/components/Shadow'
import Course from '@/models/course'
import CourseCard from '@/components/SearchCards/CourseCard/CoursesCardItem'
import talentImage from '@/assets/images/talent.png'

const popularArray = [
  'Batting routines',
  'How pitch like a pro',
  'Pre-game routines',
  '2-strike approach',
  'How pitch like a pro',
]
const data = [
  'Jennie Finch',
  'Justin Verlander',
  'Jennie Finch',
  'Lebron James',
  'Lebron James',
]

const coursesList: Course[] = [
  { name: 'Derek Jeter', title: 'Sports Leadership' },
  { name: 'Derek Jeter', title: 'Sports Leadership' },
  { name: 'Derek Jeter', title: 'Sports Leadership' },
  { name: 'Derek Jeter', title: 'Sports Leadership' },
]

const sessionsList = [
  { name: 'Derek Jeter', title: 'Leading from the front' },
  { name: 'Derek Jeter', title: 'Leading from the front' },
  { name: 'Derek Jeter', title: 'Leading from the front' },
  { name: 'Derek Jeter', title: 'Leading from the front' },
]


const SearchScreen = () => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const inputRef = useRef(null)
  const [searchText, setSearchText] = React.useState('')
  const [searchActiveTab, setSearchActiveTab] = React.useState(0)
  const [pressState, setPressState] = React.useState(1)
  const [focused, setFocused] = useState(false)
  const [_baseballData, setBaseballData] = useState([])
  const [searchedList, setSearchedList] = useState([])
  const fadeAnim = useRef(new Animated.Value(0)).current


  useEffect(() => {
    let listAll = []
    baseballData.forEach((item) => {
      listAll = [...listAll, ...item.list]
    })
    return setBaseballData([
      {
        name: 'All',
        list: listAll,
      },
      ...baseballData,
    ])
  }, [])

  const cancel = (dismiss?: boolean) => {
    if (dismiss) {
      Keyboard.dismiss()
      fadeOut()
    }
    setSearchText('')
  }

  const changeSearchText = (text) => {
    setSearchText(text)
  }

  const fadeIn = () => {
    Animated.timing(
        fadeAnim,
        {
          toValue: 200,
          duration: 500,
        },
    ).start()
  }
  const fadeOut = () => {
    Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 500,
        },
    ).start()
  }

  const searchedData = _baseballData[searchActiveTab]?.['list'].sort((a, b) => {
    const text = searchedData?.toLowerCase()
    const bool1 = a?.name.toLowerCase().includes(text)
    const bool2 = b?.name.toLowerCase().includes(text)

    if (bool1 && !bool2) {
      return -1
    }
    if (!bool1 && bool2) {
      return 1
    }
    return 0
  })

  const renderFilterItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setSearchActiveTab(index)
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: ratio.height * 32,
          paddingHorizontal: ratio.width * 18,
          borderRadius: ratio.width * 8,
          marginRight: ratio.width * 8,
          backgroundColor: searchActiveTab === index ? 'rgba(0,0,0, 0.05)' : '#FFF',
        }}
      >
        <Text style={{ fontSize: ratio.width * 14, lineHeight: ratio.height * 20, fontWeight: '400', fontFamily: 'Helvet_medium' }}>
          {item.name}  {item.list?.length}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderSeparator = () => {
    return (
      <View style={{ width: ratio.width * 10 }} />
    )
  }

  const renderIcon = (name: string) => {
    switch (name) {
      case 'convers':
        return <AI width={ratio.width * 13} height={ratio.height * 13} />
      default:
        return <Play width={ratio.width * 13} height={ratio.height * 13} />
    }
  }

  return (
    <ImageBackground
      style={[styles.backgroundImage, { paddingTop: insets.top }]}
      resizeMode={'cover'}
      source={backgroundImages.fgPassBg}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.scrollViewStyle}>
            <View style={[styles.header, { paddingHorizontal: 20 }]}>
              <View style={{ position: 'relative', justifyContent: 'center', flex: 1 }}>
                <Shadow>
                  <SearchInput
                    styleProp={{ color: 'rgba(0, 0, 0, 0.4)' }}
                    ref={inputRef}
                    onChangeText={(value) => {
                      changeSearchText(value)
                    }}
                    keyboardAppearance="dark"
                    onFocus={() => {
                      setFocused(true)
                      fadeIn()
                    }}
                    onBlur={() => {
                      setFocused(false)
                    }}
                    value={searchText}
                  />
                </Shadow>
                {
                  searchText !== ''
                  && <TouchableOpacity
                    onPress={() => {
                      cancel(false)
                    }}
                    style={{ position: 'absolute', right: 18, zIndex: 999 }}
                  >
                    <Close width={ratio.width * 18} height={ratio.height * 18} color={'#000'} />
                  </TouchableOpacity>
                }
              </View>
              {
                <Animated.View
                  style={{
                    overflow: 'hidden',
                    maxWidth: fadeAnim,
                  }}
                >
                  <TouchableOpacity
                    style={{ paddingLeft: 17 }}
                    onPress={() => {
                      cancel(true)
                    }}
                  >
                    <Text style={{
                      fontFamily: 'Helvet_medium',
                      fontSize: ratio.width * 16,
                      fontWeight: '400',
                      lineHeight: ratio.width * 24,
                    }} numberOfLines={1} ellipsizeMode='clip'>Cancel</Text>
                  </TouchableOpacity>
                </Animated.View>
              }
            </View>
            {
              searchText === '' ? focused ? <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <Text style={styles.popularTitle}>Popular searches</Text>
                <View style={{ marginTop: 33 }}>
                  {popularArray.map((value, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
                      <Search />
                      <Text style={styles.popularText}>{value}</Text>
                    </View>
                  ))}
                </View>
              </View>
                : <>
                  <View style={{ marginTop: 25 }}>
                    <ScrollView
                      horizontal
                      contentContainerStyle={{ paddingHorizontal: 20 }}
                      showsHorizontalScrollIndicator={false}>
                      {[
                        'Mentors',
                        'Baseball',
                        'Basketball',
                        'Tennis',
                        'Cricket',
                        'Badminton',
                      ].map((item, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => setPressState(index)}
                            style={[
                              styles.scrolltxtView,
                              {
                                // borderBottomWidth: index == pressState ? 2 : 0,
                                // borderBottomColor:
                                //   index == pressState ? '#FFF200' : 'transparent',
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.scrollTxtStyle,
                                {
                                  color: index == pressState ? 'black' : '#888888',
                                },
                              ]}>
                              {item}
                            </Text>
                            {index == pressState ? (
                              <View
                                style={{
                                  height: 4,
                                  backgroundColor: '#FFF200',
                                  borderRadius: 2,
                                  marginHorizontal: 6,
                                  marginVertical: 3,
                                }}
                              />
                            ) : null}
                          </TouchableOpacity>
                        )
                      })}
                    </ScrollView>
                  </View>
                  <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {pressState == 0 && (
                      <View style={styles.pH_12}>
                        <View style={styles.pt_20}>
                          {data.map((value, index) => (
                            value.toLowerCase().includes(searchText.toLowerCase())
                            && <View
                              key={index}
                              style={styles.mainViewStyle}>
                              <Image
                                source={talentImage}
                                resizeMode={'cover'}
                                style={styles.singleImg}
                              />
                              <Text style={styles.txtStyle}>{value}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    )}
                    {pressState == 1 && (
                      <View style={styles.pb_20}>
                        <View style={{ paddingBottom: 10 }}>
                          <Text style={styles.headingtext}>Courses</Text>
                          <FlatList<Course>
                            style={{ overflow: 'visible' }}
                            keyExtractor={(item) => item.id?.toString()}
                            contentContainerStyle={styles.pH_12}
                            horizontal
                            ItemSeparatorComponent={renderSeparator}
                            showsHorizontalScrollIndicator={false}
                            data={coursesList}
                            renderItem={({ item, index }) => (
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  navigation.navigate('CourseLanding')
                                }}>
                                <Shadow>
                                  <CourseCard course={item} />
                                </Shadow>
                              </TouchableOpacity>

                            )} />
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                          <Text style={styles.headingtext}>Sessions on Pitching</Text>
                          <FlatList
                            keyExtractor={(item) => item.name.toString()}
                            contentContainerStyle={styles.pH_12}
                            horizontal
                            ItemSeparatorComponent={renderSeparator}
                            showsHorizontalScrollIndicator={false}
                            data={sessionsList}
                            renderItem={(item, index: number) => <SessionsCardItem key={index} data={item} />}
                          />
                        </View>
                        <View>
                          <Text style={styles.headingtext}>Sessions on Winning</Text>
                          <FlatList
                            keyExtractor={(item) => item.name.toString()}
                            contentContainerStyle={styles.pH_12}
                            horizontal
                            ItemSeparatorComponent={renderSeparator}
                            showsHorizontalScrollIndicator={false}
                            data={sessionsList}
                            renderItem={(item, index: number) => <SessionsCardItem key={index} data={item} />}
                          />
                        </View>
                      </View>
                    )}

                    {pressState == 2 && (
                      <View style={styles.pH_12}>
                        <View style={styles.pt_2mv_5}>
                          <Text style={styles.maintxtStyle}>Popular</Text>
                        </View>

                        <View style={styles.pt_20}></View>
                      </View>
                    )}

                    {pressState == 3 && (
                      <View style={styles.pH_12}>
                        <View style={styles.pt_2mv_5}>
                          <Text style={styles.maintxtStyle}>Popular</Text>
                        </View>

                        <View style={styles.pt_20}></View>
                      </View>
                    )}
                    {pressState == 4 && (
                      <View style={styles.pH_12}>
                        <View style={styles.pt_2mv_5}>
                          <Text style={styles.maintxtStyle}>Our courses</Text>
                        </View>

                        <View style={styles.pt_20}></View>
                      </View>
                    )}
                    {pressState == 5 && (
                      <View style={styles.pH_12}>
                        <View style={styles.pt_2mv_5}>
                          <Text style={styles.maintxtStyle}>Popular</Text>
                        </View>
                        <View style={styles.pt_20}></View>
                      </View>
                    )}
                  </ScrollView>
                </>
                : <View style={{ flex: 1 }}>
                  <View>
                    <FlatList
                      horizontal={true}
                      data={_baseballData}
                      contentContainerStyle={{ paddingHorizontal: 20 }}
                      showsHorizontalScrollIndicator={false}
                      style={{ marginTop: ratio.height * 12, paddingBottom: 6 }}
                      renderItem={renderFilterItem}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <FlatList
                      data={searchedData}
                      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 18 }}
                      showsVerticalScrollIndicator={false}
                      // style={{ marginTop: 24 }}
                      renderItem={({ item, index }) => (
                        <View
                          key={index}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 32,
                          }}>
                          <View style={{
                            position: 'relative',
                            borderRadius: ratio.width * 8,
                            marginRight: ratio.width * 16,
                            width: ratio.width * 87,
                            height: ratio.height * 87,
                            overflow: 'hidden',
                          }}>
                            <Image style={{
                              width: ratio.width * 87,
                              height: ratio.height * 87,
                              backgroundColor: '#535353',
                              position: 'absolute',
                            }} source={item.img} />
                            <LinearGradient colors={['rgba(0, 0, 0, 0)', '#000000']} style={{ flex: 1, justifyContent: 'flex-end' }}>
                              <View style={{
                                margin: ratio.width * 3,
                                height: ratio.height * 24,
                                backgroundColor: '#000',
                                borderRadius: ratio.width * 8,
                                paddingHorizontal: ratio.width * 6,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                              }}>
                                <View style={{
                                  marginRight: ratio.width * 5,
                                }}>
                                  {renderIcon(item.type)}
                                </View>
                                <Text style={{
                                  width: '70%',
                                  color: '#FFF',
                                  fontFamily: 'Helvet_medium',
                                  fontSize: ratio.width * 12,
                                  fontWeight: '400',
                                }} ellipsizeMode={'tail'} numberOfLines={1}>{item.name}</Text>
                              </View>
                            </LinearGradient>
                          </View>

                          <View>
                            <Text style={{
                              fontFamily: 'Helvet_medium',
                              fontSize: ratio.width * 12,
                              lineHeight: ratio.width * 16,
                              fontWeight: '500',
                              color: '#535353',
                            }}>{item.name}</Text>
                            <Text style={{
                              fontFamily: 'Helvet_medium',
                              fontSize: ratio.width * 16,
                              lineHeight: ratio.width * 24,
                              fontWeight: '700',
                              color: '#000',
                            }}>{item.title}</Text>
                          </View>
                        </View>
                      )}
                    />
                  </View>
                </View>
            }
          </View>
          {
            !focused
              ? <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, right: 20 }}
                onPress={() => {
                  navigation.navigate(SettingsRoutes.FilterScreen.id)
                }}
              >
                <View style={{
                  width: ratio.width * 64,
                  height: ratio.width * 64,
                  borderRadius: ratio.width * 32,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.30,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}>

                  <Filter width={ratio.width * 64} height={ratio.width * 64} />
                </View>
              </TouchableOpacity>
              : null
          }
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default SearchScreen
