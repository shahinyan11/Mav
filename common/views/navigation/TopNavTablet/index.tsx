import React, { FC } from 'react'
import { View } from 'react-native'
import { Avatar, Search, Bell } from '@/assets/svgs'
import { Tab, TabBar, Layout } from '@ui-kitten/components'
import { navigate } from '@/navigators/AppNavigator'
import Logo from '@/views/navigation/Logo'
import { mainRoutes } from '@/config/routes'
import styles from './styles'

interface Props {
  menuOpen: boolean
  menuHandler: () => void
}

const TopNavTablet: FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.left}>
        <TabBar
          style={styles.tabBar}
          selectedIndex={selectedIndex}
          onSelect={(index) => {
            setSelectedIndex(index)
            const arr = Object.keys(mainRoutes)
            navigate(mainRoutes[arr[index]]['id'], {})
          }}>
          {Object.keys(mainRoutes).map((k) => (
            <Tab key={k} title={k.toUpperCase()} />
          ))}
        </TabBar>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBox}>
          <Search />
        </View>
        <View style={styles.iconBox}>
          <Bell />
        </View>
        <View style={styles.iconBox}>
          <Avatar />
        </View>
      </View>
    </View>
  )
}


export default TopNavTablet
