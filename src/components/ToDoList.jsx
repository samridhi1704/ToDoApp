import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";
import Button from './Button'; // Import the Button component

export default function ToDoList() {
  const [items, setItems] = useState([
    { text: "Read SpringBoot", completed: false },
    { text: "Complete assignments", completed: false },
    { text: "Prepare breakfast", completed: false },
    { text: "Sleep for 2 hours", completed: false },
    { text: "Take a shower", completed: false }
  ]);

  const [completedTasksExist, setCompletedTasksExist] = useState(false); // State to track if completed tasks exist

  // Function to handle toggling the completion status of a task
  const toggleCompleted = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
    updateCompletedTasksExist(updatedItems); // Update completedTasksExist state
  };

  // Function to check if completed tasks exist and update state accordingly
  const updateCompletedTasksExist = (updatedItems) => {
    const completedTasks = updatedItems.some(item => item.completed);
    setCompletedTasksExist(completedTasks);
  };

  // Function to delete completed tasks
  const deleteCompletedTasks = () => {
    const filteredItems = items.filter(item => !item.completed);
    setItems(filteredItems);
    setCompletedTasksExist(false); // No completed tasks exist after deletion
  };
  

  return (
    <div className="TaskList">
      {items.length === 0 ? (
        <p className="Message">Nothing to do buddy. Sleep!</p>
      ) : (
        <>
          <ul className="List" type='square'>
            {items.map((item, index) => (
              <ToDoItem
                key={index}
                text={item.text}
                completed={item.completed}
                toggleCompleted={() => toggleCompleted(index)} // Pass toggleCompleted function as prop
              />
            ))}
          </ul>
          {completedTasksExist && ( // Render button only if completed tasks exist
            <Button onClick={deleteCompletedTasks}>Remove Completed</Button>
          )}
        </>
      )}
    </div>
  );
}
