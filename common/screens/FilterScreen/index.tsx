import React, { useLayoutEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Chevron, ChevronUp, Close, Tick } from '@/assets/svgs'
import { BlurView } from 'expo-blur'
import Button from '@/views/general/Button'
import styles from './styles'
import SearchInput from '@/components/SearchInput'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { ratio } from '@/constants'
import { Pressable } from 'native-base'
import { isEmpty } from 'lodash'

const data = [
  {
    title: 'Mentors',
    list: [
      {
        name: '',
        checked: false,
      },
      {
        name: 'Jennie Finch',
        checked: false,
      },
      {
        name: 'Justin Verlander',
        checked: false,
      },
      {
        name: 'Tatis Jr',
        checked: false,
      },
      {
        name: 'Kelley O’Hara',
        checked: false,
      },
    ],
  },
  {
    title: 'Topics',
    list: [
      {
        name: 'Basketball',
        checked: false,
      },
      {
        name: 'Baseball',
        checked: false,
      },
      {
        name: 'Golf',
        checked: false,
      },
      {
        name: 'Softball',
        checked: false,
      },
    ],
  },
  {
    title: 'Course type',
    list: [
      {
        name: 'Signature',
        checked: false,
      },
      {
        name: 'Legacy',
        checked: false,
      },
      {
        name: 'Conversational',
        checked: false,
      },
    ],
  },
  {
    title: 'Soft skills',
    list: [
      {
        name: 'Leadership',
        checked: false,
      },
      {
        name: 'Investing',
        checked: false,
      },
      {
        name: 'Management',
        checked: false,
      },
      {
        name: 'Entrepreneurship',
        checked: false,
      },
      {
        name: 'Communication',
        checked: false,
      },
      {
        name: 'Investing',
        checked: false,
      },
    ],
  },
  {
    title: 'Skill level',
    list: [
      {
        name: 'Beginer',
        checked: false,
      },
      {
        name: 'Intermediate',
        checked: false,
      },
      {
        name: 'Advanced',
        checked: false,
      },
    ],
  },
]

