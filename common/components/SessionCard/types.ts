interface Data {
  data: object
  onPress?: any
  dataStyles?: object
  more?: boolean
  onPressMore?: () => void
  descriptionStyles?: object
}

export type Props = {
  data: Data
  onPress?: () => void
  descriptionStyles?: object
  onPressMore?: () => void
  dataStyles?: object
}
