import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { Props } from './types'
import { Drawer, DrawerGroup, DrawerItem } from '@ui-kitten/components'
import styles from './styles'
import { BlurTint, BlurView } from 'expo-blur'
import { useColorMode } from 'native-base'

const SideBar: FC<Props> = ({ data }: Props) => {
  const { colorMode } = useColorMode()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [deowerTitle, setSeowerTitle] = useState('UI Kitten')
  const [open, setOpen] = useState(false)

  const handleSelect = (item: any) => {
    setSelectedIndex(item.row)
    if (item.section === undefined) {
      setOpen(!open)
    }
  }
  return (
    <View style={[styles.container, open ? { position: 'absolute', zIndex: 10000 } : {}]}>
      <BlurView intensity={100} tint={colorMode as BlurTint} style={styles.blur}>
        <Drawer
          selectedIndex={selectedIndex}
          onSelect={(index) => handleSelect(index)}
          style={{ position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        >
          <DrawerGroup title={data[selectedIndex]} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            {
              data.map((value) => (
                <DrawerItem key={value} title={value} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} />
              ))
            }
          </DrawerGroup>
        </Drawer>
      </BlurView>
    </View>
  )
}

export default SideBar
