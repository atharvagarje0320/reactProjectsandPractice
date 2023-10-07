import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (<div id="First " > <h1 tabIndex="1">Hello Atharva Here 🚀</h1>
    <h2 tabIndex="2"> I am in Sanjivani College of engineering kpg ✌️</h2>

// </div>)
// React Component : 1) Functional Component :  OLD way of reprresentation of Component 
//                   2) Class Component  : New way of Representation of a Component \




const TitleComponent = () => (
    <h1 tabIndex='2'> I am From Pune (Pimpri Chinchwad )</h1>
)

const FunctionalComponent = () => {

    return (
        <div id="container ">
            <h1 tabIndex='1'>
                Hello Atharva Here 🚀 👁️
            </h1>

            {/* {component} // Putting the Element in Component */}

            <TitleComponent />   {/* put component in Component */}
        </div>
    )
}

const rooot = ReactDOM.createRoot(document.getElementById("root"))
rooot.render(<FunctionalComponent />) // Rendering a component

const FirstComponent = () => (
    <h1>
        First Component👁️
    </h1>

)
const SecondCOmponent = () => {

    return <div>

        {<FirstComponent></FirstComponent >}

        <h2> I am Second Component</h2>



    </div>



}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<SecondCOmponent />)




const Nested = React.createElement("div", { class: "Title" }, "Hello World")
const creatte = ReactDOM.createRoot(document.getElementById("root"));

creatte.render(Nested)



const Element = (<h1> Hello Atharva Here  </h1>)
const Help = ReactDOM.createRoot(document.getElementById("root"))

Help.render(Element)





const FuncComp = () => {
    return (
        <h1>
            Student Alumni Relation Cell 👀
        </h1>
    )
}

const Func = ReactDOM.createRoot(document.getElementById("root"))

Func.render(<FuncComp />)







