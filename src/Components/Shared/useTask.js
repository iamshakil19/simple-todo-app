import React, { useEffect, useState } from 'react';

const useTask = () => {
    const [allTask, setAllTask] = useState([])

    useEffect(() => {
        fetch('https://thawing-badlands-59706.herokuapp.com/todo')
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, [])
    return [allTask, setAllTask]
};

export default useTask;