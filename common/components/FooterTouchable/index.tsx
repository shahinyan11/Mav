import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'

export default function FooterTouchable(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.txt}>{props.name}</Text>

    </TouchableOpacity>
  )
}

const styles=StyleSheet.create(
    {
      container: {

      },
      txt: {

        color: '#837E7C',
        marginHorizontal: 10,
        marginVertical: 8,
        fontSize: 15,


      },
    },
)
