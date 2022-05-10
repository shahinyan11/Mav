import React, { FC } from 'react'
import { connect, useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { NativeBaseProvider } from 'native-base'
import AppNavigator from '@/navigators/AppNavigator'
import Tier1Nav from '@/views/navigation/Tier1Nav'
import { theme as themeConfig } from '@/config/theme'
import { AssetIconsPack } from '@/utils/asset-icons'
import { makeAction } from '@/makeActions'

interface State {
  theme: 'light' | 'dark'
}

const Main: FC = () => {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const theme = useSelector((state: State) => state.theme)

  // const toggleTheme = () => {
  //   const nextTheme = theme === 'light' ? 'dark' : 'light'
  //   setTheme(nextTheme)
  // }

  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...themeConfig }}>
        <Layout style={{ flex: 1 }}>
          <NativeBaseProvider>
            <StatusBar hidden={true} />
            <Tier1Nav />
            <AppNavigator />
          </NativeBaseProvider>
        </Layout>
      </ApplicationProvider>
    </>
  )
}
export default Main
