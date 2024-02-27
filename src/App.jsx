import React, { useState } from 'react';
import TaskList from './components/TaskList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '' && selectedDate) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, date: selectedDate }]);
      setNewTask('');
      setSelectedDate(null);
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  return (
    <div>
      <h1>Task Buddy</h1>
      <p style={{fontSize:'20px'}}>Meet TaskBuddy, where tasks meet simplicity! Crush your to-do list with flair!</p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          style={{
            marginRight: '20px',
            padding: '5px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '200px',
            textAlign: 'center',
          }}
          type="text"
          placeholder="What's your task for today"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a due date"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          className="custom-datepicker"
        />
        <button
          style={{
            marginLeft: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgb(87, 167, 190)',
            border: '1px solid rgb(87, 167, 190)',
          }}
          onClick={addTask}
        >
          <i className="fa-solid fa-plus fa-beat"></i>
        </button>
      </div>

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default App;
