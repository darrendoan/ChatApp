import React from 'react'
import SearchInput from './SearchInput'
import ConversationList from './ConversationList'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-r border-slate-400 p-4 '>
            <SearchInput />
            <div className='divider px-3'></div>
            <ConversationList />
            <div className='divider px-3'></div>
            <LogoutBtn />
        </div>
    )
}

export default Sidebar