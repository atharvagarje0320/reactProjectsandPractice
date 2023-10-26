import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent"
import BodyComponent from "./components/BodyComponent";

// const Cards = {
//     backgroundColor: "red"
// }

// style={Cards}

const AppLayoutComponent = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <BodyComponent />
            <footerComponent />


        </div>
    );
};

const Rooot = ReactDOM.createRoot(document.getElementById("root"));
Rooot.render(<AppLayoutComponent />);

