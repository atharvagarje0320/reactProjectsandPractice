 /**
  * <div id = parent >
  * <div id = child
  * <h1>I am H1 tag </h1>
  * </div>
  * 
  * </div>
  * 
  * 
  * const Wrap = React.createElement('div', {id : "parent"} , React.createElement('div', {id : "child"} , React.createElement("h1", {} , "Im H1 tag")))
const Root = ReactDOM.createRoot(document.getElementById("root"));
console.log(Wrap)
Root.render(Wrap)
  * 
  * -------------------------------------------------------------------------------
  * 
  * <div id = parent >
  * <div id = child
  * <h1>I am H1 tag </h1>
  * <h2>Hello </h2>
  * </div>
  * 
  * </div>
  * 
  * 
  * 
  * 
  * 
  * 
  */
 
 
 
 
//  const Heading = React.createElement("h6" , {}, "hello" )
//  const Root = ReactDOM.createRoot(document.getElementById("root"));
//  Root.render(Heading)


const Heading = React.createElement(
  "h1",
  {id : "parent"},

  React.createElement(
  "h1",
  {id : "child"},
  [
    React.createElement(
      "h1",
      {},
      "Atharva"

    ),
    React.createElement(
      "h2",
      {},
      "Garje"
    )
  ]

  


))

const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(Heading)

