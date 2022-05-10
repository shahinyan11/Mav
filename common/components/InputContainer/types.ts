import { ReactElement, ReactText } from 'react'

export interface Props {
  children: ReactElement | ReactText,
  label: string
}
