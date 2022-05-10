import { ComponentType } from 'react'
import HomeScreen from '@/screens/HomeScreen'
import ArenasScreen from '@/screens/ArenasScreen'
import NewScreen from '@/screens/NewScreen'
import TermsConditions from '@/screens/TermsConditions'
import SignInScreen from '@/screens/SignInScreen'
import SignUpScreen from '@/screens/SignUpScreen'
import CourseLanding from '@/screens/CourseLanding'
import SearchScreen from '@/screens/SearchScreen'
import TalentScreen from '@/screens/TalentScreen'
import ExpertAdviceScreen from '@/screens/ExpertAdviceScreen'
import HamburgerMenuScreen from '@/screens/HamburgerMenuScreen'
import NotificationsScreen from '@/screens/NotificationsScreen'
import FaqsLandingScreen from '@/screens/FaqLandingScreen'
import FaqDetailScreen from '@/screens/FaqDetailScreen'
import PasswordResetScreen from '@/screens/PasswordResetScreen'
import SettingsPrivacyScreen from '@/screens/SettingsPrivacyScreen'
import GiveFeedbackScreen from '@/screens/GiveFeedbackScreen'
import ContactUsScreen from '@/screens/ContactUsScreen'
import BottomTabNavigator from '@/navigators/BottomTabNavigator'
import AboutScreen from '@/screens/AboutScreen'
import ChoosePlanScreen from '@/screens/ChoosePlanScreen'
import PlaylistsScreen from '@/screens/PlaylistsScreen'
import PlaylistDetails from '@/screens/PlaylistDetails'
import ChangeEmail from '@/screens/ChangeEmail'
import ConversationalAISettingsScreen from '@/screens/ConversationalAI'
import DefaultPlayer from '@/screens/ConversationalAI/DefaultPlayer'
import NotificationsSettingsScreen from '@/screens/NotificationsSettings'
import SubscriptionPlan from '@/screens/SubscriptionPlan'
import NewPasswordScreen from '@/screens/NewPasswordScreen'
import ConversationsScreen from '@/screens/ConversationsScreen'
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal'
import CourseDetailScreen from '@/screens/CourseDetailScreen'
import NotesScreen from '@/screens/NoteFoldersScreen'
import CheckoutScreen from '@/screens/CheckoutScreen'
import NotesStack from '@/navigators/StackNavigators/notes'
import NoteComposerScreen from '@/screens/NoteComposerScreen'
import NoteFoldersScreen from '@/screens/NoteFoldersScreen'
import NotesFolderScreen from '@/screens/NotesFolderScreen'
import NewNotesFolderScreen from '@/screens/NewNotesFolderScreen'
import FilterScreen from '@/screens/FilterScreen'
import CelebrationScreen from '@/screens/CelebrationScreen'
import TipsScreen from '@/screens/TipsScreen'
import ChallengesScreen from '@/screens/ChallengesScreen'
import ResetPassword from '@/screens/ResetPasswordScreen'
import SavedConversations from '@/screens/SavedConversations'
import ConversationsStack from '@/navigators/StackNavigators/conversations'

export interface Route {
  id: string
  label: string
  enabled?: boolean
  component?: ComponentType<any>
}

export interface MainNavRoutes {
  [key: string]: Route
}

