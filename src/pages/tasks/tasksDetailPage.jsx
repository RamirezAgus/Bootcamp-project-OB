import React from 'react';
import { useParams } from 'react-router-dom';

const TasksDetailPage = () => {

    const {id} = useParams();

    return (
        <div>
            <h1>Task Detail - {id}</h1>
        </div>
    );
}

export default TasksDetailPage;
