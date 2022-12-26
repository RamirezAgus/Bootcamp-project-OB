import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaulTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaulTask]);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    
    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }
 

    return (
        <div>
            <div>
                <h1>Your Task: </h1>
            </div>
            {/*TO DO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaulTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;