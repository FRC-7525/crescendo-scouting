import React, {useState} from 'react';
import { Text, TextInput} from 'react-native';

function Post() {
    const [text, setText] = useState('');
    const [penalty, setPenalty] = useState('');
    return (
        <>
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
        </>
    )
}

export default Post;