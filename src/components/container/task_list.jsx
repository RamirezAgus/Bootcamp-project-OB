import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaulTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL);
    const defaulTask2 = new Task('Example2', 'Description 2', true, LEVELS.URGENT);
    const defaulTask3 = new Task('Example3', 'Description 3', true, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaulTask1, defaulTask2, defaulTask3]);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    
    const completedTask = (task) => {
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // Actualizamos el estado del componente con una nueva lista y actualizara la iteracion
        // de las tareas en orden de mostrar las tareas finalizadas.
        setTasks(tempTasks);
    }

    const deleteTask = (task) => {
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    const addTask = (task) => {
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }
 

    return (
        <div className='col-12'>
            <div className='card'>
            {/*Card Header : Title */}
                <div className='card-header p-3'>
                    <h5>
                        Your Task: 
                    </h5>
                </div>
            {/*Card Body : content*/}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px' } }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tasks.map((task, index) => {
                               return( 
                                <TaskComponent 
                                    key={index}
                                    task={task}
                                    complete={completedTask}
                                    remove={deleteTask}>
                                </TaskComponent>
                                )
                            }
                        )}  
                        </tbody>   
                    </table>
                </div>
                <TaskForm add={addTask}></TaskForm>
            </div>
        </div>
    );
};



export default TaskListComponent;
