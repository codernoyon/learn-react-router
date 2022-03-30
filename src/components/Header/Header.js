import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='bg-blue-300'>
            <nav className='w-5/6 mx-auto py-3 flex items-center justify-between'>
            <Link className='text-2xl font-bold' to="/">Logo</Link>
                <ul className='flex justify-end space-x-5'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/friends">Friends</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;