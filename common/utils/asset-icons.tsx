import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

const IconProvider = (source: ImageSourcePropType) => ({
  toReactElement: ({ animation, ...props }: any) => (<Image {...props} source={source}/>),
})

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    // 'vs': IconProvider(require('../assets/icons/vs.svg')),
    'play': IconProvider(require('@/assets/images/play.png')),
    // 'plus':IconProvider(require('@/assets/images/'))
  },
}
