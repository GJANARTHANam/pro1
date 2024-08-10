import React from 'react';
import Chat from './Chat';

const ChatList = ({ chats, addReply, likeChat }) => {
  return (
    <div>
      {chats.map((chat, index) => (
        <Chat 
          key={index} 
          index={index} 
          chat={chat} 
          addReply={addReply} 
          likeChat={likeChat} 
        />
      ))}
    </div>
  );
};

export default ChatList;
