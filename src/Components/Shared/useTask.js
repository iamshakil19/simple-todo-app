import React, { useEffect, useState } from 'react';

const useTask = () => {
    const [allTask, setAllTask] = useState([])

       useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, [])
    return [allTask, setAllTask]
};

export default useTask;