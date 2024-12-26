import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white border-t p-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
          <button
            type="submit"
            className="p-2 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full hover:shadow-lg transition-shadow"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}