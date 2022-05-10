import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { VS, Twitter, Instagram, Facebook, Youtube, M, Linkedin } from '@/assets/svgs'
import styles from './styles'
import { Props } from './types'

const Footer: FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {
          data.map((value, index) => {
            return (
              <View style={styles.box} key={index}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
                  <Text style={styles.slash}>/ </Text>
                  <Text style={styles.title}>{value.title}</Text>
                </View>
                <View>
                  {
                    value.links.map((link: string, index) => (
                      <Text key={index} style={styles.text} >{link}</Text>
                    ))
                  }
                </View>
              </View>
            )
          })
        }
      </View>
      <View style={styles.bottomContent}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 27 }}>
          <Twitter width={24} height={24} color={'white'}/>
          <Instagram width={24} height={24} color={'white'}/>
          <Facebook width={24} height={24} color={'white'}/>
          <Youtube width={24} height={24} color={'white'}/>
          <M width={24} height={24} color={'white'}/>
          <Linkedin width={24} height={24} color={'white'}/>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <VS width={34} height={20} color={'white'}/>
        <Text style={styles.bottomText}>© 2021 Maven Arena</Text>
      </View>
    </View>
  )
}
export default Footer
