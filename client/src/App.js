import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components

import InputCars from "./components/InputCars";
import ListCars from "./components/ListCars";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
  return(
  <div className="container">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" exact Component={ListCars} />
        <Route path="/InputCars" exact Component={InputCars} />
        <Route path="/AboutUs" exact Component={AboutUs} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;

// function App() {
//   return (

//     <Fragment>
//       <div className="container">
//         <InputCars />
//         <ListCars />
//       </div>
//     </Fragment>
//   );
// }

// export default App;
