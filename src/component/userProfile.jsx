import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLoginState } from '../redux/slice/loginState';

const UserProfile = ({ handleUser }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoginState(false));
  }


  return (
    <div className='top-16 right-5 text-sm tracking-widest absolute w-fit h-fit p-1 bg-black flex flex-col gap-1 text-gray-200 cursor-pointer rounded-md'>
        <NavLink to='/profile' onClick={handleUser} className='hover:bg-gray-900 px-5 py-2 rounded-md'>
            Profile
        </NavLink>
        <Link onClick={handleLogout} className='hover:bg-gray-900 px-5 py-2 rounded-md' to='/login'>
            <p>Logout</p>
        </Link>
    </div>
  )
}

export default UserProfile