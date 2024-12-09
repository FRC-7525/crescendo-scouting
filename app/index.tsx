import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

function Index() {
    const navigation = useNavigation();

    return (
        <View>
            <Button title="Teleop" onPress={() => { navigation.navigate('teleop') }} />
        </View>
    )
}

export default Index;