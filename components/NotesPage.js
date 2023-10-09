import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import { useState } from 'react';

const NotesPage = () => {

    const [text, setText] = useState('')
    const [notes, setNotes] = useState([])


  
    function buttonHandler(){
      //alert(text)
      setNotes(
        [...notes, {key:notes.length, name:text}]
      )
    }
  
    return (
      <View style={styles.Page}>
        <Button title='Press Me' onPress={buttonHandler}/>
        <TextInput style={styles.TextInput} onChangeText={(txt) => setText(txt)}/>
        <Text>This is the AboutMe section</Text>
        <Text>Some about me textt</Text>
        <FlatList 
          data={notes}
          renderItem={(note) => <Text>{note.item.name}</Text>}
        />
      </View>
    )
  }

  export default NotesPage;

  
  const styles = StyleSheet.create({
    Page: {
      flex: 1,
      backgroundColor: '#eeee',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TextInput: {
      backgroundColor: 'lightblue',
      minWidth: 200
    }
  })