const FilterScreen = () => {
  const navigation = useNavigation()
  const [selectedList, setSelectedList] = useState<Array<object>>([])
  const [visibleList, setVisibleList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [selectData, setSelectData] = useState(data)


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Filter',
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      presentation: 'transparentModal',
      headerLeft: () => (
        <Pressable
          disabled={isEmpty(selectedList)}
          onPress={() => {
            setSelectData(data)
            setSelectedList([])
          }}>
          <Text style={{
            color: !isEmpty(selectedList) ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 0.2)',
            fontSize: ratio.width * 16,
            lineHeight: ratio.width * 24,
            fontFamily: 'Helvet_bold',
          }}>Clear All</Text>
        </Pressable>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Close color={'#fff'} width={24} height={24} />
        </TouchableOpacity>
      ),
    })
  }, [navigation, selectedList])


  const onChecked = (item, group) => {
    const newData = selectData
    const newList = group.list
    const dataIndex = newData.findIndex((obj) => obj.title === group.title)
    const listIndex = newList.findIndex((object) => object.name === item.name)
    if (newList[listIndex].checked) {
      newList[listIndex].checked = false
      const newArr = selectedList.filter((object) => object?.selected?.name !== newList[listIndex]?.name)
      setSelectedList(newArr)
    }
    else {
      newList[listIndex].checked = true
      const data = {
        selected: newList[listIndex],
        data: group,
      }
      setSelectedList([...selectedList, data])
      newData[dataIndex].list = newList
      setSelectData(newData)
    }
  }


  const _onChange = (text) => {
    setSearchText(text)
    const newData = [...selectData]
    newData[0].list.name = data[0].list.filter((value) => {
      return value.name.toLowerCase().includes(text.toLowerCase()) || !value
    })
    setSelectData(newData)
  }

  const renderSearch = () => (
    <View style={{ position: 'relative', justifyContent: 'center', flex: 1 }}>
      <SearchInput
        onChangeText={_onChange}
        value={searchText}
        styleProp={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: searchText.length ? '#C0C0C0' : '#fff',
          textAlign: searchText.length ? 'left' : 'center',
        }}
      ></SearchInput>
      {
        searchText !== ''
        && <TouchableOpacity
          onPress={() => {
            setSearchText('')
          }}
          style={{
            width: ratio.width * 20,
            height: ratio.height * 20,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 18,
            zIndex: 999,
          }}>
          <Close width={ratio.width * 18} height={ratio.height * 18} color={'#fff'} />
        </TouchableOpacity>
      }
    </View>
  )
  const renderSelectedFilter = ({ item }) => {
    return (
      <View style={{
        height: ratio.height * 32,
        paddingLeft: ratio.width * 12,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: ratio.width * 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: ratio.width * 16,
          lineHeight: ratio.height * 32,
          fontFamily: 'Helvet_regular',
          color: '#FFF',
        }}>{item?.selected?.name}</Text>
        <TouchableOpacity
          onPress={() => {
            onChecked(item.selected, item.data)
          }}
          style={{ marginHorizontal: ratio.width * 10 }}>
          <Close
            width={ratio.width * 16}
            height={ratio.height * 16}
            color={'#fff'} />
        </TouchableOpacity>
      </View>
    )
  }

  function dropdownToggle(index:never) {
    if (visibleList.includes(index)) {
      visibleList.splice(visibleList.indexOf(index), 1)
    }
    else {
      visibleList.push(index)
    }
    setVisibleList([...visibleList])
  }

  const renderSelectData = (group:any, groupIndex:never) => {
    return (
      <View key={groupIndex} style={{ paddingHorizontal: ratio.width * 20 }}>
        <TouchableOpacity onPress={() => {
          dropdownToggle(groupIndex)
        }}>
          <View style={styles.groupContain}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            {visibleList.includes(groupIndex) ? (
              <ChevronUp width={16} height={16} />
            ) : (
              <View style={{ paddingTop: 5 }}>
                <Chevron width={16} height={16} color="#FFFFFF" />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {visibleList.includes(groupIndex) ? (
          <FlatList data={group.list} renderItem={({ item, index }) => (
            <View
              key={item.name.toString()}
              style={styles.optionContain}>
              {
                item.name
                  ? <>
                    <Text key={item.toString()} style={styles.optionText}>{item.name}</Text>
                    {item.checked
                      ? <TouchableOpacity
                        style={[styles.checkbox, { backgroundColor: '#000' }]}
                        onPress={() => onChecked(item, group)}>
                        <Tick width={ratio.width * 13} height={ratio.width * 13} />
                      </TouchableOpacity>
                      : <TouchableOpacity
                        style={[styles.checkbox, { borderWidth: 1, borderColor: '#FFF' }]}
                        onPress={() => onChecked(item, group)} />
                    }
                  </>
                  : renderSearch()
              }
            </View>
          )} />
        ) : null}
      </View>
    )
  }


  return (
    <BlurView intensity={125} tint={'dark'} style={styles.blurView}>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={{ marginVertical: selectedList.length && ratio.height * 30 }}>
            <FlatList
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              data={selectedList}
              ItemSeparatorComponent={() => <View style={{ width: ratio.width * 8 }} />}
              showsHorizontalScrollIndicator={false}
              style={{ flexGrow: 0, height: ratio.height * 35 }}
              contentContainerStyle={{ paddingHorizontal: ratio.width * 20 }}
              renderItem={renderSelectedFilter}
            />
          </View>
          <FlatList
            keyExtractor={(item) => item.title.toString()}
            data={selectData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderSelectData(item, index)} />
        </View>
      </KeyboardAvoidingView>
      <View
        style={styles.bottom}>
        <Button status={'info'} disabled={!selectedList.length} customStyles={styles.button} onPress={() => { }}>
          <Text
            style={{ ...styles.btnStyle, color: !selectedList.length ? '#FFF' : '#000' }}>{'Apply filters'}</Text>
        </Button>
      </View>
    </BlurView>
  )
}

export default FilterScreen
