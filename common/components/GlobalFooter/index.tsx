import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { Text, Layout } from '@ui-kitten/components'
import { VS, Twitter, Instagram, Facebook, Youtube, M, Linkedin } from '@/assets/svgs'
import footerLight from '@/assets/images/footerLight.png'
import footerDark from '@/assets/images/footerDark.png'
import createStyles from './styles'
import { Props } from './types'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'


const GlobalFooter: FC<Props> = ({ data, type }) => {
  const theme = useSelector((state: RootState) => state.mainReducer.theme)
  const styles = createStyles(theme, type)

  return (
    <Layout style={styles.container}>
      <Image style={styles.bgImage} source={theme === 'light' ? footerLight : footerDark} />
      <View style={styles.content}>
        {
          data.map((value, index) => {
            return (
              <View style={styles.box} key={index}>
                <View style={styles.titleContainer}>
                  <Text style={styles.slash}>/ </Text>
                  <Text style={styles.title}>{value.title}</Text>
                </View>
                <View>
                  {
                    value.links.map((link: string) => (
                      <Text
                        category='p1'
                        style={styles.link}
                      >
                        {link}
                      </Text>
                    ))
                  }
                </View>
              </View>
            )
          })
        }
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.bottomText}>
          <VS width={'32'} height={'18'} />
          <Text style={{ color: 'rgba(136, 136, 136, 1)', marginLeft: 10 }}>© 2021 Maven Arena</Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.socialIcon}>
            <Twitter />
          </View>
          <View style={styles.socialIcon}>
            <Instagram />
          </View>
          <View style={styles.socialIcon}>
            <Facebook />
          </View>
          <View style={styles.socialIcon}>
            <Youtube />
          </View>
          <View style={styles.socialIcon}>
            <M />
          </View>
          <View style={styles.socialIcon}>
            <Linkedin />
          </View>
        </View>
      </View>
    </Layout>
  )
}
export default GlobalFooter
