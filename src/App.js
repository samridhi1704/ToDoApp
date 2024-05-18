/*imports the CSS file */
import "./styles.css";
import Header from "./components/Header"; // Import Header component
import ToDoList from "./components/ToDoList";


/*defines a functional react component and exports the default compent of the module */
export default function App() {
  return (
    /*Application mentioned in the .css file */
    <div className="Application">
      <Header /> {/* Render the Header component */}
      <ToDoList /> {/* Render the ToDoList component */}
    </div>
  );
}
