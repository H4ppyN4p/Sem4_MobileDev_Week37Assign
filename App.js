
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import components
import NotesPage from './components/NotesPage';
import DetailsPage from './components/DetailsPage';


const HomePage = ( {navigation, route} ) => {

  const myList = [{key:1, name:'Anna'}, {key:2, name:'Bob'}]

  function handleButton(item){
    navigation.navigate('Details', {message:item})
  }

  return (
    <View style={styles.container}>

      <View style={styles.buttonView}>
          <Button style={styles.buttons}
          title='Go to Notes page'
          onPress={() =>
          navigation.navigate('Notes')}
          />

          <Button style={styles.buttons}
          title='Go to Details page'
          onPress={() =>
          navigation.navigate('Details')}
          />

          <FlatList 
          data={myList}
          renderItem={(note) => <Button title={note.item.name} onPress={() => handleButton(note.item)} />  }
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

      <Stack.Screen name="Details" component={DetailsPage} />


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
