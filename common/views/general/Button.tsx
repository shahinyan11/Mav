import React, { FC, ReactElement, ReactText, useState } from 'react'
import { Button, ButtonProps } from '@ui-kitten/components'
import { StyleSheet, Text } from 'react-native'

interface Props extends ButtonProps {
  children: ReactElement | ReactText
  icon?: ReactElement
  size?: 'comfortable' | 'compact'
  customStyles?: any
  btnTextStyle?: object
}

const VSButton: FC<Props> = ({ btnTextStyle = {}, customStyles, children, icon, status = 'basic', size = 'comfortable', ...props }) => {
  const [hover, setHover] = useState<boolean>(false)
  const styles: Array<any> = [style.button]

  const hoverSupported = !props.disabled && ['basic', 'primary', 'warning'].includes(status) && props.appearance !== 'ghost'
  if (hover && hoverSupported) styles[styles.length] = style.hover

  if (size === 'compact') styles[styles.length] = style.compact

  return (
    <Button
      {...props}
      status={status}
      accessoryLeft={icon}
      style={[StyleSheet.flatten(styles), customStyles || {}]}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text style={btnTextStyle}>{children}</Text>
    </Button>
  )
}

const style = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  hover: {
    shadowColor: 'black',
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.24,
    shadowRadius: 10,
  },
  compact: {
    height: 40,
  },
})

export default VSButton
