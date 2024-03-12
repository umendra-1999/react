import React from 'react'
import ReactDOM from "react-dom/client";

// another method of writing the code like html inside the react using the jsx
const heading=<h1>namaste react </h1>
const HeaderComponent=function(){
    return(
        <div>
            {/* this is for taking the access from heading variable or we write any javascript code inside this curly braces   */}
        {heading}  
            <h1>namaste react from umendra</h1>
            <h2> this is h2 tag </h2>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)