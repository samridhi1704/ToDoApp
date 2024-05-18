import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";
import Button from './Button'; // Import the EmptyButton component


export default function ToDoList() {
  const [items, setItems] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower"
  ]);

  const deleteAllTasks = () => {
    setItems([]); // Set the items array to an empty array to delete all tasks
  };

  return (
    <div className="TaskList">
      <ul className="List" type='square'>
        {items.map((item, index) => (
          <ToDoItem key={index} text={item} />
        ))}
      </ul>
      <Button onClick ={deleteAllTasks} /> {/* Button to delete all tasks */}
    </div>
  );
}
