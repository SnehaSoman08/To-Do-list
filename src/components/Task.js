import React, { useState } from 'react';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div style={{ backgroundColor: 'rgb(170, 220, 170)', width: '250px', height: '70px', borderRadius: '10px', marginTop: '50px' }}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', fontWeight: 'bolder', fontSize: '20px' }}>
          {task.text}
        </span>
      )}
      <button style={{ fontWeight: 'bolder', marginLeft: '100px', border: '1px solid rgb(170, 220, 170)', backgroundColor: 'rgb(170, 220, 170)' }} onClick={() => onDelete(task.id)}><i className="fa-solid fa-trash"></i></button>

      {isEditing ? (
        <button style={{ fontWeight: 'bolder', marginLeft: '10px', border: '1px solid rgb(170, 220, 170)', backgroundColor: 'rgb(170, 220, 170)' }} onClick={handleEditSave}><i className="fa-solid fa-check"></i></button>
      ) : (
        <button style={{ fontWeight: 'bolder', marginLeft: '10px', border: '1px solid rgb(170, 220, 170)', backgroundColor: 'rgb(170, 220, 170)' }} onClick={handleEditToggle}><i className="fa-solid fa-pencil"></i></button>
      )}

    </div>
  );
};

export default Task;
