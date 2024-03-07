import React from 'react'
import ReactDOM from "react-dom/client";

// another method of writing the code like html inside the react using the jsx
const heading=<h1>namaste react </h1>
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)