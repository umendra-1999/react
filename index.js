const heading1=React.createElement("h1",{},"hello my world")
const heading2=React.createElement("h2",{},"hello my india")

const container=React.createElement("div",{},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container)