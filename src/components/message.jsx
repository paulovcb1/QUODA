import React from 'react';

const Message = ({ content, sender }) => {
  const isUser = sender === 'user';

  const messageClasses = `p-3 rounded-lg max-w-xs ${
    isUser ? 'bg-slate-900 text-white' : 'bg-gray-200 text-gray-800'
  }`;

  return (
    <div
      className={`flex items-start mb-2 ${
        isUser ? 'justify-end' : 'justify-start'
      } space-x-2`}
    >
      {!isUser && (
        <img
          src="../images/bot.png"
          alt="Bot Avatar"
          className="w-10 h-10 rounded-full"
        />
      )}
      <div className={messageClasses}>
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {isUser && (
        <img
          src="/images/user.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      )}
    </div>
  );
};

export default Message;



