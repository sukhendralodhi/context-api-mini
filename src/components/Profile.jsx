import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Profile</h2>
        <p className='text-gray-600'>Username: <span className='font-semibold'>{user?.username}</span></p>
      </div>
    </div>
  )
}

export default Profile