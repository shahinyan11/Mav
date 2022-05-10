import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'

export default function FooterIcons(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>

      <Image source={props.image} style={{ height: 15, width: 15 }} />
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create(
    {
      container: {
      },
      txt: {
        color: '#837E7C',
        margin: 10,
        fontSize: 15,
      },
    },
)
