/* function(createRoot) is used to create a new root for react application , part of DOM package */
import { createRoot } from "react-dom/client";

/*imports the app component from from App.js file in the same directory , its the main component */
import App from "./App";

/*selects the DOM element with the id "root" , the same element used in index.html , it is the container where the React application is mounted */
const rootElement = document.getElementById("root");

/*create a new root for react application imported earlier */
const root = createRoot(rootElement);

/* render the app component , The render method is called on the root object, and the App component is passed as JSX */
root.render(<App />);
