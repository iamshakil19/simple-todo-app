import React from 'react';
import Navbar from './Shared/Navbar';

const AddTask = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const taskDescription = event.target.taskDescription.value
        
        const task = {taskName, taskDescription}
        console.log(task);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Add your notes</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input name='taskName' type="text" placeholder="Task Name" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs mt-3">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea name='taskDescription' type="text" placeholder="Task Description" class="input input-bordered w-full max-w-xs h-20" />
                            </div>
                            <div class="card-actions justify-end mt-5">
                                <input className='btn btn-primary' type="submit" value="Complete" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;