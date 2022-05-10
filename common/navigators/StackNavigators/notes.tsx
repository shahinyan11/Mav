import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NoteComposerScreen from '@/screens/NoteComposerScreen'
import NoteFoldersScreen from '@/screens/NoteFoldersScreen'
import { NotesRoutes } from '@/config/routes'
import NotesFolderScreen from '@/screens/NotesFolderScreen'
import TopNavbar from '@/components/Navigation/TopNavbar'
import NewNotesFolderScreen from '@/screens/NewNotesFolderScreen'
import { useRoute } from '@react-navigation/core'

const { Navigator, Screen } = createStackNavigator()

const NotesStack = () => {
  const route = useRoute()
  return (
    <Navigator
      initialRouteName={NotesRoutes.NoteComposer.id}
      screenOptions={{
        headerShown: true,
        header: (props) => <TopNavbar {...props} />,
      }}>
      <Screen name={NotesRoutes.NoteComposer.id} component={NoteComposerScreen} initialParams={route.params} />
      <Screen name={NotesRoutes.NoteFolders.id} component={NoteFoldersScreen} />
      <Screen name={NotesRoutes.NotesFolder.id} component={NotesFolderScreen} />
      <Screen name={NotesRoutes.NewNotesFolder.id} component={NewNotesFolderScreen} />
    </Navigator>
  )
}

export default NotesStack
