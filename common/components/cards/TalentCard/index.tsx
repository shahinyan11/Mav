import React, { FC } from 'react'
import { View, ImageBackground, Animated, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
interface Props {
  item: any;
  index: number;
}
const TalentCard: FC<Props> = ({ item, index }) => {
  // return <View style={{flex:1 , backgroundColor: 'white', flexDirection:'row',padding:20, marginVertical:10}}>
  //     <Text>1</Text>
  //     <Text numberOfLines={1} style={[ styles.txtStyle,{flex: 1, backgroundColor:'yellow', }]}>{'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look'}</Text>
  //     <View style={{backgroundColor: 'green', padding: 10, position: 'absolute', right: 0, elevation: 5,shadowOffset:{height: 0, width: 5}, shadowColor:'black' }}>
  //                     <Text>Over lap</Text>
  //     </View>
  // </View>
  return (
    //    <LinearGradient  colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.04)']}
    //     style={styles.fullCard} >
    <View style={styles.fullCard}>
      {/* <LinearGradient  colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.04)']}
        style={styles.fullCard} > */}
      <View style={styles.width_10P}>
        {(index == 1 || index == 6 || index == 9) && (
          <Image
            source={require('@/assets/icons/Subtract.png')}
            style={styles.AI_Icon}
          />
        )}
      </View>

      <View style={[styles.flex_1, { marginRight: 10 }]}>

        <Text
          numberOfLines={1}
          style={[
            styles.txtStyle,
            {
              opacity: index == 0 ? 0.2 : 1,
            },
          ]}
        >
          {item.title.length < 20 ? (
            `${item.title}`
          ) : (
            <>
              {item.title.substring(0, 23)}
              <Text style={{ opacity: 0.2, color: 'grey' }}>
                {item.title.substring(24)}
              </Text>
            </>
          )}
        </Text>
        <View
          style={[styles.pillLabelStyle, {

            backgroundColor:
            item.status == 0
              ? 'transparent'
              : item.status == 1
              ? 'yellow'
              : 'black',
          }]}
        >
          <Text style={[
            styles.pillLabel,
            {
              color:
                item.status == 0
                  ? 'transparent'
                  : item.status == 1
                  ? 'black'
                  : 'white',
              textShadowColor:
                item.status == 0
                  ? 'transparent'
                  : item.status == 1
                  ? 'black'
                  : 'white',

            },
          ]}>

            {item.status === 0 ? ' ' : item.status === 1 ? 'New' : 'Coming soon'}
          </Text>
        </View>

      </View>

      {/* <View
        style={[
          styles.pillLabelStyle,
          {
            backgroundColor:
              item.status == 0
                ? 'transparent'
                : item.status == 1
                ? 'yellow'
                : 'black',
          },
        ]}
      >
        <Text
          style={[
            styles.pillLabel,
            {
              color:
                item.status == 0
                  ? 'transparent'
                  : item.status == 1
                  ? 'black'
                  : 'white',
              textShadowColor:
                item.status == 0
                  ? 'transparent'
                  : item.status == 1
                  ? 'black'
                  : 'white',
              textShadowOffset: { width: 0.3, height: 0.4 },
              textShadowRadius: 1,
            },
          ]}
        >
          {item.status === 0 ? ' ' : item.status === 1 ? 'New' : 'Coming soon'}
        </Text>
      </View> */}
      {/* </LinearGradient> */}
    </View>
    // </LinearGradient>
  )
}

export default TalentCard
