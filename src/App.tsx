import React from 'react';
import './App.css';

function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}

/*hello()*/


function App() {
    debugger
    console.log("App rendering")
    return (
        <div>
           {/* This is APP component*/}
         {/*   <Rating/>*/}
            <Accordion title={ "Menu" } collapsed={true}/>
            <Accordion title={ "Users" } collapsed={false}/>
        </div>
    );
}

export default App;

function Rating() {
    console.log("Rating rendering")
    return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: any) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

}

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}
function Accordion(props: AccordionPropsType) {

    if (props.collapsed === true) {
        return  <div>
            <AccordionTitle title={props.title}/></div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>
    }

}

type AccordionTitlePropsType = {
    title: string;
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}
type AccordionBodyPropsType = {
    title: string;
}
    function AccordionBody(props: AccordionBodyPropsType) {
        console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

