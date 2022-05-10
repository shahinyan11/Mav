import React, { FC, useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import styles from './styles'
import { Button, Text, useColorMode } from 'native-base'
import CountryPicker from 'react-native-country-picker-modal'
import {
  StackNavigationHelpers,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import background from '@/assets/placeholders/bg-arenas.png'
import {
  CardFieldInput,
  CardField,
  StripeProvider,
} from '@stripe/stripe-react-native'
import BottomView from './bottomView'
import Background from '@/views/layout/Background'
import Foreground from '@/views/layout/Foreground'
import { BlurTint, BlurView } from 'expo-blur'
import SubNav from '@/views/navigation/SubNav'
import NavCard from '../../components/cards/NavCard'
import { icons } from '@/components/inputs/assets/icons'
import { onChange } from 'react-native-reanimated'
import { fetchPublishedKey } from '@/helpers'

const CheckoutScreen = () => {
  const [text, onChangeText] = React.useState('')
  const { colorMode } = useColorMode()
  const [name, setName] = useState('')
  const [zip, setZip] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [toggleBtn, setToggleBtn] = useState(true)
  const [promotion, setPromotion] = useState('')
  const [publishableKey, setPublishableKey] = useState('')
  const [country, setCountry] = useState('United States')
  const [visible, setVisible] = useState(false)

  // http://192.168.11.42:19000

  const PublishableKey = async () => {
    const publishableKey = await fetchPublishedKey() // fetch key from your server here
    console.log('publishableKey', publishableKey)
  }

  useEffect(() => {
    //  PublishableKey();
  }, [])
  const onSelect = (country: Object) => {
    setCountry(country.name)
    setVisible(!visible)
  }

  return (
    <StripeProvider publishableKey={'add stripe key here from environment'}>
      <View style={[styles.container]}>
        <Background source={background} />
        <Foreground>
          <BlurView
            intensity={100}
            tint={colorMode as BlurTint}
            style={styles.blur}
          >
            <SubNav
              title={''}
              button={toggleBtn}
              onTogglePress={() => setToggleBtn(!toggleBtn)}
            />
            <ScrollView
              style={styles.scrollViewStyle}
              contentContainerStyle={styles.minH_100P}
            >
              <TouchableOpacity
                onPress={() => setToggleBtn(!toggleBtn)}
                style={styles.toggleBtnView}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                  {toggleBtn ? 'Add Code' : 'Close'}
                </Text>
                <Image
                  source={toggleBtn ? icons.downArrow : icons.oppDownward}
                  style={styles.toggleBtnStyle}
                />
              </TouchableOpacity>
              {toggleBtn ? (
                <View style={styles.toggleTrue}>
                  <Text style={styles.subscribeUpperText}>
                    Subscribe to Versus All Access
                  </Text>
                  <View style={styles.upperDollarView}>
                    <Text style={styles.dollarTxt}>$ 20.00</Text>
                    <Text style={styles.perMonth}>per month</Text>
                  </View>

                  <Button bg="#FFF200" py={2} my={5} borderRadius={5} >
                    <View style={styles.detailsBtnView} >
                      <Text style={styles.detailsTxt}>Details</Text>
                      <Image
                        source={icons.forwardArr}
                        resizeMode={'contain'}
                        style={styles.forwardArrow}
                      />
                    </View>

                  </Button>
                  <Text style={styles.keepSekingtext}>
                    Keep seeking. Keep working. Keep asking.
                  </Text>
                </View>
              ) : (
                <View style={styles.toggleFalse}>
                  <View style={styles.flex_row}>
                    <View style={styles.width_15P}>
                      <Image
                        source={icons.starMedal}
                        style={styles.starMedal}
                      />
                    </View>
                    <View style={styles.width_70P}>
                      <Text style={styles.subtotalTxt}>Versus All Access</Text>
                      <View style={styles.flex_row}>
                        <Text style={styles.lightClrText}>Qty</Text>
                        <Text style={styles.quantityText}>1</Text>
                        <Text style={styles.lightClrText}>Billed annually</Text>
                      </View>
                    </View>
                    <Text style={styles.priceTxt}>$250.00</Text>
                  </View>
                  <View style={styles.row_mt_18}>
                    <View style={styles.emptyView}>
                      {/* <Image source={icons.starMedal} style={{width:40,height:40}} /> */}
                    </View>
                    <View style={styles.withoutImageView}>
                      <Text style={styles.subtotalTxt}>Subtotal</Text>
                    </View>
                    <Text style={[styles.priceTxt, styles.ViewWithBottomLine]}>
                      $250.00
                    </Text>
                  </View>
                  <View style={styles.row_mt_10}>
                    <View style={styles.emptyView}></View>
                    <View style={styles.btnOrTextInput}>
                      <>
                        {/* <TextInput
                      style={styles.addPromoTxtInput}
                      onChangeText={setPromotion}
                      value={promotion}
                      placeholder={'Add promotion code'}
                    /> */}
                      </>
                      <>
                        {/* <TouchableOpacity style={styles.saveBtnView}>

                        </TouchableOpacity> */}
                        <Button bg="#FFF200" py={2} borderRadius={5} >
                          <View style={styles.detailsBtnView}>
                            <Image
                              source={icons.saveTag}
                              style={styles.savetagicon}
                            />
                            <Text style={styles.saveTxt}>SAVE10</Text>
                            <Image
                              source={icons.close}
                              resizeMode={'contain'}
                              style={styles.closeIcon}
                            />
                          </View>
                        </Button>
                        <View>
                          <Text style={styles.lightClrText}>10% off</Text>
                          <Text style={styles.black_14}>-$25</Text>
                        </View>
                      </>
                    </View>
                  </View>
                  <View style={styles.totalDueTodayView}>
                    <View style={styles.emptyView} />

                    <View style={{ width: '70%' }}>
                      <Text style={{ fontWeight: '400', fontSize: 16 }}>
                        Total due today
                      </Text>
                    </View>
                    <Text style={styles.priceTxt}>$250.00</Text>
                  </View>
                </View>
              )}
              <View style={styles.secondView}>

                <Button bg="#000000" py={2} my={2} borderRadius={4}>
                  <Image
                    source={icons.GPay}
                    resizeMode={'contain'}
                    style={styles.btnImage}
                  />
                </Button>
                <Button bg="#000000" py={2} my={2} borderRadius={4}>
                  <Image
                    source={icons.APay}
                    resizeMode={'contain'}
                    style={styles.btnImage}
                  />
                </Button>

                <View style={styles.payWithCardView}>
                  <View style={styles.lineView} />
                  <Text style={styles.payWithCard}>Or pay with card</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.mTop_20}>
                  <Text style={styles.headingText}>Email</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Email'}
                  />
                </View>
                <View style={styles.mTop_20}>
                  <Text style={styles.headingText}>Card information</Text>

                  <View style={styles.cardFieldView}>
                    <CardField
                      postalCodeEnabled={true}
                      placeholder={{
                        number: '4242 4242 4242 4242',
                      }}
                      cardStyle={inputStyles}
                      style={styles.cardStyle}
                      onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails)
                        onChangeText(cardDetails.number || '')
                      }}
                      onFocus={(focusedField) => {
                        console.log('focusField', focusedField)
                      }}
                    />
                  </View>
                  <View style={styles.nameOnCardView}>
                    <TextInput
                      style={styles.nameOnCardTxtinput}
                      onChangeText={setName}
                      placeholder={'Name on card'}
                      value={name}
                    />
                  </View>
                </View>
                <View style={styles.mTop_20}>
                  <Text style={styles.headingText}>Country or region</Text>
                  <TouchableOpacity
                    onPress={() => setVisible(!visible)}
                    style={styles.countryView}
                  >
                    <CountryPicker
                      containerButtonStyle={{
                        height: 50,
                        justifyContent: 'center',
                      }}
                      {...{
                        withFlag: true,
                        withFilter: true,
                        withEmoji: true,
                        withCloseButton: true,
                        onSelect,
                      }}
                      visible={visible}
                      renderFlagButton={({ onOpen }) => {
                        return (
                          <TouchableOpacity
                            style={styles.dropDownStyle}
                            onPress={() => onOpen()}
                          >
                            <Image
                              source={icons.downArrow}
                              style={styles.dropDownIcon}
                            />
                          </TouchableOpacity>
                        )
                      }}
                    />
                    <TextInput
                      style={styles.countryTxtinputStyle}
                      value={country}
                      editable={false}
                    />
                  </TouchableOpacity>
                  <View style={styles.zipView}>
                    <TextInput
                      style={styles.zipTextInputStyle}
                      onChangeText={setZip}
                      placeholder={'ZIP'}
                      value={zip}
                    />
                  </View>
                </View>
                <View style={{ marginVertical: 30 }}>
                  <Button bg="#EDEDED" py={4} borderRadius={6}>
                    <Text style={styles.subscribeText}>Subscribe</Text>
                  </Button>

                </View>
                <BottomView />
              </View>
            </ScrollView>
          </BlurView>
        </Foreground>
      </View>
    </StripeProvider>
  )
}

const inputStyles: CardFieldInput.Styles = {
  // borderWidth: 0,
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  fontSize: 14,
  placeholderColor: '#999999',
}

export default CheckoutScreen
