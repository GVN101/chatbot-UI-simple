import React from 'react';
import { Message } from '../types';
import { formatTime } from '../utils/dateUtils';

interface ChatMessageProps {
  message: Message;
  isOwnMessage: boolean;
}

export function ChatMessage({ message, isOwnMessage }: ChatMessageProps) {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-6 group`}>
      {!isOwnMessage && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-sm font-medium mr-2">
          {message.sender[0]}
        </div>
      )}
      <div
        className={`max-w-[70%] rounded-2xl px-5 py-3 shadow-sm ${
          isOwnMessage
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-sm ${isOwnMessage ? 'text-blue-100' : 'text-gray-600'}`}>
            {message.sender}
          </span>
        </div>
        <p className="leading-relaxed">{message.content}</p>
        <span className={`text-xs mt-1 block opacity-0 group-hover:opacity-100 transition-opacity ${
          isOwnMessage ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {formatTime(message.timestamp)}
        </span>
      </div>
      {isOwnMessage && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium ml-2">
          {message.sender[0]}
        </div>
      )}
    </div>
  );
}