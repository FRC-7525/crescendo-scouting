import Checkbox from "./Components/Checkbox";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import HorizontalRule from "./Components/Horizontal Rule";

function Teleop() {
    const [count, setCount] = useState(0);
    
    if (count < 0) {
        setCount(count + 1);
    }
    

    const addCount = (a: number) => {
        setCount(count + a);
    }

    return (
        <>
            <Button 
            title="+"
            onPress={() => addCount(1)} />

            <Button
            title="-"
            onPress={() => addCount(-1)} />

            
            <Text>{count}</Text>
        
        <HorizontalRule label="Input Source" />
            
        <Checkbox label="Ground" />
        <Checkbox label="Source" />
        </>
    );
}

export default Teleop;