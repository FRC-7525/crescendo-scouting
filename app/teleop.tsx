import { useState } from "react";
import { Button, Text } from "react-native";

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
            title="+1"
            onPress={() => addCount(1)} />

            <Button
            title="-1"
            onPress={() => addCount(-1)} />

            <Button
            title="+2"
            onPress={() => addCount(2)} />

            <Button
            title="-2"
            onPress={() => addCount(-2)} />

            <Text>{count}</Text>
        </>
    )
}

export default Teleop;