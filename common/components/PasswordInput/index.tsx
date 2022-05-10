import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { CircleCheck } from '@/assets/svgs'
import { BaseInput } from '@/components/inputs'
import { icons } from '@/components/inputs/assets/icons'
import { ratio } from '@/constants'


interface Props {
  newPassword?: string
  setNewPassword?: () => string
  currentPassword?: string
  setCurrentPassword?: () => string
  setIsValid?: () => boolean
  passwordReset?: boolean
}

const PasswordInput: FC<Props> = ({ newPassword, setNewPassword, currentPassword, setCurrentPassword, setIsValid, passwordReset }) => {
  const [checkList, setCheckList] = useState({
    upLowLetters: false,
    numericChars: false,
    specialChars: false,
  })

  const passwordValidate = (password: string) => {
    const upLowLetters = !!password.match(/(?=.*[a-z])(?=.*[A-Z])/)
    const numericChars = !!password.match(/(?=.*\d)/)
    const specialChars = !!password.match(/(?=.*[@$!%*#?&])/)
    const isValid = upLowLetters && numericChars && specialChars

    setNewPassword(password)
    setCheckList({
      upLowLetters,
      numericChars,
      specialChars,
    })
    setIsValid(isValid)
  }

  const getColor = (checked: boolean) => {
    return checked ? '#63E788' : '#C0C0C0'
  }

  return (
    <View>
      <View>
        {!passwordReset && <BaseInput
          label='Current Password'
          placeholder='Current Password'
          autoCapitalize='none'
          value={currentPassword}
          secureIcon={icons.eye}
          onChange={(value) => {
            setCurrentPassword(value)
          }}
        />}
        <BaseInput
          label='New Password'
          placeholder='New Password'
          autoCapitalize='none'
          value={newPassword}
          secureIcon={icons.eye}
          onChange={passwordValidate}
        />
      </View>
      <View style={{ marginTop: ratio.height*27 }}>
        <Text style={{ fontSize: ratio.width*14, lineHeight: ratio.height*24, fontWeight: '500', fontFamily: 'Helvet_medium' }}>Password requirements</Text>
      </View>
      <View style={{ marginTop: ratio.height*16 }}>
        <View style={styles.checkListItem}>
          <CircleCheck color={getColor(checkList.upLowLetters)} />
          <Text style={[styles.text_14_20, styles.checkText]}>Uppercase and lowercase letter (A,z)</Text>
        </View>
        <View style={styles.checkListItem}>
          <CircleCheck color={getColor(checkList.numericChars)} />
          <Text style={[styles.text_14_20, styles.checkText]}>Numeric character (0-9)</Text>
        </View>
        <View style={styles.checkListItem}>
          <CircleCheck color={getColor(checkList.specialChars)} />
          <Text style={[styles.text_14_20, styles.checkText]}>Special character (!,%,#, etc)</Text>
        </View>
      </View>
    </View>
  )
}

export default PasswordInput
