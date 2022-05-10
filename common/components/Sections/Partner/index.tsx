import React, { FC } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import styles from './styles'
import { Props } from './types'

const Partner: FC<Props> = ({ data }: Props) => {
  const renderItem = (data: any)=>{
    return (
      <View style={styles.partnerItem}>
        <Image style={styles.partnerIcon} source={data}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
        horizontal={true}
        data={data.partners}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item })=>renderItem(item)}
      />
    </View>
  )
}

export default Partner
