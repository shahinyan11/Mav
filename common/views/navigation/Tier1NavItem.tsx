import React, { FC } from 'react'
import { Pressable, Text } from 'native-base'
import { ArrowRight } from '@/assets/svgs'
import { Route } from '@/config/routes'
import { ratio } from '@/constants'

interface Props {
  route: Route
  handler: (route: string) => void
}

const Tier1NavItem: FC<Props> = ({ route, handler }) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: ratio.height*40,
      }}
      onPress={() =>
        handler(route.id)
      }>
      <Text
        style={{ fontSize: ratio.width * 16, fontWeight: '400', lineHeight: ratio.height*24, fontFamily: 'Helvet_regular' }}
        py="4"
        letterSpacing="sm">
        {route.label}
      </Text>
      <ArrowRight width={ratio.width*16} height={ratio.width*16} />
    </Pressable>
  )
}

export default Tier1NavItem
