import toast from 'react-hot-toast';
import React, { useState } from 'react'
import { RiUserSearchLine } from "react-icons/ri";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../globalstatestore/useConversation';

// Component for searching users
const SearchInput = () => {
  // Accessing selected conversation and function to set selected conversation from global state
  const { setSelectedConversation } = useConversation();

  // Fetching conversations from the server
  const { conversations } = useGetConversations();

  // State for search input
  const [search, setSearch] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 1) {
      return toast.error("Please search a valid user");
    }
    // Find conversation by user's full name
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      // Set selected conversation
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error("No such user found!");
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      {/* Search input */}
      <input
        type='text'
        placeholder='Search'
        className='input input-bordered rounded-full mt-2'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {/* Search button */}
      <button type='submit' className='btn btn-circle bg-purple-900 text-gray-300 mt-2'>
        <RiUserSearchLine className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
}

export default SearchInput;
