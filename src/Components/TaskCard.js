
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({ task, handleDeleteTask }) => {
    const { taskName, taskDescription, _id } = task


    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
        if (!isActive) {
            toast.success('Reading Complete', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };


    return (
        <div className=''>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body h-60">
                    <h2 className={isActive ? 'line-through card-title' : 'card-title'}>{taskName}</h2>
                    <p className={isActive ? 'line-through overflow-x-auto' : 'overflow-x-auto'}>{taskDescription}</p>
                    <div class="card-actions justify-end">
                        <button onClick={handleClick} class="btn btn-primary btn-sm inline-block mt-3 mr-3">Complete</button>
                        <button onClick={() => handleDeleteTask(_id)} class="btn btn-accent btn-sm inline-block mt-3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;