import React, { useState } from 'react';
import Header from './components/header';
import ChatMessages from './components/chatMessages';
import InputArea from './components/inputArea';
import { fetchChatbotResponse } from './api/openIaService';

const App = () => {
  
  const predefinedQuestions = [
    'Para comecarmos seu perfil financeiro faremos algumas perguntas, Você usa cartão de crédito?',
    'Qual o seu gasto mensal médio com ele?',
    'Quantas vezes por ano você viaja?',
  ];

  const [messages, setMessages] = useState([
    { sender: 'bot', content: predefinedQuestions[0] }, 
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]); 
  const [isAskingCocktail, setIsAskingCocktail] = useState(false); 

  const addMessage = (content, sender) => {
    setMessages((prevMessages) => [...prevMessages, { sender, content }]);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) {
      return; // Ignora mensagens vazias
    }
  
    addMessage(message, 'user');
  
    if (currentQuestionIndex < predefinedQuestions.length - 1) {
      setAnswers((prevAnswers) => [...prevAnswers, message]);
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      addMessage(predefinedQuestions[nextQuestionIndex], 'bot');
    } else if (!isAskingCocktail) {
      setAnswers((prevAnswers) => [...prevAnswers, message]);
      addMessage('Obrigado pelas respostas! Agora você pode perguntar o que quiser', 'bot');
      setIsAskingCocktail(true);
    } else {
      try {
        addMessage('Bot está pensando...', 'bot'); // Indicador de carregamento
        const response = await fetchChatbotResponse(message);
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.content !== 'Bot está pensando...')
        );
        addMessage(response, 'bot');
      } catch (error) {
        addMessage('Desculpe, ocorreu um erro ao buscar informações.', 'bot');
      }
    }
  };

  return (
    <div className="bg-white w-full max-w-sm h-screen flex flex-col">
      <Header />
      <ChatMessages messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
