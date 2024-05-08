import React, { useState } from 'react'
import { RiUserSearchLine } from "react-icons/ri";
import useConversation from '../../globalstatestore/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return;
    if(search.length < 1) {
      return toast.error("Please search a Valid user")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else {
      toast.error("No Such User Found!");
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search' className='input input-bordered rounded-full mt-2' value={search} onChange={(event) => setSearch(event.target.value)}></input>
      <button type='submit' className='btn btn-circle bg-purple-900 text-gray-300 mt-2'>
        <RiUserSearchLine className='w-6 h-6 outline-none' />
      </button>
    </form>
  )

  
}

export default SearchInput