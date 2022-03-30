import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const About = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    },[]);

    
    return (
        <div className='mx-auto w-5/6 py-3'>
            <h1 className="text-3xl text-bule-5-00 font-semibold">This is About Section</h1>
            <p>Here you can know about us.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                {
                    users.map(user => <Friend key={user.id} user={user}></Friend>)
                }
            </div>
        </div>
    );
};

export default About;