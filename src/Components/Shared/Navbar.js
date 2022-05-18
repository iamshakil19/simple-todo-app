import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start ml-20">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addTask">Add Task</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Todoist</a>
            </div>
            <div class="navbar-end hidden lg:flex mr-20">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/" className='font-medium'>Home</Link></li>
                    <li><Link to="/addTask" className='font-medium'>Add Task</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;