import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import Button from '@/views/general/Button'
import { AccountSettings } from '@/assets/svgs'
import FooterTouchable from '@/components/FooterTouchable'
type discoveryArray = {
  id: number;
  heading: string;
};
interface Props {
  discoverArray: discoveryArray[];
  heading: string;
}

const FaqInnerCard: FC<Props> = ({ discoverArray, heading }) => {
  return (
    <View>
      <View style={{ marginTop: 0 }}>
        <Text style={style.textStyle}>
          <Text style={style.yellowColor}>/</Text> {heading}
        </Text>
        {discoverArray.map((item, index) => {
          return <FooterTouchable key={index} name={item.heading} />
        })}
      </View>
    </View>
  )
}

export default FaqInnerCard
