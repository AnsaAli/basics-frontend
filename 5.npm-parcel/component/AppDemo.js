import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (<h1>Hello React Element</h1>);

//React component: funtion will return a react elemet/jsx
const HeadingComponent = () => {
  return <h1>Hello from React Component</h1>;
};

//can also write
const HeadingComponent2 = ()=>(
    <div>
        <h1>Hello from HeadingComponent2</h1>
    </div>
)

//need to pass this as a props in Demo comoponet
let resObj = {
    resName : 'ABC',
    place: 'Kakkanad'
}

const Demo= (props)=>{
 const {data} = props
    return(
        <div>
            <h1>{data.resName}</h1>
            <h1>{data.place}</h1>
        </div>
    )
}
const App=()=>{
    return(
        <div>
            <h1>Datas</h1>
            <Demo data = {resObj}/>
        </div>
    )
}




//if there is an array of list
let resList = [{
    resName : 'ABC',
    place: 'Kakkanad'
},
{
    resName : 'ABC2',
    place: 'Kakkanad2'
},
{
    resName : 'ABC3',
    place: 'Kakkanad3'
},
{
    resName : 'ABC4',
    place: 'Kakkanad4'
}]

const Demo2= (props)=>{
 const {data} = props
    return(
        <div>
            <h1>{data.resName}</h1>
            <h1>{data.place}</h1>
        </div>
    )
}
const App2=()=>{
    return(
        <div>
            <h1>Datas App2</h1>
            {/* <Demo2 data = {resList[0]}/>
            <Demo2 data = {resList[1]}/>
            <Demo2 data = {resList[2]}/> */}

            {
                resList.map((list, index) => <Demo2 key={index} data ={list}/>)
            }
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App2 />);
