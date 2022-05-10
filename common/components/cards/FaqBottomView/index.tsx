import { aboutArray, discoverArray, talentArray, topicsArray } from '@/screens/FaqDetailScreen/faqData'
import React, { FC, useState } from 'react'
import { View, Image, Text, Dimensions, ImageBackground } from 'react-native'
import FaqFooterCard from '../FaqFooterCard'
import FaqInnerCard from '../FaqInnerCard'
import styles from './style'

// interface Props {
//   data: any;
// }

const FaqBottomView: FC = ({ }) => {
  return (
    <View>
      <ImageBackground
        source={require('@/assets/images/VS.png')}
        resizeMode={'stretch'}
        style={styles.imagebackgroundInnerStyle}
      >
        <View
          style={[
            styles.faqInnerCardStyle,
            {
              marginHorizontal: -10,
            },
          ]}
        >
          <FaqInnerCard
            discoverArray={discoverArray}
            heading={'Discover'}
          />
          <FaqInnerCard discoverArray={aboutArray} heading={'About'} />
        </View>
        <View style={styles.faqInnerCardStyle}>
          <FaqInnerCard discoverArray={talentArray} heading={'Talent'} />
          <FaqInnerCard discoverArray={topicsArray} heading={'Topics'} />
        </View>
        <View>
          <FaqFooterCard />
        </View>
      </ImageBackground>
    </View>
  )
}

export default FaqBottomView
