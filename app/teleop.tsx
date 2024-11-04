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
            title="AMP Note (+)"
            onPress={() => addCount(1)} />

            <Button
            title="AMP Note (-)"
            onPress={() => addCount(-1)} />

            <Button
            title="SPEAKER Note (Not Amplified) (+)"
            onPress={() => addCount(2)} />

            <Button
            title="SPEAKER Note (Not Amplified) (-)"
            onPress={() => addCount(-2)} />

            <Button
            title="SPEAKER Note (Amplified) (+)"
            onPress={() => addCount(5)} />

            <Button
            title="SPEAKER Note (Amplified) (-)"
            onPress={() => addCount(-5)} />

            <Text>{count}</Text>
        </>
    )
}

export default Teleop;