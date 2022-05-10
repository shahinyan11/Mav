import React, { FC } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { HamburgerMenuRoutes, mainRoutes, SettingsRoutes } from '@/config/routes'
import * as NavigationService from '@/services/NavigationService'
import HamburgerMenuScreen from '@/screens/HamburgerMenuScreen'
import SettingsPrivacyScreen from '@/screens/SettingsPrivacyScreen'
import ContactUsScreen from '@/screens/ContactUsScreen'
import GiveFeedbackScreen from '@/screens/GiveFeedbackScreen'
import ExpertAdviceScreen from '@/screens/ExpertAdviceScreen'
import AboutScreen from '@/screens/AboutScreen'
import FAQs from '@/screens/FAQs'
import TermsConditions from '@/screens/TermsConditions'
import ConversationalAI from '@/screens/ConversationalAI'
import DefaultPlayer from '@/screens/ConversationalAI/DefaultPlayer'
import NotificationsSettingsScreen from '@/screens/NotificationsSettings'
import SubscriptionPlan from '@/screens/SubscriptionPlan'
import TopNavbar from '@/components/Navigation/TopNavbar'
import FaqDetailScreen from '@/screens/FaqDetailScreen'
import CourseDetailScreen from '@/screens/CourseDetailScreen'
import AccountPayment from '@/screens/AccountPayment'
import ChangeEmail from '@/screens/ChangeEmail'


const { Navigator, Screen } = createStackNavigator()

export const navigate = (name: string[] = [], params: any) => {
  NavigationService.navigate(name, params)
}

const MenuNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        header: (props) => <TopNavbar {...props} />,
      }}
    >
      <Screen
        name={mainRoutes.MenuNavigator.id}
        component={HamburgerMenuScreen}
        options={{
          headerMode: 'float',
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Screen
        name={SettingsRoutes.AccountPayment.id}
        component={AccountPayment}
        options={{
          title: 'Account & Payment',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#000',
        }}
      />
      <Screen
        name={SettingsRoutes.Notifications.id}
        component={NotificationsSettingsScreen}
      />
      <Screen
        name={mainRoutes.CourseDetailScreen.id}
        // options={{
        //   headerShown: true,
        //   headerTransparent: true,
        //   title: 'Course Detail',
        //   cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        // }}
        component={CourseDetailScreen}
      />
      <Screen name={HamburgerMenuRoutes.Faqs.id} component={FaqDetailScreen} options={{ title: 'FAQs' }} />
      <Screen name={mainRoutes.FaqDetail.id} component={FAQs} options={{ title: 'FAQs' }} />
      <Screen
        name={HamburgerMenuRoutes.About.id}
        component={AboutScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
        }} />
      <Screen
        name={HamburgerMenuRoutes.Settings.id}
        component={SettingsPrivacyScreen}
        options={{
          title: HamburgerMenuRoutes.Settings.label,
          headerShown: true,
          headerTransparent: true,
        }} />
      <Screen
        name={SettingsRoutes.ConversationalAI.id}
        component={ConversationalAI}
        options={{
          title: 'Conversational AI',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#000',
        }} />
      <Screen
        name={SettingsRoutes.SubscriptionPlan.id}
        component={SubscriptionPlan}
        options={{
          title: 'Subscription Plan',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#000',
        }} />
      <Screen
        name={SettingsRoutes.DefaultPlayer.id}
        component={DefaultPlayer}
        options={{
          title: 'Default player resolution',
          headerShown: true,
          headerTransparent: true,
        }} />

      {/* <Screen name={mainRoutes.Arenas.id} component={ArenasScreen} options={{ title: 'Arenas' }} />
      <Screen name={mainRoutes.New.id} component={NewScreen} options={{ title: 'New' }} />
      <Screen name={mainRoutes.GetInTouch.id} component={GetInTouch} options={{ title: 'GetInTouch' }} />
      <Screen name={mainRoutes.Faqs.id} component={FAQs} options={{ title: 'FAQs' }} />
      <Screen name={mainRoutes.FaqDetail.id} component={Faq} options={{ title: 'Faq' }} />
      <Screen name={mainRoutes.Plans.id} component={StripeCheckout} options={{ title: 'Plans' }} />
      <Screen name={mainRoutes.CourseLanding.id} component={CourseLanding} />
      <Screen
        name={mainRoutes.PlanScreen.id}
        component={PlanScreen}
        options={{
          title: 'Choose Payment',
          headerShown: true,
          headerTransparent: true,
          header: (props) => <SubNav title={props.options.title} />,
        }}
      />
      <Screen
        name={mainRoutes.About.id}
        component={AboutScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => (
            <View
              style={{
                marginTop: insets.top,
                height: 72,
                justifyContent: 'center',
              }}
            >
              <SubNav title={'About Us'} color={'#FFF'} />
            </View>
          ),
        }}
      />
       */}
      {/* <Screen name={HamburgerMenuRoutes.ExpertAdvice.id} component={ExpertAdviceScreen} options={{ title: 'Expert Advice' }} /> */}
      <Screen name={HamburgerMenuRoutes.ExpertAdvice.id} component={ExpertAdviceScreen} options={{ title: 'Expert Advice' }} />
      <Screen
        name={HamburgerMenuRoutes.ContactUs.id}
        component={ContactUsScreen}
        options={{
          title: 'Contact Us',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: 'black',

        }} />

      <Screen name={HamburgerMenuRoutes.GiveFeedback.id} component={GiveFeedbackScreen} options={{ title: 'Give Feedback' }} />
      <Screen
        name={HamburgerMenuRoutes.TermsConditions.id}
        component={TermsConditions}
        options={{
          title: 'Terms & Conditions',
          headerShown: true,
          headerTransparent: false,
        }} />

    </Navigator>
  )
}

export default MenuNavigator
