import React from 'react';
import { FiSearch } from 'react-icons/fi';

function ConversationList({ conversations, activeConversation, onSelectConversation, searchTerm, onSearchChange }) {
  const filtered = conversations.filter(conv =>
    conv.conversationName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>Aucune conversation</p>
          </div>
        ) : (
          filtered.map((conv) => (
            <div
              key={conv._id}
              onClick={() => onSelectConversation(conv._id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition hover:bg-gray-50 ${
                activeConversation === conv._id ? 'bg-gray-100' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {conv.conversationName || 'Conversation'}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {conv.lastMessage}
                  </p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(conv.lastMessageAt).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ConversationList;
