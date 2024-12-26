import React from 'react';
import { Bot } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                AI Assistant
              </h1>
              <p className="text-sm text-gray-500">Ask me anything</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}