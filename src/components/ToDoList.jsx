import ToDoItem from "./ToDoItem";

export default function ToDoList()
{
    return <div className = "TaskList" >
        <ul className="List" type='square'>
            <ToDoItem /> 
        </ul>
    </div>
}

