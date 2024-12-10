import {Text, View} from "react-native";

interface NumberInputBoxProps {
  label: string;
  min?: number;
  max?: number;
}

function NumberInputBox({label, min, max}: NumberInputBoxProps) {
  return (
    <View>
      <input type="number" min={min} max={max}></input>
      <Text>{label}</Text>
    </View>
  )
}

export default NumberInputBox;
