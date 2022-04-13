import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlogProvider } from './src/context/BlogContext';

import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import AddNewBlog from './src/screens/AddNewBlog';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Show' component={ShowScreen} />
        <Stack.Screen name='AddNew' component={AddNewBlog} />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
}