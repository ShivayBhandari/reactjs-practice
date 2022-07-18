import ReactDOM from "react-dom"; //importing ReactDOM object from react-dom third party package

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); //render method
//the root selected is the root in public/index.html file
// render works as - we want to replace root with <App>
// <App/ > is a component
// render <App /> component in placed instead of id root
