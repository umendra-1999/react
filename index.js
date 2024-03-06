import React from 'react'
import ReactDOM from "react-dom/client";



const heading1=React.createElement("h1",{},"welcome to new unboxing vedio")
const heading2=React.createElement("h2",{},"welcome to the coding world")

const container=React.createElement("div",{},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container)