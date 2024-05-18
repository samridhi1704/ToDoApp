import ToDoItem from "./ToDoItem";

export default function ToDoList()
{

    const items = [
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower"
      ];

      return (
        <div className="TaskList">
          <ul className="List" type='square'>
            {items.map((item, index) => (
              <ToDoItem key={index} text={item} />
            ))}
          </ul>
        </div>
      );
    
}

