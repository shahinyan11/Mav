import React, { FC, useEffect, useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Text, useColorMode } from 'native-base'
import {
  StackNavigationHelpers,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import background from '@/assets/placeholders/bg-arenas.png'

// interface Props {
//   navigation: StackNavigationHelpers;
//   options: StackNavigationOptions;
//   // publishableKey:String
// }

const BottomView: FC = ({
  // navigation, options
}) => {
  const [text, onChangeText] = React.useState('')
  const { colorMode } = useColorMode()

  return (
    <View style={styles.alignSelf_center}>
      <Text style={styles.byConfirmText}>
            By confirming your subscription, you allow Togethere to charge your
            card for this payment and future payments in accordance with their
            terms.
      </Text>
      <Text style={styles.poweredBy}>
            Powered by <Text style={styles.stripeText}>{'  '}stripe</Text>
      </Text>
      <View style={styles.bottomViewStyle}>
        <TouchableOpacity style={styles.width_55P}>
          <Text style={styles.bottomtxtStyle}>Terms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.width_50P}>
          <Text style={styles.bottomtxtStyle}>Privacy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomView
