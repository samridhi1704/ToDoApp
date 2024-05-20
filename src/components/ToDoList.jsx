import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";
import Button from './Button'; // Import the Button component

export default function ToDoList() {
  const [items, setItems] = useState([
    { id: 1, text: "Read SpringBoot", completed: false },
    { id: 2, text: "Complete assignments", completed: false },
    { id: 3, text: "Prepare breakfast", completed: false },
    { id: 4, text: "Sleep for 2 hours", completed: false },
    { id: 5, text: "Take a shower", completed: false }
  ]);
  const [newTask, setNewTask] = useState(""); // State to track the new task input

  const [completedTasksExist, setCompletedTasksExist] = useState(false); // State to track if completed tasks exist

  // Function to handle toggling the completion status of a task
  const toggleCompleted = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
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

  // Function to handle adding a new task
  const addNewTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem = {
        id: items.length + 1,
        text: newTask,
        completed: false
      };
      setItems([...items, newTaskItem]);
      setNewTask(""); // Clear the input field after adding the task
    }
  };

  return (
    <div className="TaskList">
      <div className="AddTaskForm">
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addNewTask} text="Add Task" className="custom-button" />
      </div>
      {items.length === 0 ? (
        <p className="Message">Nothing to do buddy. Sleep!</p>
      ) : (
        <>
          <ul className="List" type='square'>
            {items.map((item) => (
              <ToDoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                toggleCompleted={() => toggleCompleted(item.id)} // Pass item id to toggleCompleted function
              />
            ))}
          </ul>
          {completedTasksExist && ( // Render button only if completed tasks exist
            <Button onClick={deleteCompletedTasks} text="Remove Completed" className="custom-button" />
          )}
        </>
      )}
    </div>
  );
}
