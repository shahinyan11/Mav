import React, { FC } from 'react'
import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { ratio } from '@/constants'
import { ArrowRight } from '@/assets/svgs'
import { Route } from '@/config/routes'

interface Props {
  data: Record<string, Route>,
  onPress: (id: string) => void
}

const MenuLinksList: FC<Props> = ({ data, onPress }) => {
  const renderItem = ({ item }: { item: string, index: number }) => {
    const route = data[item]
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: ratio.height * 7,
        }}
        onPress={() =>
          onPress(route.id)
        }>
        <Text
          style={{
            fontSize: ratio.width * 16,
            lineHeight: ratio.height * 24,
            fontFamily: 'Helvet_regular',
          }}>
          {route.label}
        </Text>
        <ArrowRight width={ratio.width * 16} height={ratio.width * 16} />
      </TouchableOpacity>
    )
  }
  return (
    <FlatList<string>
      keyExtractor={(item) => item.toString()}
      data={Object.keys(data)}
      ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
      renderItem={renderItem} />
  )
}

export default MenuLinksList
