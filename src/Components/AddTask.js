import React from 'react';
import { toast } from 'react-toastify';
import Navbar from './Shared/Navbar';

const AddTask = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const taskDescription = event.target.taskDescription.value

        const task = { taskName, taskDescription }
        fetch('https://thawing-badlands-59706.herokuapp.com/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    event.target.reset()
                    toast.success("Your task added. You will see the task on the home page.", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }
    return (
        <div className='bg-base-200'>
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
                                <input name='taskName' type="text" placeholder="Task Name" class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control w-full max-w-xs mt-3">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea name='taskDescription' type="text" placeholder="Task Description" class="input input-bordered w-full max-w-xs h-20" required />
                            </div>
                            <div class="card-actions justify-end mt-5">
                                <input className='btn btn-primary' type="submit" value="Submit" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;