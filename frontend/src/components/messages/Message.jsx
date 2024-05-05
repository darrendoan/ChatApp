import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt="image placeholder"
                        src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"}
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-purple-500`}>Hello whats doing</div>
            <div className='items-center opacity-50 text-xs flex gap-1 chat-footer'>11:34pm</div>
        </div>
    )
}

export default Message