import React from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emojis.js';
import useGetConversations from '../../hooks/useGetConversations.js';

// Component to display list of conversations
const ConversationList = () => {
  // Fetching conversations from the server
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* Mapping through conversations and rendering Conversation component */}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} // Displaying random emoji with each conversation
          lastIdx={idx === conversations.length - 1} // Checking if it's the last conversation
        />
      ))}

      {/* Display loading spinner if conversations are still loading */}
      {loading ? <span className='loading loading-spinner x-auto'></span> : null}
    </div>
  )
}

export default ConversationList;
