import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/logoutButton'

const LogoutBtn = () => {

  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className=' text-white w-6 h-6 cursor-pointer'
          onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutBtn