import React, { FC } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import makeStyles from './style'

interface Props {
  tabs: any
  onPress: () => void
  styleProp?: object
  activetab?: string
  activeTextStyle?: object
  containerStylesProp?: object
  colors?: object
}

const Tabs: FC<Props> = ({ tabs, onPress, containerStylesProp = {}, styleProp = {}, activetab, activeTextStyle = {}, colors }) => {
  const styles = makeStyles(colors)
  return (
    <View style={[styles.tabContainer, containerStylesProp]}>
      {tabs.map((elem, index) => (
        <TouchableOpacity
          key={elem.key}
          activeOpacity={0.7}
          style={[styleProp, styles.tabContent]}
          onPress={() =>
            onPress({
              index,
              active: elem.key,
            })
          }
        >
          <Text style={[styles.tabTitle, elem.key === activetab ? { ...styles.activeText, ...activeTextStyle } : null]}>{elem.title}</Text>
          {elem.key === activetab ? <View style={styles.activeTab}></View> : null}
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Tabs
