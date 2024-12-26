import React, { useState } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Message } from './types';

const BOT_NAME = 'ACAD-HELP';
const USER_NAME = 'You';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I assist you today?',
      sender: BOT_NAME,
      timestamp: new Date(Date.now() - 60000),
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: USER_NAME,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isOwnMessage={message.sender === USER_NAME}
            />
          ))}
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
