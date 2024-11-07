import { default as ExpoCheckbox } from "expo-checkbox";
import { useState } from "react";
import { Text, View } from "react-native"; 

interface CheckboxProps {
    label: string;
}

function Checkbox({label}: CheckboxProps) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View>
         <ExpoCheckbox 
         onValueChange={() => setChecked(!isChecked)} 
            value={isChecked}
         />
            <Text>{label}</Text>
            </View>
    );
}


export default Checkbox;