import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ user }) => {
    const { name, username, email, city, id } = user;
    
    const navigate = useNavigate();
    const showUserInfo = () => {
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div className='bg-slate-300 rounded-md py-3'>
            <h2 className="text-2xl">{name}</h2>
            <small className="text-sm">{username}</small>
            <p className="text-xl">{email}</p>
            <p className="text-xl mb-2">{city}</p>
            <button onClick={showUserInfo} className='bg-orange-500 border-2 border-orange-500 text-white py-1 px-3 rounded-sm duration-300 hover:text-orange-500 hover:bg-transparent'>{username}</button>
            <Link className='ml-2 bg-green-400 py-1 px-3 rounded-sm border-green-400 border-2' to={`/friend/ ${id}`}>See details</Link>
        </div>
    );
};

export default Friend;