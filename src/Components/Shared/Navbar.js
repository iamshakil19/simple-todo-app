import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const navigateTologin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start md:ml-20">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addTask">Add Task</Link></li>
                        {
                            user ?
                                <button onClick={handleLogout} className='btn btn-sm'>Logout</button>
                                :
                                <button onClick={navigateTologin} className='btn btn-sm'>Login</button>
                        }
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">Todoist</Link>
            </div>
            <div class="navbar-end hidden lg:flex md:mr-20">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/" className='font-medium'>Home</Link></li>
                    <li><Link to="/addTask" className='font-medium'>Add Task</Link></li>
                    {
                        user ?
                            <button onClick={handleLogout} className='btn '>Logout</button>
                            :
                            <button onClick={navigateTologin} className='btn'>Login</button>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;