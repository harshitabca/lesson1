import React from "react";
import ReactDOM from "react-dom";

const ul = ul.createElement("ul");
const li = li.createElement("li");
li.appendChild(li);
li.appendChild(document.createTextNode("Hey"));

// function App() {
//   return (
//     <div>
//       <Header />
//       <div classname="dummy">
//         <p>This is a dummy text</p>
//         console.log('This is a dummy ')
//       </div>
//     </div>
//   );
// }

const amIAbove16 = true;

function Header() {
  return (
    <Header>
      <h1>I am above 16 {amIAbove16 ? <p>I am above 16</p> : "elder"}</h1>
    </Header>
  );
}

export default Header;
