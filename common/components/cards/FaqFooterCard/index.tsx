import React, { FC, useState } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
// import styles from './styles';
import FooterIcons from '@/components/FooterIcon'

// interface Props {
//   data: any;
// }

const FaqFooterCard: FC = ({}) => {
  const [hover, setHover] = useState(false)
  const socialMedia = [
    { id: 1, img: require('@/assets/icons/twitter.png') },
    { id: 2, img: require('@/assets/icons/instagram.png') },
    { id: 3, img: require('@/assets/icons/facebook.png') },
    { id: 4, img: require('@/assets/icons/youtube.png') },
    { id: 5, img: require('@/assets/icons/monogram.png') },
    { id: 6, img: require('@/assets/icons/linkdin.png') },
  ]
  return (
    <View>
      <View
        style={{
          backgroundColor: '#837E7C',
          height: 1,
          marginVertical: 15,
          marginTop: 35,
        }}
      ></View>
      <View
        style={{
          padding: 20,
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ flexDirection: 'row', marginLeft: 16 }}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text
            style={{
              color: '#837E7C',
              fontSize: 15,
              alignSelf: 'center',
            }}
          >
            © 2021 Maven Arena
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            alignSelf: 'stretch',
            paddingBottom: 20,
          }}
        >
          {socialMedia.map((item, index) => {
            return <FooterIcons key={index} image={item.img} />
          })}
        </View>
      </View>
    </View>
  )
}

export default FaqFooterCard
