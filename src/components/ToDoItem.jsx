import React, { useState } from 'react';

export default function ToDoItem({ text, toggleCompleted }) {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed); // Toggle the completed state
    toggleCompleted(); // Call the toggleCompleted function from props
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={handleClick}>
      {text}
    </li>
  );
}
