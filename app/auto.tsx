import Checkbox from "./Components/Checkbox";
import NumberInputBox from "./Components/NumberInputBox";
import { Button, Text, View } from "react-native";
import { useState } from "react";


function Auto() {

  const [count, setCount] = useState(0);
    
    if (count < 0) {
        setCount(count + 1);
    }
    
    if (count >8){
      setCount(count-1);
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

    </>
  )
}

export default Auto;
