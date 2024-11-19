import React, {useState} from 'react';
import { Text, TextInput, Switch} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'; //installed :3

function Post() {
    const [text, setText] = useState('');
    const [penalty, setPenalty] = useState('');
    const [value, setValue] = useState(String);
    const [isFocus, setIsFocus] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const data = [
      { label: 'Climbed', value: '1' },
      { label: 'Failed to climb', value: '2' },
      { label: 'Harmonizing', value: '3' },
      { label: 'Buddy climb', value: '4' },
    ];

    return (
      <>
      <Switch>
      value={isEnabled}
      onValueChange={}
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
        <Dropdown
        labelField='label'
        valueField='value'
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
            setValue(item.value);
          setIsFocus(false);
        }}
        data={data}
        placeholder='Climb?'
        ></Dropdown>
        </>
    )
  }
  
export default Post;