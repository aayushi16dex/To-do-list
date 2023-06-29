import { useState } from 'react';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [searchTask, setSearchTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') {
            alert("Enter a task");
            return;
        }
        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, task]);
        setNewTask('');
        console.log(tasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchTask.toLowerCase())
    );

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 mr-8"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            addTask();
                        }
                    }}
                />
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2"
                    placeholder="Search task"
                    value={searchTask}
                    onChange={(e) => setSearchTask(e.target.value)}
                />
            </div>

            <ul className='mb-5'>
                {filteredTasks.map((task) => (
                    <div className='mb-4'>
                        <li key={task.id} className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.text}
                            <button className="px-2 py-1 ml-2 text-sm bg-green-500 text-white rounded"
                                onClick={() => handleToggleTask(task.id)}>
                                Complete
                            </button>

                            <button
                                className="px-2 py-1 ml-2 text-sm bg-red-500 text-white rounded"
                                onClick={() => handleDeleteTask(task.id)}>
                                Delete
                            </button>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
