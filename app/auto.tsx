import Checkbox from "./Components/Checkbox";
import NumberInputBox from "./Components/NumberInputBox";


function Auto() {
  return (
    <NumberInputBox label="Notes scored during auto" min={0} max={8}/>
  )
}

export default Auto;
