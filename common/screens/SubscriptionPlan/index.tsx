import React, { FC, useRef, useState, useMemo } from 'react'
import { View, ImageBackground } from 'react-native'
import styles from './styles'
import PlaylistScreenBG from '@/assets/images/Playlist/PlaylistScreenBG.png'
import { useHeaderHeight } from '@react-navigation/elements'
import Bgi1 from '../../assets/images/SubscriptionPlanBG.png'
import Bgi2 from '../../assets/images/SubscriptionPlanBG_1.png'
import PlanCard from '@/components/PlanCard'
import { device, ratio } from '@/constants'
import RBSheet from 'react-native-raw-bottom-sheet'
import Carousel from 'react-native-snap-carousel'
import SubscriptionPlanSheet from '@/components/BottomSheetComponents/SubscriptionPlanSheet'
import { SET_TOAST_MASSAGE } from '@/ActionsTypes'
import { useDispatch } from 'react-redux'

const SubscriptionPlan: FC = () => {
  const headerHeight = useHeaderHeight()
  const dispatch = useDispatch()
  const _carousel = useRef(null)
  let rbsheet = useRef(null)
  const SubscriptionPlanBG = useMemo(() => Bgi1, [])
  const SubscriptionPlanBG1 = useMemo(() => Bgi2, [])
  const [modalOpened, setModalOpened] = useState(false)
  const data = [
    {
      price: '$60',
      type: 'Quarterly',
      discountText: 'Save 20%',
      isActive: true,
      image: SubscriptionPlanBG,
      description: 'If you select this plan, your new plan will take effect after your next billing cycle.',
    }, {
      price: '$240',
      type: 'Annually',
      discountText: 'Save 20%',
      isActive: false,
      image: SubscriptionPlanBG1,
      description: 'Renews September 15th, 2021',
    },
    {
      price: '$60',
      type: 'Quarterly',
      discountText: 'Save 20%',
      isActive: true,
      image: SubscriptionPlanBG,
      description: 'If you select this plan, your new plan will take effect after your next billing cycle.',
    }, {
      price: '$240',
      type: 'Annually',
      discountText: 'Save 20%',
      isActive: false,
      image: SubscriptionPlanBG1,
      description: 'Renews September 15th, 2021',
    }, {
      price: '$60',
      type: 'Quarterly',
      discountText: 'Save 20%',
      isActive: true,
      image: SubscriptionPlanBG,
      description: 'If you select this plan, your new plan will take effect after your next billing cycle.',
    }, {
      price: '$240',
      type: 'Annually',
      discountText: 'Save 20%',
      isActive: false,
      image: SubscriptionPlanBG1,
      description: 'Renews September 15th, 2021',
    },
  ]

  const openModal = () => {
    setModalOpened(true)
    rbsheet?.open()
  }
  const closeModal = () => {
    setModalOpened(false)
    rbsheet?.close()
  }

  const _renderItem = ({ item }) => {
    return (
      <PlanCard
        onPress={() => {
          openModal()
        }} data={item} />
    )
  }

  const pressSuccess = () => {
    closeModal()
    dispatch({
      type: SET_TOAST_MASSAGE,
      payload: {
        type: 'success',
        text: 'Subscription plan updated',
        visible: true,
      },
    })
  }

  return (
    <>
      <ImageBackground
        style={[{ width: '100%', flex: 1, paddingTop: headerHeight + 27 }, modalOpened ? { opacity: 0.1 } : null]}
        resizeMode={'cover'}
        source={PlaylistScreenBG}>
        <View style={styles.container}>
          <Carousel
            removeClippedSubviews={false}
            ref={_carousel}
            data={data}
            renderItem={_renderItem}
            sliderWidth={device.windowWidth}
            itemWidth={ratio.width * 311}
          />
        </View>

      </ImageBackground>
      <RBSheet
        ref={(ref) => rbsheet = ref}
        height={ratio.height * 409}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            backgroundColor: '#161616',
            borderTopRightRadius: ratio.width * 16,
            borderTopLeftRadius: ratio.width * 16,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#535353',
            marginTop: ratio.height * 22,
          },
        }}
        onClose={closeModal}
      >
        <SubscriptionPlanSheet
          onPressSuccess={pressSuccess}
          onPressCancle={closeModal}
        />
      </RBSheet>
    </>
  )
}

export default SubscriptionPlan
