import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from '@ui-kitten/components'
import { Input, Select, SelectItem } from '@ui-kitten/components'
import { BaseInput } from '@/components/inputs'
import InputContainer from '@/components/InputContainer'
import { device } from '@/constants'
import styles from './styles'

const ContactUs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <View style={styles.container}>
      <View style={[styles.top, styles.row]}>
        <View style={{ flex: device.isTablet ? 0.48 : null }}>
          <BaseInput
            placeholder='Full Name'
            size='large'
            // style={styles.input}
            // value={value}
            // onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
        <View style={{ flex: device.isTablet ? 0.48 : null }}>
          <BaseInput
            placeholder='Email'
            size='large'
            // style={styles.input}
            // value={value}
            // onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
      </View>
      <View style={styles.row}>
        <InputContainer label={'What is your question related to?'}>
          <Select
            style={styles.select}
            placeholder={'Select a category'}
            onSelect={(index) => setSelectedIndex(index)}>
            <SelectItem title='Option 1' />
            <SelectItem title='Option 2' />
            <SelectItem title='Option 3' />
          </Select>
        </InputContainer>
      </View>
      <View style={styles.row}>
        <BaseInput
          multiline={true}
          textAlignVertical={'top'}
          textStyle={{ minHeight: 144 }}
          placeholder='Type your question'
          label='Please tell us what you are enquiring about'
          // style={styles.input}
          // value={value}
          // onChangeText={(nextValue) => setValue(nextValue)}
        />
      </View>
      <View style={styles.row}>
        <Button style={styles.button}>
          Submit
        </Button>
      </View>

    </View>
  )
}

export default ContactUs
