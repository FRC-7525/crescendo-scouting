import {Text, View} from "react-native"; 

interface HorizontalRuleProps {
    label: string;
}

function HorizontalRule  ({ label }: HorizontalRuleProps) {
    return (
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width:"auto", textAlign: 'center'}}> { label} </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    );
}

export default HorizontalRule;