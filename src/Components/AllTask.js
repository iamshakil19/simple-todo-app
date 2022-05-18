import React from 'react';
import { toast } from 'react-toastify';
import useTask from './Shared/useTask';
import TaskCard from './TaskCard';

const AllTask = () => {
    const [allTask, setAllTask] = useTask()

    const handleDeleteTask = _id => {
        const confirm = window.confirm("Are you sure you want to delete this task ?")
        if (confirm) {
            const url = `http://localhost:5000/todo/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Item deleted successfully")
                        const remainingTask = allTask.filter(inventory => inventory._id !== _id)
                        setAllTask(remainingTask)
                    }
                })
        }

    }
    return (
        <div>
            <h2 className='text-center text-3xl my-7 font-bold text-primary'>All Task</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                {
                    allTask.map(task => <TaskCard
                        key={task._id}
                        task={task}
                        handleDeleteTask={handleDeleteTask}
                    ></TaskCard>)
                }
            </div>
        </div>
    );
};

export default AllTask;