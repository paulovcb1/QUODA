import React from 'react';
import Message from './message';

const ChatMessages = ({ messages }) => {
  return (
    <div className="p-4 space-y-4 flex-1 overflow-y-auto">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} content={msg.content} />
      ))}
    </div>
  );
};

export default ChatMessages;
