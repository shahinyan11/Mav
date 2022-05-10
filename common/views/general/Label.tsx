import React, { FC, ReactElement, ReactText } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import { theme } from '@/config/theme'

interface Props {
  children: ReactElement | ReactText,
  status?: 'basic' | 'primary' | 'warning',
  icon?: string,
}


const Label: FC<Props> = ({ children, status = 'basic', icon }) => {
  const styleContainer = {
    backgroundColor: theme[`color-${status}-default`],
  }

  const styleText = {
    color: theme[status === 'basic' ? 'color-basic-800' : 'text-control-color'],
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.controlContainer, styleContainer])}>
        {icon && <Icon name={icon} fill={styleText.color} style={styles.icon}/>}
        <Text category="label" style={StyleSheet.flatten([styles.text, styleText])}
          status='control'>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  controlContainer: {
    flexDirection: 'row',
    height: 24,
    borderRadius: 33,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 12,
    paddingLeft: 12,
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
  },
  icon: {
    alignItems: 'center',
    height: 16,
    width: 16,
    marginRight: 5.5,
  },
})

export default Label
