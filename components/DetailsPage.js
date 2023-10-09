import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailsPage = () => {
    const route = useRoute();

    console.log()
    
    return(
        <View>
            <Text>
                Hej hej! {route.params?.message.name}
            </Text>
        </View>
    )
}

export default DetailsPage;