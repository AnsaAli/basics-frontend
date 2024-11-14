const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is from React app.js file"
);
//here heading is a react element and so it is normal js object
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method will take the object (heading ), and will converted into h1 tag
//and will keep in the dom
root.render(heading);
