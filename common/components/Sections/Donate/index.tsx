import React, { FC, useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import Button from '@/views/general/Button'
import styles from './styles'
import { Props } from './types'
import { BaseInput } from '@/components/inputs'

const Donate: FC<Props> = ({ data }: Props) => {
  const [money, setMoney] = useState('')
  const [fullNmae, setFullName] = useState('')
  const [email, setEmail] = useState('')


  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Text style={styles.title}>{data.title}</Text>
        <View>
          <View >
            <Text style={{
              fontSize: 16,
              lineHeight: 24,
            }}>How much you can donate</Text>
            <BaseInput
              value={money}
              placeholder={'$25'}
              placeholderTextColor={'rgba(0, 0, 0, 0.1)'}
              onChangeText={(value)=>{setMoney(value)}}
              textStyle={{ fontSize: 40, lineHeight: 48, fontWeight: 'bold' }}
              wrapperStyle={{ paddingHorizontal: 0 }}
            />
          </View>
          <BaseInput
            label={'Full Name'}
            value={fullNmae}
            placeholder={'Full Name'}
            onChangeText={(value)=>{setFullName(value)}}
            wrapperStyle={styles.inputContainer}

          />

          <BaseInput
            label={'Email'}
            placeholder={'Email'}
            value={email}
            onChangeText={(value)=>{setEmail(value)}}
            wrapperStyle={styles.inputContainer}
          />
        </View>
        <Button
          status={'primary'}
          customStyles={styles.button}
          // onPress={() => {}}
        >
          <View>
            <Text style={styles.buttonText}>
              Donate
            </Text>
          </View>
        </Button>
      </View>
    </View>
  )
}

export default Donate