export const mainRoutes: MainNavRoutes = {
  SubscriptionPlan: {
    id: 'SubscriptionPlan',
    label: 'Subscription Plan',
    component: SubscriptionPlan,
  },
  NewPassword: {
    id: 'NewPassword',
    label: 'Reset password',
    component: NewPasswordScreen,
  },
  NotificationsSettings: {
    id: 'NotificationsSettings',
    label: 'Notifications',
    component: NotificationsSettingsScreen,
  },
  BottomTabNavigator: {
    id: 'Home',
    label: 'Home',
    component: BottomTabNavigator,
  },
  MenuNavigator: {
    id: 'MenuNavigator',
    label: 'MenuNavigator',
    component: HamburgerMenuScreen,
  },
  PlaylistDetails: {
    id: 'PlaylistDetails',
    label: 'Playlist',
    component: PlaylistDetails,
  },
  CourseLanding: {
    id: 'CourseLanding',
    label: 'Course Landing',
    component: CourseLanding,
  },
  ChoosePlan: {
    id: 'ChoosePlan',
    label: 'Choose Payment',
    component: ChoosePlanScreen,
  },
  Checkout: {
    id: 'checkout',
    label: 'Checkout',
    component: CheckoutScreen,
  },
  Home: {
    id: 'Home',
    label: 'Home',
    component: HomeScreen,
  },
  Talent: {
    id: 'Talent',
    label: 'Talent',
    component: TalentScreen,
  },
  Arenas: {
    id: 'Arenas',
    label: 'Arenas',
    component: ArenasScreen,
  },
  New: {
    id: 'new',
    label: 'New Screen',
    component: NewScreen,
  },
  Search: {
    id: 'Search',
    label: 'Search',
    component: SearchScreen,
  },
  // Profile: {
  //   id: 'Profile',
  //   label: 'Profile',
  //   component: ProfileScreen,
  // },
  CourseDetailScreen: {
    id: 'CourseDetailScreen',
    label: 'CourseDetailScreen',
    component: CourseDetailScreen,
  },
  GetInTouch: {
    id: 'GetInTouch',
    label: 'Get in touch',
    component: NewScreen,
  },
  FaqDetail: {
    id: 'FaqDetail',
    label: 'FAQ',
    component: FaqDetailScreen,
  },
  Notifications: {
    id: 'Notifications',
    label: 'Notifications',
    component: NotificationsScreen,
  },
  SignInScreen: {
    id: 'SignInScreen',
    label: 'Sign In',
    component: SignInScreen,
  },
  SignUpScreen: {
    id: 'SignUpScreen',
    label: 'Sign Up',
    component: SignUpScreen,
  },
  PasswordReset: {
    id: 'PasswordReset',
    label: 'Reset Password',
    component: PasswordResetScreen,
  },
  Playlists: {
    id: 'Playlists',
    label: 'Playlist',
    component: PlaylistsScreen,
  },
  BlankScreen2: {
    id: 'BlankScreen2',
    label: 'Blank Screen 2',
  },
  Conversations: {
    id: 'Conversations',
    label: 'Conversations',
    component: ConversationsScreen,
    enabled: false,
  },
  CelebrationScreen: {
    id: 'CelebrationScreen',
    label: 'CelebrationScreen',
    component: CelebrationScreen,
  },
  Tips: {
    id: 'Tips',
    label: 'Tips',
    component: TipsScreen,
  },
  ChallengesScreen: {
    id: 'ChallengesScreen',
    label: 'ChallengesScreen',
    component: ChallengesScreen,
  },
  SavedConversations: {
    id: 'SavedConversations',
    label: 'Saved Conversations',
  },
}

export const SettingsRoutes: MainNavRoutes = {
  AccountPayment: {
    id: 'AccountPayment',
    label: 'Account & Payment',
    component: TermsConditions,
  },
  SubscriptionPlan: {
    id: 'SubscriptionPlan',
    label: 'Subscription Plan',
    component: PasswordResetScreen,
  },
  ConversationalAI: {
    id: 'ConversationalAISettings',
    label: 'Conversational AI',
    component: ConversationalAISettingsScreen,
  },
  DefaultPlayer: {
    id: 'DefaultPlayer',
    label: 'Default Player',
    component: DefaultPlayer,
  },
  Notifications: {
    id: 'NotificationsSettings',
    label: 'Notifications',
    component: NotificationsSettingsScreen,
  },
  ChangePassword: {
    id: 'ChangePassword',
    label: 'Change Password',
    component: ChangePasswordModal,
  },
  ResetPassword: {
    id: 'ResetPassword',
    label: 'Reset Password',
    component: ResetPassword,
  },
  ChangeEmail: {
    id: 'ChangeEmail',
    label: 'Change Email',
    component: ChangeEmail,
  },
  FilterScreen: {
    id: 'Filter',
    label: 'Filter',
    component: FilterScreen,
  },
  Notes: {
    id: 'Notes',
    label: 'Notes',
    component: NotesScreen,
  },
}

export const HamburgerMenuRoutes = {
  ExpertAdvice: {
    id: 'ExpertAdvice',
    label: 'Expert Advice',
    component: ExpertAdviceScreen,
    enabled: true,
  },
  Faqs: {
    id: 'Faqs',
    label: 'FAQ',
    component: FaqsLandingScreen,
    enabled: true,
  },
  About: {
    id: 'About',
    label: 'About Us',
    component: AboutScreen,
    enabled: true,
  },
  Settings: {
    id: 'Settings',
    label: 'Settings & Privacy',
    component: SettingsPrivacyScreen,
    enabled: true,
  },
  ContactUs: {
    id: 'ContactUs',
    label: 'Contact Us',
    component: ContactUsScreen,
    enabled: true,
  },
  GiveFeedback: {
    id: 'GiveFeedback',
    label: 'Give Feedback',
    component: GiveFeedbackScreen,
    enabled: true,
  },
  TermsConditions: {
    id: 'TermsConditions',
    label: 'Terms & Conditions',
    component: TermsConditions,
    enabled: true,
  },
}

export const NotesRoutes = {
  Notes: {
    id: 'NotesStack',
    component: NotesStack,
  },
  NoteComposer: {
    id: 'NoteComposer',
    component: NoteComposerScreen,
  },
  NoteFolders: {
    id: 'NoteFolders',
    component: NoteFoldersScreen,
  },
  NotesFolder: {
    id: 'NotesFolder',
    component: NotesFolderScreen,
  },
  NewNotesFolder: {
    id: 'NewNotesFolderScreen',
    component: NewNotesFolderScreen,
  },
}

export const ConversationsRoutes = {
  Conversations: {
    id: 'ConversationsStack',
    component: ConversationsStack,
  },
  SavedConversations: {
    id: 'SavedConversations',
    label: 'Saved Conversations',
    component: SavedConversations,
  },
}
