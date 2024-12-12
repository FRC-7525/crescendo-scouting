import {useState} from 'react';
import { Text, TextInput, Switch} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Post() {
    const [text, setText] = useState('');
    const [penalty, setPenalty] = useState('');
    const [value, setValue] = useState(String);
    const [isFocus, setIsFocus] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [drop, setDrop] = useState([]);

    const data = [
      { label: 'Climbed', value: '1' },
      { label: 'Failed to climb', value: '2' },
      { label: 'Harmonizing', value: '3' },
      { label: 'Buddy climb', value: '4' },
    ];

    return (
      <>
      <Switch>
      onValueChange={toggleSwitch}
      value={isEnabled}
      </Switch>
        <TextInput 
        placeholder ="Penalty points"
        onChangeText={newText => setPenalty(newText)}
        keyboardType="numeric" 
        maxLength={3}
        />
        <TextInput
        placeholder="Any comments?"
        onChangeText={newText => setText(newText)}
        defaultValue={text} 
        maxLength={250}
        multiline={true}
        />
        <DropDownPicker
        multiple={true}
        min={0}
        max={5}
        autoScroll={true}
        />

        </>
    )
  }
  
export default Post;