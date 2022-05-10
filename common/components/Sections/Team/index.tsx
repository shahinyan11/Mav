import React, { FC, useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Linkedin } from '@/assets/svgs'
import image from '@/assets/images/jordan.png'
import Button from '@/views/general/Button'
import styles from './styles'
import { Props } from './types'
import { device } from '@/constants'

const Team: FC<Props> = ({ data }: Props) => {
  return (

    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{data.title}</Text>
        {!device.isTablet && <Text style={styles.text}>{data.text}</Text>}

        {
          data.list.map((value, index) => (
            <View key={index} style={styles.JobItem}>
              <Text style={styles.jobTitle}>{value}</Text>
              {
                device.isTablet
                  ? <Text style={styles.apply}>Apply on LinkedIn </Text>
                  : <Linkedin color={'blue'} />
              }
            </View>
          ))
        }

        <Button
          status={'primary'}
          customStyles={styles.button}
          // onPress={() => {}}
        >
          <View>
            <Text style={styles.buttonText}>
              View all jobs
            </Text>
          </View>
        </Button>
      </View>
      {
        device.isTablet
          ? <View style={styles.right}>
            <Image source={image} style={styles.image} />
          </View>
          : null
      }


    </View>
  )
}

export default Team

