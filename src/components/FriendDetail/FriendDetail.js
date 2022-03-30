import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams()
    return (
        <div className='h-screen flex items-center justify-center mx-auto w-5/6'>
            <h1 className="text-2xl">This detail about dosto number {params.friendId} </h1>
        </div>
    );
};

export default FriendDetail;