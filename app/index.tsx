import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

function Index() {
    const navigation = useNavigation();

    return (
        <View>
        <Button onPress={() => { navigation.navigate('teleop') }}>Teleop</Button>
        </View>
    )
}

export default Index;