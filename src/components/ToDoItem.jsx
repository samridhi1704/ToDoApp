export default function ToDoItem()
{
    const items = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
    /* function getItems(){
         const arr=[];
        for(let i=0;i<items.length;i++)
      {
                arr.push(<li key={i}>{items[i]}</li>);
           }
            return arr;
     } */

     return <> 
    
     {items.map((item,index)=>(
         <li key={index}> {item} </li>
     ))}
 </>
          }