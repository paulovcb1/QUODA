import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';



const InputArea = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-3 border-t border-gray-300 bg-gray-300 gap-3">
      <i className="fa-solid fa-plus"></i>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escreva o nome de um coquetel..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="flex items-center h-8 w-8 justify-center text-white rounded-full bg-slate-900"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default InputArea;
