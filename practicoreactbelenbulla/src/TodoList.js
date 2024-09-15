import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-6">
            <h1 className="title">Lista de Tareas</h1>

            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Nueva tarea"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={handleAddTask}>
                        Agregar tarea
                    </button>
                </div>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="box">
                        {task}
                        <button
                            className="delete ml-4"
                            onClick={() => handleDeleteTask(index)}>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
