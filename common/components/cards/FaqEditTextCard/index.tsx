import ButtonCardItem from '@/components/buttons/ButtonCard'
import React, { FC, useState } from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import styles from './styles'
// interface Props {
//   // item: any;
//   item:string,
//   setCategoryFromModal: string;
// }

const FaqEditTextCard: FC = ({ }) => {
  const questionsArray = [
    { id: 0, type: 'Related to Quiz' },
    { id: 1, type: 'Related to Sports' },
    { id: 2, type: 'Related to Science' },
    { id: 3, type: 'Related to Psychology' },
    { id: 4, type: 'Related to Physics' },
  ]
  const [type, setType] = useState('')
  const [showCategory, setShowCategory] = useState(false)
  const setCategoryFromModal = (item : string) => {
    console.log(item, 'item*******')
    setType(item)
    setTimeout(() => {
      setShowCategory(false)
    }, 500)
  }
  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.headingStyle}>
          Can’t find the answer to your question? Ask us directly!
        </Text>

        <View style={styles.mt_40}>
          <TextInput
            placeholder={'Full Name'}
            placeholderTextColor="#848482"
            style={[styles.textInputStyle]}
          />
          <TextInput
            placeholder={'Email'}
            placeholderTextColor="#848482"
            style={styles.textInputStyle}
          />
          <Text style={styles.withInText}>
            What is your question related to?
          </Text>
          <TouchableOpacity
            onPress={() => setShowCategory(true)}
            style={styles.dropDownView}
          >
            <TextInput
              editable={false}
              placeholder={'Select a category'}
              placeholderTextColor="#848482"
              style={styles.dropDownStyle}
              value={type}
            />

            <View style={styles.dropDownIconView}>
              <Image
                source={require('@/assets/images/icon_dropdown.png')}
                style={styles.dropDownIcon}
              />
            </View>
          </TouchableOpacity>

          {showCategory && (
            <View style={styles.categoryModal}>
              <FlatList
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
                data={questionsArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem ={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setCategoryFromModal(item.type)}
                      style={[
                        styles.selectedItemStyle,
                        {
                          backgroundColor:
                            item.type == type ? 'black' : 'transparent',
                          borderBottomWidth:
                            index + 1 == questionsArray.length ? 0 : 0.5,
                        },
                      ]}
                    >
                      <Text
                        style={{ color: item.type == type ? 'white' : 'black' }}
                      >
                        {item.type}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          )}
          <Text style={styles.withInText}>What would you like to ask?</Text>
          <TextInput
            placeholder={'Type your question'}
            placeholderTextColor="#848482"
            style={styles.textInputStyle}
          />
        </View>
      </View>
      <ButtonCardItem data={'Submit'} onPress={() => alert('submit')} />
    </View>
  )
}

export default FaqEditTextCard
