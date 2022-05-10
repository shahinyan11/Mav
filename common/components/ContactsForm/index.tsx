import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { Props } from './types'
import Button from '@/views/general/Button'
import { Input, Select, SelectItem } from '@ui-kitten/components'
import styles from './styles'
import { BaseInput } from '@/components/inputs'
import InputContainer from '@/components/InputContainer'

const FAQs: FC<Props> = ({ data: Props }) =>{
  const [selectedIndex, setSelectedIndex] = useState(null)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Can’t find the answer to your question? Ask us directly!</Text>
      <BaseInput
        placeholder='Full Name'
        // size='large'
        // style={styles.input}
        // value={value}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />
      <BaseInput
        placeholder='Email'
        size='large'
        style={styles.input}
        // value={value}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />
      <InputContainer label={'What is your question related to?'}>
        <Select
          placeholder={'Select a category'}
          size='large'
          style={styles.select}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          <SelectItem title='Option 1' />
          <SelectItem title='Option 2'/>
          <SelectItem title='Option 3'/>
        </Select>
      </InputContainer>

      <BaseInput
        placeholder='Type your question'
        size='large'
        label='What would you like to ask?'
        style={styles.input}
        // value={value}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button
        status={'basic'}
        // onPress={() => {
        //   setHover(!hover)
        // }}
      >
        <View>
          <Text style={{ color: 'white' }}>Submit</Text>
        </View>
      </Button>
    </View>
  )
}

export default FAQs
