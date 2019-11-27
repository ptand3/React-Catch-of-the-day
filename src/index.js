/* this is a file where all our components get loaded and get bundled into main bundle.js file 
the component is itself a class which is extended inside the react components */

import React from "react";
import { render } from "react-dom";
// import App from "./components/App";
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#main")); //mounting the root App component that is going to load all the other sub components