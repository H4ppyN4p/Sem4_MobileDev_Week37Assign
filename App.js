
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import components
import NotesPage from './components/NotesPage';


const HomePage = ( {navigation} ) => {

  return (
    <View style={styles.container}>

      <View style={styles.buttonView}>
          <Button style={styles.buttons}
          title='Go to Notes page'
          onPress={() =>
          navigation.navigate('Notes')}
          />


      </View>

    </View>
  );  
}



const App = () => {

  return (
  <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name='Home' component={HomePage}/>

      <Stack.Screen name="Notes" component={NotesPage} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;

const Stack = createNativeStackNavigator();

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
