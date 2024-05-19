import React , {useState } from 'react';


export default function ToDoItem({text})
{
    /* const items = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
    /* function getItems(){
         const arr=[];
        for(let i=0;i<items.length;i++)
      {
                arr.push(<li key={i}>{items[i]}</li>);
           }
            return arr;
     }  

     return <> 
    
     {items.map((item,index)=>(
         <li key={index}> {item} </li>
     ))}
 </> */

 const [completed , setCompleted] = useState(false);
 const toggleCompleted = () => {
     setCompleted(!completed); //toggle the completed state
 }


 return (
 <li style ={{textDecoration : completed ? 'line-through': 'none'}} onClick={toggleCompleted}>
      {text} </li>
 );
          }