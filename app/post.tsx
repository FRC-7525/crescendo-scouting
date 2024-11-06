import React, {useState} from 'react';
import { Text, TextInput} from 'react-native';

function Post() {
    const [text, setText] = useState('');
    return (
        <TextInput
          placeholder="Any comments?"
          onChangeText={newText => setText(newText)}
          defaultValue={text} 
          maxLength={250}
          multiline={true}
          />
    )
}

export default Post;