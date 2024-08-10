import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

const ChatApp = () => {
  const [chats, setChats] = useState([]);

  const addChat = (text) => {
    setChats([...chats, { text, replies: [], likes: 0 }]);
  };

  const addReply = (index, replyText) => {
    const newChats = [...chats];
    newChats[index].replies.push(replyText);
    setChats(newChats);
  };

  const likeChat = (index) => {
    const newChats = [...chats];
    newChats[index].likes += 1;
    setChats(newChats);
  };

  return (
    <div>
      <h1>Community Forum</h1>
      <ChatForm addChat={addChat} />
      <ChatList chats={chats} addReply={addReply} likeChat={likeChat} />
    </div>
  );
};

export default ChatApp;
