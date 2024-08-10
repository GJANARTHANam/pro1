import React, { useState } from 'react';

const ChatForm = ({ addChat }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addChat(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a chat message"
      />
      <button type="submit">Add Chat</button>
    </form>
  );
};

export default ChatForm;
