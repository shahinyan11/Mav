import React, { FC, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { theme as themeConfig } from '@/config/theme'
import { AssetIconsPack } from '@/utils/asset-icons'
import { LogBox } from 'react-native'
import { store } from '@/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { getFonts } from '@/helpers'
import Toast from '@/components/Toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppNavigator from '@/navigators/AppNavigator'
import { mainRoutes } from '@/config/routes'
import { default as mapping } from './mapping.json'

LogBox.install()
LogBox.ignoreAllLogs()

const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [fontLoaded, setFontLoaded] = useState(false)
  const [isLogged, setIsLogged] = useState(true)

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  useEffect(() => {
    getFonts().then(() => {
      setFontLoaded(true)
    })
    AsyncStorage.getItem('token').then((value) => {
      // console.log('VALUEEEE**********************',value);
      setIsLogged(!!value)
    })
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...themeConfig }}
          customMapping={mapping}>
          <NativeBaseProvider>
            <Toast />
            <StatusBar hidden={true} />
            {/* {device.isTablet ? <TopNavTablet /> : <Tier1Nav />}*/}
            {fontLoaded && <AppNavigator initialRouteName={isLogged ? mainRoutes.BottomTabNavigator.id : mainRoutes.SignInScreen.id} />}
          </NativeBaseProvider>
        </ApplicationProvider>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
