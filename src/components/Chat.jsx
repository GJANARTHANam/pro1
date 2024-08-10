import React, { useState } from 'react';

const Chat = ({ index, chat, addReply, likeChat }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    addReply(index, replyText);
    setReplyText('');
  };

  return (
    <div>
      <p>{chat.text}</p>
      <button onClick={() => likeChat(index)}>Like ({chat.likes})</button>
      <div>
        {chat.replies.map((reply, replyIndex) => (
          <p key={replyIndex} style={{ marginLeft: '20px' }}>{reply}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={replyText} 
        onChange={(e) => setReplyText(e.target.value)} 
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default Chat;
