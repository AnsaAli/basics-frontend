//suppose if have more lines of div

{
  /* <div id="paren">
         <div id="child">
          I am grand child</div>
         </div>
    </div> */
}

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("div", { id: "grandchild" }, 'I am grand child')
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
