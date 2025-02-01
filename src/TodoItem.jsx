import React from 'react';

const TodoItem = ({ todo, toggleCompleted, removeTodo }) => {
  const handleToggle = () => {
    toggleCompleted(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <li
      className={`flex items-center justify-between p-2 border-b border-gray-200 ${
        todo.completed ? 'text-gray-500' : 'text-gray-700'
      }`}
    >
      <span
        className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRemove}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
